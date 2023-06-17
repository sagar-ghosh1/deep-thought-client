import { useContext, useEffect, useState } from "react";
import './ClassPages.css'
import DynamicTitle from "../../DynamicTitle/DynamicTitle";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useBooked from "../../CustomLoader/useBooked";
import useAdmin from "../../CustomLoader/useAdmin";
import useInstructor from "../../CustomLoader/useInstructor";

const ClassPages = () => {
    DynamicTitle("Classes");
    const { user } = useContext(AuthContext);
    const [, refetch] = useBooked();
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then(res => res.json())
            .then(data => {
                // console.log("Classes",data)
                setAllData(data)
            })
    }, [])

    const handleSelect = (item) => {
        if (user) {
            const { name, instructor, image, price, seat, status } = item;
            const userInfo = { name, instructor, image, price, seat, email: user?.email, status }
            // console.log("data", userInfo)
            fetch("http://localhost:5000/course", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    refetch();
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center-center',
                            icon: 'success',
                            title: 'Your course has been added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Please Login so you can purchase Those Courses?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Please!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            })
        }
    }

    return (
        <div className="py-10 px-5">
            <div className="max-w-[1140px] mx-auto">
                <h2 className="text-center lg:text-[45px] text-[34px] mt-10 mb-16">All Type of Classes</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    {
                        allData.map(data => <div className="border-[1px] rounded-md p-8" key={data._id}>
                            <div className="mb-4">
                                <img src={data.image} alt="" className="w-full h-[340px] object-cover rounded-md" />
                            </div>
                            <h3 className="text-[20px] font-bold text-[#141414] mb-3">Instructor: {data.Instructor_name}</h3>
                            <h5 className="text-[18px] font-bold text-[#141414] mb-3">Name: {data.name}</h5>
                            <h3 className="text-[18px] font-bold text-[#141414] mb-3">Price: ${data.price}</h3>
                            <h5 className="text-[18px] font-bold text-[#141414] mb-3">Available-Seats: {data.seat}</h5>
                            <div className="text-center mt-7">
                                {
                                    isAdmin?.admin && <button type="button" className="px-10 py-2 bg-[#F7921E] font-semibold text-[#FFF] rounded-md" onClick={() => handleSelect(data)} disabled>Select</button>
                                }
                                {
                                    isInstructor.instructor && <button type="button" className="px-10 py-2 bg-[#F7921E] font-semibold text-[#FFF] rounded-md" onClick={() => handleSelect(data)} disabled>Select</button>
                                }
                                {
                                    (!isAdmin?.admin && !isInstructor.instructor) && <button type="button" className="px-10 py-2 bg-[#F7921E] font-semibold text-[#FFF] rounded-md" onClick={() => handleSelect(data)} >Select</button>
                                }
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassPages;
