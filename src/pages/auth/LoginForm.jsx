import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import { PiEye, PiEyeClosed } from "react-icons/pi";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='w-screen h-screen items-center gap-4 flex flex-col justify-center'>
      <div className='w-full mb-4 justify-center items-center flex flex-col mt-10'>
        <img src={logo} alt="logo" />
        <p className='font-bold text-2xl text-center'>
          Công cụ AI giúp phân loại tài liệu nhanh, chuẩn và tiện lợi
        </p>
      </div>
      <div className='flex flex-col gap-4 lg:w-[40%] md:w-[30%]'>
        <input
          className='focus:outline-rose-400 placeholder-gray-400 font-semibold px-6 border-2 border-gray-300 h-14 rounded-xl w-full'
          type='text'
          placeholder='username'
        />
        <div className='relative'>
          <input
            className='focus:outline-rose-400 placeholder-gray-400 font-semibold px-6 border-2 border-gray-300 h-14 rounded-xl w-full'
            type={showPassword ? 'text' : 'password'}
            placeholder='password'
          />
          <div
            onClick={togglePasswordVisibility}
            className='absolute top-5 right-5 cursor-pointer'
          >
            {showPassword ? <PiEyeClosed fontSize={20} /> : <PiEye fontSize={20} />}
          </div>
        </div>

        {/* Điều hướng khi click */}
        <p
          onClick={() => navigate('/forgot-password')}
          className='text-[#F4124A] font-semibold cursor-pointer'
        >
          Forgot Password?
        </p>

        <button className='rounded-xl w-full border-2 h-14 font-bold text-xl text-white bg-[#F4124A]'>
          Sign In
        </button>

        <p
          onClick={() => navigate('/register')}
          className='text-[#F4124A] font-semibold cursor-pointer'
        >
          Don't have an account? Sign up now
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
