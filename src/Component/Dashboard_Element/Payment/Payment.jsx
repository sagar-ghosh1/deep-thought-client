import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckForm from "./CheckForm";
import DynamicTitle from "../../../DynamicTitle/DynamicTitle";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHER_KEY)

const Payment = () => {
  DynamicTitle("Payment")
  const [money, setMoney] = useState([]);
  const { id } = useParams();
  //   console.log(id)

  useEffect(() => {
    fetch(`https://deep-thought-server-sagar-ghosh1.vercel.app/payment/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setMoney(data)
      })
  }, [id])

  const price = parseFloat(money.price);
  // console.log(typeof price)

  return (
    <div className="py-[220px]">
      <div>
        <h2 className='text-center text-[#141414] text-[40px] font-medium mb-10'>payment</h2>
        <Elements stripe={stripePromise}>
          <CheckForm price={price} money={money}></CheckForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;