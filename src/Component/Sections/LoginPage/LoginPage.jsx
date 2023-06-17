import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LoginPage.css'
import image from '../../../../public/images/password.png';
import user from '../../../../public/images/user.png'
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import DynamicTitle from '../../../DynamicTitle/DynamicTitle';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const LoginPage = () => {
    DynamicTitle("Login")
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { googleSignIn, signInLogin } = useContext(AuthContext)
    // console.log(location)

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data)
        signInLogin(data.email, data.password)
            .then(result => {
                const users = result.user;
                console.log(users)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
        reset();
    };

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const users = result.user;
                // console.log(users)
                const saveData = { name: users.displayName, email: users.email, image: users.photoURL }
                fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveData)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.insertedId) {
                            navigate(from, { replace: true })
                        }
                        else {
                            navigate(from, { replace: true })
                        }
                    })
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className="bg-white pb-20 px-5">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-10">
                    <div className="lg:w-[50%] w-full">
                        <img src={image} alt="" className='lg:w-[70%] w-[80%] mx-auto' />
                    </div>

                    <div className='lg:w-[50%] w-full'>
                        <div className='border-[1px] lg:p-16 p-5 rounded-lg'>
                            <img src={user} alt="" className='mx-auto' />
                            <h3 className='text-center text-[45px] font-bold mt-4 mb-8'>Login</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className='mb-7'>
                                    <label htmlFor="" className='text-[20px] mb-3 block font-semibold text-[#141414]'>Email</label>
                                    <input type="email" name="email" {...register("email", { required: true })} className='block w-full outline-none h-[50px] border-[2px] rounded-md px-4' placeholder='Enter your Email Address' />
                                    {errors.email && <span className='text-red-600 font-bold block mt-2'>Please fill up this email field</span>}
                                </div>

                                <div className='mb-7'>
                                    <label htmlFor="" className='text-[20px] mb-3 block font-semibold text-[#141414]'>password</label>
                                    <div className='relative'>
                                        <input type={`${toggle ? "password" : "text"}`} name="password" {...register("password", { required: true })} className='block w-full outline-none h-[50px] border-[2px] rounded-md px-4' placeholder='Enter your password' />
                                        {
                                            toggle ? <AiFillEyeInvisible onClick={() => setToggle(!toggle)} className='absolute text-[24px] top-[50%] right-[10px] translate-y-[-50%] cursor-pointer' />
                                                : <AiFillEye onClick={() => setToggle(!toggle)} className='absolute text-[24px] top-[50%] right-[10px] translate-y-[-50%] cursor-pointer' />
                                        }
                                    </div>
                                    {errors.password?.type === 'required' && <span className='text-red-600 font-bold block mt-2'>Please fill up this password field</span>}
                                </div>

                                <div className='text-center'>
                                    <button className='text-[#FFF] bg-[#141414] px-10 py-2 mb-6'>Login</button>
                                </div>
                                {
                                    error && <span className='text-red-600 font-bold block mt-2'>{error}</span>
                                }

                                <p className='text-[#141414] text-[18px] font-bold'>If you have no account? <Link to="/register" className='text-[#f85d44] cursor-pointer'>Please Register Now !</Link></p>
                                <div className="divider my-10">OR</div>

                                <div className='social-icons text-center'>
                                    <ul className='flex items-center justify-center '>
                                        <li>
                                            <a href=""><FaFacebookF className='icon text-[#444]' /></a>
                                        </li>
                                        <li>
                                            <a href=""><FaGithub className='icon text-[#444]' /></a>
                                        </li>
                                        <li>
                                            <a ><BsGoogle onClick={handleGoogle} className='icon' /></a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;