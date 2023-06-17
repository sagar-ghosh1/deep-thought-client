import { useState } from 'react'
import './Dashboard.css'
import logo from '../../public/images/logo.png'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { GiWallet } from 'react-icons/gi';
import { FaPlus, FaUserCheck } from 'react-icons/fa';
import { BsFillHouseDoorFill, BsFillCalendarWeekFill, BsFillPersonPlusFill } from 'react-icons/bs';
import { AiOutlineCodeSandbox, AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import useAdmin from '../CustomLoader/useAdmin';
import useInstructor from '../CustomLoader/useInstructor';

const Dashboard = () => {
    const location = useLocation();
    const split = location.pathname.split("/")[2]
    // console.log(split)

    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(split);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <>
            <div className='p-5 lg:hidden block'>
                <div className='flex justify-between items-center'>
                    <div className="">
                        <img src={logo} alt="" className='w-[70px] rounded-full' />
                    </div>
                    <div className="">
                        {
                            toggle ? <RxCross1 onClick={() => setToggle(!toggle)} className='text-[#141414] z-30 text-[24px]' /> : <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-[#141414] z-30 text-[24px]' />
                        }

                    </div>
                </div>
            </div>

            <div className='dashboard px-5'>
                <div className="flex justify-center ">
                    <div className={`lg:w-[20%] w-[70%] h-[100vh] bg-[#d7d7d7] px-6 py-11 ${toggle ? "sidebar active" : "sidebar"}`}>
                        <div className='lg:mb-9 mb-8'>
                            <img src={logo} alt="" className='w-[90px] rounded-full mx-auto' />
                        </div>
                        <div className='dashboard_menu'>
                            <ul>
                                {isAdmin?.admin &&
                                    <>
                                        <li onClick={() => setActive("Manage_class")}><Link to="/dashboard/Manage_class" className={`flex items-center ${active === "Manage_class" ? "active" : ""}`}><BsFillHouseDoorFill /> <h3 className='ml-3'>Manage Classes</h3></Link></li>

                                        <li onClick={() => setActive("Manage_users")}><Link to="/dashboard/Manage_users" className={`flex items-center ${active === "Manage_users" ? "active" : ""}`}><BsFillCalendarWeekFill /> <h3 className='ml-3'>Manage Users</h3></Link></li>

                                        <li><Link to="/" className='flex items-center'><BsFillHouseDoorFill /> <h3 className='ml-3'>Home</h3></Link></li>
                                    </>
                                }

                                {isInstructor.instructor &&
                                    <>
                                        <li onClick={() => setActive("addClass")}><Link to="/dashboard/addClass" className={`flex items-center ${active === "addClass" ? "active" : ""}`}><FaPlus /> <h3 className='ml-3'>Add a Class</h3></Link></li>

                                        <li onClick={() => setActive("myClass")}><Link to="/dashboard/myClass" className={`flex items-center ${active === "myClass" ? "active" : ""}`}><BsFillPersonPlusFill /> <h3 className='ml-3'>My Classes</h3></Link></li>

                                        <li><Link to="/" className='flex items-center'><BsFillHouseDoorFill /> <h3 className='ml-3'>Home</h3></Link></li>
                                    </>
                                }

                                {(!isAdmin.admin && !isInstructor.instructor) &&
                                    <>
                                        <li onClick={() => setActive("select_class")}><Link to="/dashboard/select_class" className={`flex items-center ${active === "select_class" ? "active" : ""}`}><FaUserCheck /> <h3 className='ml-3'>My Selected Classes</h3></Link></li>

                                        <li onClick={() => setActive("enroll_classes")}><Link to="/dashboard/enroll_classes" className={`flex items-center ${active === "enroll_classes" ? "active" : ""}`}><AiOutlineCodeSandbox /> <h3 className='ml-3'>My Enrolled Classes</h3></Link></li>

                                        <li onClick={() => setActive("payment_history")}><Link to="/dashboard/payment_history" className={`flex items-center ${active === "payment_history" ? "active" : ""}`}><GiWallet /> <h3 className='ml-3'>Payment History</h3></Link></li>

                                        <li><Link to="/" className='flex items-center'><BsFillHouseDoorFill /> <h3 className='ml-3'>Home</h3></Link></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='lg:w-[80%] w-full ml-auto'>
                        <div className='lg:p-16 p-0'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;