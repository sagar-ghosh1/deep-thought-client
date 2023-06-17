import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DynamicTitle from "../../../DynamicTitle/DynamicTitle";

const ManageClass = () => {
    DynamicTitle("Manage-Class")
    const { data: classes = [] } = useQuery(['user'],
        async () => {
            const res = await axios.get("http://localhost:5000/classes")
            return res.data;
        })


    return (
        <div className='py-10'>
            <div className='max-w-[950px] mx-auto'>
                <div className='bg-transparent lg:p-[30px] p-0'>

                    <div className="overflow-x-auto w-full">
                        <table className=" w-full">
                            {/* head */}
                            <thead>
                                <tr className='text-center bg-[royalblue] text-[#FFF] font-semibold'>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>No.</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Class Image</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Class Name</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Instructor Name</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Instructor Email</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Available seats</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Price</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#f7f7f7] border-[1px]">
                                {/* row 1 */}
                                {
                                    classes.map((items, index) => <tr key={index} className='border-b-[1px] border-[#e8e8e8] text-center'>
                                        <td className='p-4 whitespace-nowrap font-bold text-[#141414]'>{index + 1}</td>
                                        <td className='p-4 whitespace-nowrap font-semibold'>
                                            <img src={items?.image} alt="" />
                                        </td>
                                        <td className='text-[#141414] p-4 whitespace-nowrap font-semibold'>{items?.name} Dance</td>
                                        <td className='text-[#141414] p-4 whitespace-nowrap font-semibold'>{items?.instructor} </td>
                                        <td className='text-[#141414] p-4 whitespace-nowrap font-semibold'>{items?.email} </td>
                                        <td className='text-[#141414] p-4 whitespace-nowrap font-semibold'>{items?.seat} </td>
                                        <td className='text-[#141414] p-4 whitespace-nowrap font-semibold'>{items?.price} </td>

                                        <td className='p-4 whitespace-nowrap'>
                                            <div className="flex lg:flex-col">
                                                <button className="bg-[green] text-[#FFF] mb-2 px-4 py-2 rounded-[5px]">{items?.status}</button>
                                                <button className="bg-[green] text-[#FFF] mb-2 px-4 py-2 rounded-[5px]">Deny </button>
                                                <button className="bg-[green] text-[#FFF] px-4 py-2 rounded-[5px]">FeedBack</button>
                                            </div>
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

export default ManageClass;