import React from "react";
import Typed from "react-typed";

const Content = () => {
  return (
    <div className="text-white">
      <div className=" flex justify-center items-center    mt-16 h-screen flex-col ">
        <h1 className="text-[#00df9a] font-bold pb-3 text-3xl">
          My First Responsive Website
        </h1>
        <p className=" md:text-6xl sm:text-5xl text-4xl font-bold md:py-5">
          Lorem ipsum dolor
        </p>
        <div className="flex items-center ">
          <p className=" pt-3 md:text-4xl sm:text-3xl text-xl font-bold">
            Currently Learning
          </p>
          <Typed
            strings={["Tailwind", "React"]}
            typeSpeed={150}
            backSpeed={125}
            loop
            className="pt-3 md:text-4xl sm:text-3xl text-xl  pl-2 text-yellow-100"
          />
        </div>
        <button className="text-black rounded-md p-3 bg-[#00df9a]  mt-8  hover:scale-105 ease-in duration-75 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Content;
