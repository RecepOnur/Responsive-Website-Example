import React from "react";

const Newsletter = () => {
  return (
    <div className=" text-white w-full py-16">
      <div className="max-w-[1240px] sm:mx-auto mx-3 grid lg:grid-cols-3">
        <div className="flex flex-col lg:col-span-2">
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow ?
          </h1>
          <p className=" text-xl py-2 ">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="  w-full p-3 h-10 rounded-md text-black "
            />
            <button className="bg-[#00df9a] rounded-md text-black ml-4 w-36 p-2 sm:mt-0 mt-4">
              Notify Me
            </button>
          </div>
          <p className="mt-4">
            We care about the protection of your data .Read our
            <span className="text-[#00df9a] underline"> privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
