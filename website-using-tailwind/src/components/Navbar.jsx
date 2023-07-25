import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const HandleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className=" flex justify-between  items-center h-24 px-4 mx-auto  max-w-[1280px] text-white">
      <h2 className=" w-full  font-bold  text-3xl  text-[#00df9a]">Website</h2>
      <ul className=" hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <button onClick={HandleSidebar} className=" block md:hidden">
          <HiMenu size={20} />
        </button>

        <div
          className={
            showSidebar
              ? "fixed top-0 left-0 w-[50%] border-r border-r-gray-900 ease-in-out duration-300"
              : "fixed  left-[-100%]  "
          }
        >
          <ul className=" uppercase pt-20">
            <li className="p-4 border-b border-b-gray-600">Home</li>
            <li className="p-4 border-b border-b-gray-600">Company</li>
            <li className="p-4 border-b border-b-gray-600">Resources</li>
            <li className="p-4 border-b border-b-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
