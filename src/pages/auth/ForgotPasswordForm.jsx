import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import { IoIosReturnLeft } from "react-icons/io";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  return (
    <div className='w-screen flex justify-center h-screen items-center'>
      <div className='w-fit h-fit items-center justify-center flex flex-col gap-4'>
        <div className='w-fit mb-4 justify-center items-center flex flex-col mt-10'>
          <img src={logo} alt="logo" />
          <p className='font-bold text-2xl text-center'>
            Công cụ AI giúp phân loại tài liệu nhanh, chuẩn và tiện lợi
          </p>
        </div>
        
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
        <button className='rounded-xl w-full border-2 h-14 font-bold text-xl text-white bg-[#F4124A]'>
          Send OTP Code
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
