import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import { PiEye, PiEyeClosed } from "react-icons/pi";

const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

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
        <input
          className='focus:outline-rose-400 placeholder-gray-400 font-semibold px-6 border-2 border-gray-300 h-14 rounded-xl w-full'
          type='text'
          placeholder='email'
        />
        {/* Password */}
        <div className='relative'>
          <input
            className='focus:outline-rose-400 placeholder-gray-400 font-semibold px-6 border-2 border-gray-300 h-14 rounded-xl w-full'
            type={showPassword ? 'text' : 'password'}
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && (
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className='absolute top-5 right-5 cursor-pointer'
            >
              {showPassword ? <PiEyeClosed fontSize={20} /> : <PiEye fontSize={20} />}
            </div>
          )}
        </div>
        {/* Confirm Password */}
        <div className='relative'>
          <input
            className='focus:outline-rose-400 placeholder-gray-400 font-semibold px-6 border-2 border-gray-300 h-14 rounded-xl w-full'
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder='confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword && (
            <div
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className='absolute top-5 right-5 cursor-pointer'
            >
              {showConfirmPassword ? <PiEyeClosed fontSize={20} /> : <PiEye fontSize={20} />}
            </div>
          )}
        </div>
        <button className='rounded-xl w-full border-2 h-14 font-bold text-xl text-white bg-[#F4124A]'>
          Sign Up
        </button>

        <p
          onClick={() => navigate('/login')}
          className='text-[#F4124A] font-semibold cursor-pointer'
        >
          Have an account? Sign in now
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
