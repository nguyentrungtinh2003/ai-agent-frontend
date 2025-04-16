import React from 'react';
import { FaHome, FaFolder, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-6 mt-6">
      <div className="p-3 rounded-full hover:bg-red-500 transition duration-200 cursor-pointer">
        <FaHome className="text-black text-2xl" title="Home" />
      </div>
      <div className="p-3 rounded-full hover:bg-red-500 transition duration-200 cursor-pointer">
        <FaFolder className="text-black text-2xl" title="Files" />
      </div>
      <div className="p-3 rounded-full hover:bg-red-500 transition duration-200 cursor-pointer">
        <FaUser className="text-black text-2xl" title="Profile" />
      </div>
      <div className="p-3 rounded-full hover:bg-red-500 transition duration-200 cursor-pointer">
        <FaCog className="text-black text-2xl" title="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
