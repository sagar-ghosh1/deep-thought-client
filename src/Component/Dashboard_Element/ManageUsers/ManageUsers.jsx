import { useQuery } from "@tanstack/react-query";
import { FaUserAlt, FaUserShield } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import './ManageUsers.css'
import Swal from "sweetalert2";
import DynamicTitle from "../../../DynamicTitle/DynamicTitle";

const ManageUsers = () => {
    DynamicTitle("Manage-User")
    const { data: users = [], refetch } = useQuery(['user'],
        async () => {
            const res = await fetch("http://localhost:5000/user")
            return res.json();
        })

    const changeAdmin = (items) => {
        fetch(`http://localhost:5000/users/admin/${items._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${items?.name} is an admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const changeInstructor = (items) => {
        fetch(`http://localhost:5000/users/instructor/${items._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${items?.name} is an admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleDelete = (items) => {
        //   console.log("hello", id)
        Swal.fire({
            title: 'Do you want to delete',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${items._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }


    return (
        <div className='py-10'>
            <div className='max-w-[950px] mx-auto'>
                <div className='bg-transparent lg:p-[30px] p-0'>
                    <h3 className='text-2xl text-center font-bold uppercase text-[#151515] lg:mb-5 mb-3'>Total User: {users?.length}</h3>

                    <div className="overflow-x-auto w-full">
                        <table className=" w-full">
                            {/* head */}
                            <thead>
                                <tr className='text-center bg-[royalblue] text-[#FFF] font-semibold'>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>No.</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>User Name</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>User Email</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Admin Role</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>Instructor Role</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#f7f7f7] border-[1px]">
                                {/* row 1 */}
                                {
                                    users.map((items, index) => <tr key={index} className='border-b-[1px] border-[#e8e8e8] text-center'>
                                        <td className='p-4 whitespace-nowrap font-bold text-[#141414]'>{index + 1}</td>
                                        <td className='p-4 whitespace-nowrap font-semibold'>
                                            {items?.name}
                                        </td>
                                        <td className='text-[#141414] p-4 whitespace-nowrap font-semibold'>{items?.email}</td>
                                        <td className='p-4 whitespace-nowrap'>
                                            {
                                                items.role === "admin" ? <span className="bg-[orange] px-3 py-2 rounded-3xl text-[#FFF]">admin</span> : <button onClick={() => changeAdmin(items)} className='btn-admin bg-[#D1A054] text-[#FFF] px-4 py-3 rounded-[5px]' ><FaUserShield /></button>
                                            }
                                        </td>
                                        <td className='p-4 whitespace-nowrap'>
                                            {
                                                items.role === "instructor" ? <span className="bg-[green] px-3 py-2 rounded-3xl text-[#FFF]">instructor</span> : <button onClick={() => changeInstructor(items)} className=' bg-[#D1A054] text-[#FFF] px-4 py-3 rounded-[5px]'><FaUserAlt /></button>
                                            }
                                        </td>
                                        <td className='p-4 whitespace-nowrap'>
                                            <button onClick={() => handleDelete(items)} className="bg-[#B91C1C] text-[#FFF] px-4 py-3 rounded-[5px]"><RiDeleteBin6Line /></button>
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

export default ManageUsers;