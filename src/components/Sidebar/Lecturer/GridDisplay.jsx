import React, { useState } from 'react';
import Sidebar from './SideBar';

const GridDisplay = () => {
  const [showInfoPanel, setShowInfoPanel] = useState(true);

  return (
    <div className="flex h-full w-full bg-gray-100">
      {/* Sidebar có width cố định, không nằm trong grid */}
      <div className="w-16 bg-blue-600 text-white p-2 border-r border-gray-300">
        <Sidebar />
      </div>

      {/* Phần còn lại chia grid-cols-12 */}
      <div className="flex-1 grid grid-cols-12 gap-0 h-full">
        {/* Folder List chiếm 2 cột */}
        <div className="col-span-2 bg-green-600 text-white p-2 border-r border-gray-300">
          <h2>Folders</h2>
        </div>

        {/* File Manager chiếm 8 hoặc 10 tùy theo panel */}
        <div
          className={`bg-red-600 text-white p-2 ${
            showInfoPanel ? 'col-span-8' : 'col-span-10'
          }`}
        >
          <h2>File Manager</h2>
        </div>

        {/* File Info Panel chiếm 2 cột */}
        {showInfoPanel && (
          <div className="col-span-2 bg-yellow-500 text-white p-2 relative border-l border-gray-300">
            <button
              onClick={() => setShowInfoPanel(false)}
              className="absolute top-2 right-2 bg-black bg-opacity-30 px-2 py-1 rounded hover:bg-opacity-60"
            >
              ✕
            </button>
            <h2>File Info</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridDisplay;
