import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useState } from "react";
import DynamicTitle from "../../../DynamicTitle/DynamicTitle";

const MyClass = () => {
    DynamicTitle("My-Class")
    const { user } = useContext(AuthContext)
    const [myClass, setMyClass] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/class?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyClass(data)
            })
    }, [user])

    return (
        <div className='py-10'>
            <div className='max-w-[950px] mx-auto'>
                <div className='lg:bg-[#FFF] bg-transparent lg:p-[30px] p-0'>
                    <div className='flex lg:flex-row flex-col justify-between items-center mb-7'>
                        <h3 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>My Classes: {myClass?.length || 0}</h3>
                        <h3 className='text-xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>Total Enroll Student: 0</h3>
                    </div>

                    <div className="overflow-x-auto w-full">
                        <table className=" w-full">
                            {/* head */}
                            <thead>
                                <tr className='text-center bg-[royalblue] text-[#FFF] font-semibold'>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>No.</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>IMAGE</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Instructor Name</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Class Name</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Available-seat</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>PRICE</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Role</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>MyFeedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    myClass.map((items, index) => <tr key={index} className='border-b-[1px] border-[#e8e8e8] text-center'>
                                        <td className='p-4 whitespace-nowrap'>{index + 1}</td>
                                        <td className='p-4 whitespace-nowrap'>
                                            <img src={items?.image} alt="" className='w-[50px] h-[50px] mx-auto' />
                                        </td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.instructor}</td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.name} Dance</td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.seat} </td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>${items?.price}</td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>
                                            <button className="bg-[green] text-[#FFF] px-4 py-3 rounded-[5px]">Pending</button>
                                        </td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>
                                            <button className="bg-[orange] text-[#FFF] px-4 py-3 rounded-[5px]">MyFeedBack</button>
                                        </td>
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

export default MyClass;