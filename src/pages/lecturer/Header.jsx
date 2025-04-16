import React from 'react';

const Header = () => {
  return (
    <header className="bg-white px-4 py-3 shadow flex justify-between items-center border-b-1 border-gray-300">
      {/* Left Section */}
      <div className="flex items-center gap-3 pl-1.5"> 
        {/* pl-16 giúp icon nằm cùng trục dọc với Sidebar (w-16) */}
        <button className="text-2xl text-gray-700 hover:text-blue-500">
          ☰
        </button>
        <h1 className="text-2xl font-semibold text-gray-800 pl-3">
          File Manager
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-3 pr-10 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute right-2 top-1.5 text-gray-500">🔍</span>
        </div>

        {/* Notification Icon */}
        <button className="text-xl text-gray-700 hover:text-blue-500">🔔</button>

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/30"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
