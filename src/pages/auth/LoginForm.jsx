import React from 'react';
import logo from "../../assets/logo.svg";
import { PiEye } from "react-icons/pi";

const LoginForm = () => {
  return (
    <div className='w-screen h-screen items-center gap-4 flex flex-col justify-center'>
      <div className='w-full justify-center items-center flex flex-col mt-10'>
        <img src={logo}/>
        <p className='font-bold text-2xl'>Công cụ AI giúp phân loại tài liệu nhanh, chuẩn và tiện lợi</p>
      </div>
      <div className='flex flex-col gap-4 w-[30%]'>
        <input className='font-semibold px-8 border-2 border-gray-300 h-14 rounded-xl w-full' type='text' placeholder='username'/>
        <div className='relative'>
        <input className='font-semibold px-8 border-2 border-gray-300 h-14 rounded-xl w-full' type='password' placeholder='password'/>
        <PiEye className='absolute top-5 right-5' fontSize={20}/>
        </div>
        <p className='text-[#F4124A] font-semibold'>Forgot Password?</p>
        <button className='rounded-xl w-full border-2 h-14 font-bold text-xl text-white bg-[#F4124A]'>Sign In</button>
        <p className='text-[#F4124A] font-semibold'>Don't have an account? Sign up now</p>
      </div>
    </div>
  )
}

export default LoginForm
