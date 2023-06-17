import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css'
import image from '../../../../public/images/password.png';
import user from '../../../../public/images/user.png'
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import DynamicTitle from '../../../DynamicTitle/DynamicTitle';
import Swal from 'sweetalert2';

const RegisterPage = () => {
    DynamicTitle("Register")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { createUsers } = useContext(AuthContext)

    const onSubmit = (data) => {
        // console.log(data)
        createUsers(data.email, data.password)
            .then(result => {
                const users = result.user;
                console.log(users)

                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photoURL
                })
                    .then(() => {
                        // console.log("updated")
                        const SaveData = { name: data.name, email: data.email, image: data.photoURL }
                        fetch("http://localhost:5000/user", {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(SaveData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    navigate('/login')
                                    Swal.fire({
                                        position: 'center-center',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch(error => {
                setError(error.message)
            })
    };


    return (
        <div className="bg-white pb-20 px-5">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
                    <div className='lg:w-[50%] w-full'>
                        <div className='border-[1px] lg:p-16 p-5 rounded-lg'>
                            <img src={user} alt="" className='mx-auto' />
                            <h3 className='text-center text-[45px] font-bold mt-4 mb-8'>Register</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className='mb-7'>
                                    <label htmlFor="" className='text-[20px] mb-3 block font-semibold text-[#141414]'>Full Name</label>
                                    <input type="text" name="name" {...register("name", { required: true })} className='block w-full outline-none h-[50px] border-[2px] rounded-md px-4' placeholder='Enter your Full Name' />
                                    {errors.name && <span className='text-red-600 font-bold block mt-2'>Please fill up this name field</span>}
                                </div>

                                <div className='mb-7'>
                                    <label htmlFor="" className='text-[20px] mb-3 block font-semibold text-[#141414]'>Email</label>
                                    <input type="email" name="email" {...register("email", { required: true })} className='block w-full outline-none h-[50px] border-[2px] rounded-md px-4' placeholder='Enter your Email Address' />
                                    {errors.email && <span className='text-red-600 font-bold block mt-2'>Please fill up this email field</span>}
                                </div>

                                <div className='mb-7'>
                                    <label htmlFor="" className='text-[20px] mb-3 block font-semibold text-[#141414]'>password</label>
                                    <input type="password" name="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[~`!@#$%^&*()--+={}|\\:;"'<>,.?/_₹])/
                                    })}
                                        className='block w-full outline-none h-[50px] border-[2px] rounded-md px-4' placeholder='Enter your password' />
                                    {errors.password?.type === 'required' && <p className='text-red-600 font-bold block mt-2'>Please fill up this password field</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-600 font-bold block mt-2'>Please at least use 6 character word.</p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-600 font-bold block mt-2'>Please use at least 1 UpperCase & use 1 special character</p>}
                                </div>

                                <div className='mb-7'>
                                    <label htmlFor="" className='text-[20px] mb-3 block font-semibold text-[#141414]'>Confirm password</label>
                                    <input type="password" name="confirm_pass" {...register("confirm_pass",
                                        { required: true, })}

                                        className='block w-full outline-none h-[50px] border-[2px] rounded-md px-4' placeholder='Enter your password' />
                                    {errors.con_pass?.type === 'required' && <span className='text-red-600 font-bold block mt-2'>Please fill up this confirm password field</span>}
                                </div>

                                <div className='mb-7'>
                                    <label htmlFor="" className='text-[20px] mb-3 block font-semibold text-[#141414]'>PhotoUrl</label>
                                    <input type="text" name="photoURL" {...register("photoURL", { required: true })} className='block w-full outline-none h-[50px] border-[2px] rounded-md px-4' placeholder='Enter your Full Name' />
                                    {errors.photoURL && <span className='text-red-600 font-bold block mt-2'>Please fill up this name field</span>}
                                </div>

                                <div className='text-center'>
                                    <button className='text-[#FFF] bg-[#141414] px-10 py-2 mb-6'>Register</button>
                                </div>
                                {
                                    error && <span className='text-red-600 font-bold block mt-2'>{error}</span>
                                }

                                <p className='text-[#141414] text-[18px] font-bold'>Already have an account? <Link to="/login" className='text-[#f85d44] cursor-pointer'>Please LogIn !</Link></p>
                            </form>
                        </div>
                    </div>

                    <div className="lg:w-[50%] w-full">
                        <img src={image} alt="" className='lg:w-[70%] w-[80%] mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;