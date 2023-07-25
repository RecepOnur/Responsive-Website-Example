import React from "react";
import tailwind from "../assets/channels4_profile.jpg";
import icon from "../assets/React-icon.svg.png";

const Content2 = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2  ">
        <img src={tailwind} alt="tailwind" className=" w-26 h-28 px-4" />
        <img src={icon} alt="react" className=" w-26 h-28 px-4 " />
      </div>
      <div className="flex flex-col justify-center ">
        <h1 className=" uppercase mt-6  text-[#00df9a] font-bold md:text-5xl sm:text-4xl text-3xl">
          Dashboard
        </h1>
        <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl  my-3">
          These are technologies that i used in this project.
        </h1>
        <p className="md:text-3xl sm:text-2xl text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          delectus explicabo alias facere repellat magni reprehenderit porro,
          nobis id temporibus odio, natus hic qui quod.
        </p>
      </div>
    </div>
  );
};

export default Content2;
