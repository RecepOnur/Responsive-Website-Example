import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="text-white p-24">
      <div className="flex justify-around  ">
        <BsInstagram fontSize={30} /> <BsFacebook fontSize={30} />
        <a href="https://www.linkedin.com/in/recep-onur-okan-195681236/">
          <BsLinkedin fontSize={30} />
        </a>
        <a href="https://github.com/RecepOnur">
          <BsGithub fontSize={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
