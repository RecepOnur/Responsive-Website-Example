import React from "react";
import single from "../assets/622310.png";
import partner from "../assets/2000235.png";
import group from "../assets/2439714.png";

const Card = () => {
  return (
    <div className=" py-16 bg-white w-full">
      <div className="grid md:grid-cols-3 mx-auto max-w-[1240px] gap-10 ">
        <div className="w-full shadow-xl rounded-lg flex flex-col my-4 p-4 hover:scale-110 ease-in-out duration-150">
          <img className=" w-20 mx-auto " src={single} alt="" />
          <p className="text-center text-2xl font-bold py-8">Single User</p>
          <p className="text-center my-2">$120</p>
          <div className="flex flex-col  items-center font-medium">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB </p>
          </div>
          <button className="py-3 bg-black text-[#00df9a] w-40  self-center rounded-md my-4 ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl rounded-lg flex flex-col my-4 p-4 hover:scale-110 ease-in-out duration-150">
          <img className=" w-20 mx-auto " src={partner} alt="" />
          <p className="text-center text-2xl font-bold py-8">Partnership</p>
          <p className="text-center my-2">$189</p>
          <div className="flex flex-col  items-center font-medium">
            <p className="py-2 border-b mx-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB </p>
          </div>
          <button className="py-3 bg-black text-[#00df9a] w-40  self-center rounded-md my-4 ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl rounded-lg flex flex-col my-4 p-4 hover:scale-110 ease-in-out duration-150">
          <img className=" w-20 mx-auto " src={group} alt="" />
          <p className="text-center text-2xl font-bold py-8">Group Account</p>
          <p className="text-center my-2">$279</p>
          <div className="flex flex-col  items-center font-medium">
            <p className="py-2 border-b mx-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB </p>
          </div>
          <button className="py-3 bg-black text-[#00df9a] w-40  self-center rounded-md my-4 ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
