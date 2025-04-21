import React from "react";
import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import { RiNotification3Line } from "react-icons/ri";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="h-16 flex justify-between items-center px-4 border-b-1 border-gray-200">
      <div className="flex items-center">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <MdSpaceDashboard size={24} /> : <MdOutlineSpaceDashboard size={24} />}
        </button>
        <h1 className="ml-4 text-xl font-bold">Home Page</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex border rounded-lg border-gray-300">
          <input className="focus:outline-none font-semibold px-2 py-1 text-xs" placeholder="Search"/>
          <button className="hover:bg-[#F4124A] px-2 rounded-lg"><SlMagnifier size={15}/></button>
        </div>
        <RiNotification3Line size={20}/>
        <img className="h-8" src="https://www.pngall.com/wp-content/uploads/13/Github-Logo.png"/>
      </div>
    </div>
  );
};

export default Navbar;
