import React, { useState } from 'react';
import Sidebar from './SideBar';
import { FaEllipsisH } from 'react-icons/fa'; // Import icon ellipsis
import { FaArrowLeft  } from 'react-icons/fa'; // Mũi tên khi chưa chọn
import "../../../style/gridstyles.css";
import 'font-awesome/css/font-awesome.min.css';

// Hàm chuyển đổi dung lượng (size) từ MB sang GB nếu cần
const formatSize = (size) => {
  const sizeInMB = parseFloat(size);
  if (sizeInMB >= 1000) {
    return `${(sizeInMB / 1024).toFixed(1)} GB`; // Chuyển từ MB sang GB
  }
  return `${sizeInMB} MB`; // Dung lượng dưới 1000MB sẽ giữ nguyên MB
};

const GridDisplay = () => {
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
    <div className="flex h-full w-full bg-gray-100">
      <div className="w-16 bg-white text-white p-2 border-r-1 border-gray-300">
        <Sidebar />
      </div>

      <div className="flex-1 grid grid-cols-12 gap-0 h-full">
        <div className="col-span-2 bg-white text-red-600 p-2 border-r-1 border-gray-300">
          <h2 className="text-xl font-bold text-black">Folders</h2>
          <div className="grid grid-cols-1 gap-3 mt-4">
            {folders.map((folder) => (
              <div
                key={folder.id}
                onClick={() => handleFolderClick(folder)} // Xử lý khi click vào folder
                className={`flex items-center justify-between bg-white p-3 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out relative ${selectedFolder?.id === folder.id ? 'bg-blue-100' : ''} cursor-pointer`} // Thêm class chọn folder và kiểu con chuột
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

        <div className={`bg-white text-black ${showInfoPanel ? 'col-span-8' : 'col-span-10'}`}>

        {/* Chia File Manager thành 3 phần theo chiều dọc */}
        <div className="gap-0 border-r-1 border-gray-300">

       {/* Phần Mũi tên và Chữ Back */}
        <div className="p-4 rounded-t-lg border-b border-gray-300 flex flex-col items-start">
            <div className="flex items-center mb-2 group hover:text-red-700 focus:outline-none bg-transparent">
                {/* Mũi tên */}
                <div className="mr-1 p-0">
                    <FaArrowLeft size={16} />
                </div>
                {/* Chữ Back */}
                <h3 className="font-medium text-lg pl-1">Back</h3>
            </div>

            {/* Phần tên Folder đã chọn nằm dưới chữ "Back" */}
            <div className="flex items-center">
                <span className="text-xl font-bold text-black">
                    {selectedFolder?.name?.trim() || "No folder selected"}
                </span>
            </div>
        </div>


        {/* Khung Folder Info */}
        <div className="row-span-1 p-4 border-b-1 border-gray-300">
            <h3 className="font-bold">Folder Info</h3>
            {selectedFolder ? (
            <div>
                <h4>{selectedFolder.name}</h4>
                <p>Size: {formatSize(selectedFolder.size)}</p>
                <p>Items: {selectedFolder.items}</p>
            </div>
            ) : (
            <p>No folder selected</p>
            )}
        </div>

        {/* Khung File List */}
        <div className="row-span-8 p-4 rounded-b-lg">
            <h3 className="font-bold">File List</h3>
            {selectedFolder ? (
            <div>
                {files.map((file) => (
                <div key={file.id} className="flex justify-between p-2 bg-gray-100 rounded-md">
                    <span>{file.name}</span>
                    <span>{formatSize(file.size)}</span>
                </div>
                ))}
            </div>
            ) : (
            <p>Select a folder to see files</p>
            )}
        </div>

        </div>
        </div>





        {showInfoPanel && (
          <div className="col-span-2 bg-yellow-500 text-white p-2 relative border-l border-gray-300">
            <button
              onClick={() => setShowInfoPanel(false)}
              className="absolute top-2 right-2 bg-black bg-opacity-30 px-2 py-1 rounded hover:bg-opacity-60"
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
    </div>
  );
};

export default GridDisplay;
