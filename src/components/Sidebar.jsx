import React from "react";
import {
  TiHomeOutline,
  TiDocument,
} from "react-icons/ti";
import {
  TbUserQuestion,
  TbSettings,
} from "react-icons/tb";

const Sidebar = ({ isOpen, activeItem, onItemSelect }) => {
  return (
    <div
      className={`h-full bg-[#FFFAFA] text-white transition-all duration-300 overflow-hidden ${
        isOpen ? "w-14" : "w-0"
      }`}
    >
      <div className="flex flex-col items-center mt-4">
        <ul className="space-y-4 text-xl text-gray-500 flex flex-col">
          <li
            className={`flex items-center p-2 rounded-lg cursor-pointer ${
              activeItem === "home" ? "bg-[#DFDFDF]" : ""
            }`}
            onClick={() => onItemSelect("home")}
          >
            <TiHomeOutline size={25}/>
          </li>
          <li
            className={`flex items-center p-2 rounded-lg cursor-pointer ${
              activeItem === "document" ? "bg-[#DFDFDF]" : ""
            }`}
            onClick={() => onItemSelect("document")}
          >
            <TiDocument size={25}/>
          </li>
          <li
            className={`flex items-center p-2 rounded-lg cursor-pointer ${
              activeItem === "faq" ? "bg-[#DFDFDF]" : ""
            }`}
            onClick={() => onItemSelect("faq")}
          >
            <TbUserQuestion size={25} />
          </li>
          <li
            className={`flex items-center p-2 rounded-lg cursor-pointer ${
              activeItem === "settings" ? "bg-[#DFDFDF]" : ""
            }`}
            onClick={() => onItemSelect("settings")}
          >
            <TbSettings size={25}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
