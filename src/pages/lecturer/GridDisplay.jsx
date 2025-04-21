import React, { useState } from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import { FaEllipsisH } from 'react-icons/fa'; // Import icon ellipsis
import { FaArrowLeft } from 'react-icons/fa'; // Mũi tên khi chưa chọn
import "../../style/gridstyles.css";
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../components/Layout';

// Hàm chuyển đổi dung lượng (size) từ MB sang GB nếu cần
const formatSize = (size) => {
  const sizeInMB = parseFloat(size);
  if (sizeInMB >= 1000) {
    return `${(sizeInMB / 1024).toFixed(1)} GB`; // Chuyển từ MB sang GB
  }
  return `${sizeInMB} MB`; // Dung lượng dưới 1000MB sẽ giữ nguyên MB
};

const GridDisplay = ({ showSidebar }) => {
  const [showInfoPanel, setShowInfoPanel] = useState(true);
  const [selectedFolder, setSelectedFolder] = useState(null);

  // Dữ liệu ví dụ cho folder
  const folders = [
    { id: 1, name: 'Backup 2025', icon: '📁', size: 5200, items: 162 }, // 5000MB = 5GB
    { id: 2, name: 'Lập trình hướng đối tượng', icon: '📁', size: 2048, items: 98 }, // 2048MB = 2GB
    { id: 3, name: 'Cơ bản C++', icon: '📁', size: 1024, items: 215 }, // 1024MB = 1GB
    { id: 4, name: 'ReactJS với Vite', icon: '📁', size: 1000, items: 2 }, // 8192MB = 8GB
    // Thêm dữ liệu folder nếu cần
  ];

  // Dữ liệu File
  const files = [
    { id: 1, name: 'File1.txt', size: 100 },
    { id: 2, name: 'File2.jpg', size: 250 },
    { id: 3, name: 'File3.pdf', size: 500 },
    { id: 4, name: 'File4.docx', size: 150 },
    // Add more files as needed
  ];

  const handleFolderClick = (folder) => {
    setSelectedFolder(selectedFolder?.id === folder.id ? null : folder);
  };

  return (
<Layout>
<div className="flex grid-cols-12 bg-gray-100">
  <AnimatePresence>
    <motion.div
      key="mainContent"
      initial={{ opacity: 0, x: showSidebar ? 250 : 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: showSidebar ? 250 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`grid grid-cols-11 gap-4 col-span-${showSidebar ? '11' : '12'} `} // Khi ẩn sidebar, MainContent chiếm 10 cột
    >
      {/* Cột bên trái: Folder List */}
      <div className="col-span-2 bg-white text-red-600 p-2 border-r-1 border-gray-300 ">
        <h2 className="text-xl font-bold text-black">Folders</h2>
        <div className="grid grid-cols-1 gap-3 mt-4 max-h-full">
          {folders.map((folder) => (
            <div
              key={folder.id}
              onClick={() => handleFolderClick(folder)}
              className={`flex items-center justify-between bg-white p-3 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out relative ${selectedFolder?.id === folder.id ? 'bg-blue-100' : ''} cursor-pointer`}
            >
              <div className="flex items-start gap-3 flex-grow">
                <span className="text-xl">{folder.icon}</span>
                <div className="flex flex-col items-start flex-grow overflow-hidden">
                  <h3 className="truncate font-medium">{folder.name}</h3>
                  <span className="text-xs text-gray-500">
                    {folder.items === 0
                      ? '0 item'
                      : folder.items === 1
                      ? '1 item'
                      : `${folder.items} items`}
                    {' • '}
                    {formatSize(folder.size)}
                  </span>
                </div>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-neutral-950 hover:text-red-700">
                <FaEllipsisH className="text-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cột chính giữa: Main */}
      <div className="col-span-7 bg-white text-black flex-grow">
        <div className="w-full p-4">
          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <p>This is sample content to represent the main area. It should occupy 7 columns in the grid layout.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <p>Another sample content. You can add more content as needed here.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cột bên phải: Folder Information */}
      <div className="col-span-2 bg-white text-black p-2 border-l border-gray-300 overflow-auto">
        {showInfoPanel && (
          <div className="bg-yellow-500 text-white p-2">
            <button
              onClick={() => setShowInfoPanel(false)}
              className=" top-2 left-2 bg-black bg-opacity-30 px-2 py-1 rounded hover:bg-opacity-60"
            >
              ✕
            </button>
            <h2>File Info</h2>
            {selectedFolder ? (
              <div>
                <h3>Folder: {selectedFolder.name}</h3>
                <p>Size: {formatSize(selectedFolder.size)}</p>
                <p>Items: {selectedFolder.items}</p>
              </div>
            ) : (
              <p>No folder selected</p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  </AnimatePresence>
</div>
</Layout>


  );
};

export default GridDisplay;
