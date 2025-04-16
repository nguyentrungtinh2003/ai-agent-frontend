import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import { IoIosReturnLeft } from "react-icons/io";
import { PiEye, PiEyeClosed, PiArrowBendDownRightFill } from "react-icons/pi";

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='w-screen flex justify-center h-screen items-center'>
      <div className='w-fit h-fit items-center justify-center flex flex-col gap-4'>
        <div className='w-fit mb-4 justify-center items-center flex flex-col mt-10'>
          <img src={logo} alt="logo" />
          <p className='font-bold text-2xl text-center'>
            Công cụ AI giúp phân loại tài liệu nhanh, chuẩn và tiện lợi
          </p>
        </div>

        {/* Back Button */}
        <p
          onClick={() => navigate(-1)}
          className='flex gap-2 items-center font-bold w-full cursor-pointer'
        >
          <IoIosReturnLeft fontSize={30} />Back
        </p>

        <input
          className='focus:outline-rose-400 placeholder-gray-400 font-semibold px-6 border-2 border-gray-300 h-14 rounded-xl w-full'
          type='text'
          placeholder='enter your email address'
        />

        {/* Password Input */}
        <div className='relative w-full'>
          <input
            className='focus:outline-rose-400 placeholder-gray-400 font-semibold px-6 border-2 border-gray-300 h-14 rounded-xl w-full'
            type={showPassword ? 'text' : 'password'}
            placeholder='enter new password'
          />
          <div
            onClick={togglePasswordVisibility}
            className='absolute top-5 right-5 cursor-pointer'
          >
            {showPassword ? <PiEyeClosed fontSize={20} /> : <PiEye fontSize={20} />}
          </div>
        </div>

        <button className='rounded-xl w-full border-2 h-14 font-bold text-xl text-white bg-[#F4124A]'>
          Create New Password
        </button>

        {/* Go to Sign In */}
        <p
          onClick={() => navigate('/login')}
          className='text-[#F4124A] font-semibold w-full flex gap-2 items-center cursor-pointer'
        >
          <PiArrowBendDownRightFill />Go to Sign In Form
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
