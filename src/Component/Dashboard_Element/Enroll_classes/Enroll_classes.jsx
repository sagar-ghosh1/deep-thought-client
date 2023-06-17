import { useEffect, useState } from "react";
import DynamicTitle from "../../../DynamicTitle/DynamicTitle";


const Enroll_classes = () => {
    DynamicTitle("Enroll-Class")
    const [enroll, setEnroll] = useState([])

    useEffect(() => {
        fetch("https://deep-thought-server-sagar-ghosh1.vercel.app/payments")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setEnroll(data)
            })
    }, [])

    return (
        <div className='py-10'>
            <div className='max-w-[950px] mx-auto'>
                <div className='lg:bg-[#FFF] bg-transparent lg:p-[30px] p-0'>
                    <div className='flex lg:flex-row flex-col justify-between items-center mb-7'>
                        <h3 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>Total Enroll Classes: {enroll?.length || 0}</h3>
                        {/* <button className='bg-[royalblue] rounded-lg px-2 py-2 text-[#FFF]'>PAY</button> */}
                    </div>

                    <div className="overflow-x-auto w-full">
                        <table className=" w-full">
                            {/* head */}
                            <thead>
                                <tr className='text-center bg-[royalblue] text-[#FFF] font-semibold'>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>No.</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>IMAGE</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>INSTRUCTOR NAME</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>CLASS</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>PRICE</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>DATE</th>
                                </tr>
                            </thead>
                            <tbody className='border-[1px]'>
                                {/* row 1 */}
                                {
                                    enroll.map((items, index) => <tr key={index} className='border-b-[1px] border-[#e8e8e8] text-center'>
                                        <td className='p-4 whitespace-nowrap'>{index + 1}</td>
                                        <td className='p-4 whitespace-nowrap'>
                                            <img src={items?.image} alt="" className='w-[50px] h-[50px] mx-auto' />
                                        </td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.instructor_name}</td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.Dance}</td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>${items?.price}</td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.date}</td>
                                    </tr>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enroll_classes;