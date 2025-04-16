import React from 'react';
import { FaHome, FaFolder, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-6 mt-6">
      <div className="p-3 rounded-full hover:bg-red-500 transition duration-200 cursor-pointer">
        <FaHome className="text-white text-xl" title="Home" />
      </div>
      <div className="p-3 rounded-full hover:bg-red-500 transition duration-200 cursor-pointer">
        <FaFolder className="text-white text-xl" title="Files" />
      </div>
      <div className="p-3 rounded-full hover:bg-red-500 transition duration-200 cursor-pointer">
        <FaUser className="text-white text-xl" title="Profile" />
      </div>
      <div className="p-3 rounded-full hover:bg-red-500 transition duration-200 cursor-pointer">
        <FaCog className="text-white text-xl" title="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
