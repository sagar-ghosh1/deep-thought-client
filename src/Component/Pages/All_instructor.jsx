import { useEffect, useState } from "react";
import './All_instructor.css'

const All_instructor = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allInstructor?role=instructor")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAllData(data)
            })
    }, [])


    return (
        <div className="py-10 px-5">
            <div className="max-w-[1140px] mx-auto">
                <h2 className="text-center lg:text-[45px] text-[34px] mt-10 mb-16">All Type of Instructor</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    {
                        allData.map(data => <div className="border-[1px] rounded-md p-8" key={data._id}>
                            <div className="mb-4">
                                <img src={data.image} alt="" className="w-full h-[340px] object-cover rounded-md" />
                            </div>
                            <h5 className="text-[18px] font-bold text-[#141414] mb-3">Name: {data.name}</h5>
                            <h3 className="text-[18px] font-bold text-[#141414] mb-3">Email: {data.email}</h3>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default All_instructor;