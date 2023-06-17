import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './CheckForm.css'


const CheckForm = ({ money, price }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext)
  const [errors, setErrors] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [process, setProcess] = useState(false);
  const [transactionId, setTransactionId] = useState("")

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price > 0) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.clientSecret)
          setClientSecret(data.clientSecret)
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      setErrors(error.message)
      console.log("error", error)
    }
    else {
      setErrors("")
      // console.log("paymentMethod",paymentMethod)
    }

    setProcess(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown@gmail.com",
            name: user?.displayName || "unknown"
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError)
    }

    setProcess(false)
    console.log("paymentIntent", paymentIntent)
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payments = {
        instructor_name: money.instructor,
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        image: money.image,
        date: new Date(),
        items: money._id,
        Dance: `${money.name}Dance`,
        payment: "successful",
      }
      //   console.log(payments)
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(payments)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.insertedId) {
            navigate("/dashboard/select_class")
            Swal.fire({
              position: 'center-center',
              icon: 'success',
              title: 'Payment has been successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }

  }


  return (
    <form className="lg:w-[60%] w-full mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="text-center">
        <button type="submit" className="btn-dash px-10 mt-10" disabled={!stripe || !clientSecret || process}>
          Pay
        </button>
        {
          errors && <p className="font-semibold text-red-600 text-[32px] mt-5">{errors}</p>
        }
        {
          transactionId && <p className="font-semibold text-green-600 text-[32px] mt-5">Your Transaction Id is {transactionId}</p>
        }
      </div>
    </form>
  );
};

export default CheckForm;