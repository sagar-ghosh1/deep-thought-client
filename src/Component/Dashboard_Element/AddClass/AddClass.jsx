import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import DynamicTitle from "../../../DynamicTitle/DynamicTitle";


const AddClass = () => {
    DynamicTitle("Add-Class")
    const { user } = useContext(AuthContext)

    const handleClass = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const instructor = form.Instructor_name.value;
        const email = form.email.value;
        const seat = form.seat.value;
        const price = form.price.value;

        const classData = { name, image, instructor, email, seat, price, status: "pending" }

        fetch("http://localhost:5000/class", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(classData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire('Add new class')
                    event.target.reset();
                }
            })
    }

    return (
        <div className="py-10 px-5">
            <div className="max-w-[1140px] mx-auto">
                <h2 className="text-center text-[40px] tracking-widest mb-8">Add a Class</h2>
                <form action="" onSubmit={handleClass}>
                    <div className="flex lg:flex-row flex-col justify-between gap-6 mb-10">
                        <div className="lg:w-[50%] w-full">
                            <label className="text-[20px] mb-3 block font-semibold text-[#141414]">Class Name</label>
                            <input type="text" name="name" className="block w-full outline-none h-[50px] border-[2px] rounded-md px-4" placeholder="Class Name" required />
                        </div>
                        <div className="lg:w-[50%] w-full">
                            <label className="text-[20px] mb-3 block font-semibold text-[#141414]">Class Image</label>
                            <input type="text" name="image" className="block w-full outline-none h-[50px] border-[2px] rounded-md px-4" placeholder="Class Image" required />
                        </div>
                    </div>

                    <div className="flex lg:flex-row flex-col justify-between gap-6 mb-10">
                        <div className="lg:w-[50%] w-full">
                            <label className="text-[20px] mb-3 block font-semibold text-[#141414]">Instructor Name</label>
                            <input type="text" name="Instructor_name" className="block w-full outline-none h-[50px] border-[2px] rounded-md px-4" value={user.displayName} placeholder="Instructor Name" required />
                        </div>
                        <div className="lg:w-[50%] w-full">
                            <label className="text-[20px] mb-3 block font-semibold text-[#141414]">Instructor Email</label>
                            <input type="email" name="email" className="block w-full outline-none h-[50px] border-[2px] rounded-md px-4" value={user.email} placeholder="Instructor Email" required />
                        </div>
                    </div>

                    <div className="flex lg:flex-row flex-col justify-between gap-6 mb-10">
                        <div className="lg:w-[50%] w-full">
                            <label className="text-[20px] mb-3 block font-semibold text-[#141414]">Available-Seats</label>
                            <input type="number" name="seat" className="block w-full outline-none h-[50px] border-[2px] rounded-md px-4" placeholder="Available_seat" required />
                        </div>
                        <div className="lg:w-[50%] w-full">
                            <label className="text-[20px] mb-3 block font-semibold text-[#141414]">Price</label>
                            <input type="number" name="price" className="block w-full outline-none h-[50px] border-[2px] rounded-md px-4" placeholder="Price" required />
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="text-[#FFF] bg-[#141414] font-bold px-10 py-3 rounded-lg">Add Class</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;