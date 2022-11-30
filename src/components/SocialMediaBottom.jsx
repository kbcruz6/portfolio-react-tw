import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPaperclip } from "react-icons/fi";

import Logo from "../assets/logo1.png";
import { Link } from "react-scroll";

const SocialMediaBottom = () => {
  return (
    <div>
      {/*//! Social media horizontal  */}
      <div className="lg:hidden">
        <ul className="flex fixed flex-row sm:bottom-0 left-[35%] minsm:top-0 minsm:left-[20%]">
          <li className="w-[60px] h-[50px] flex justify-between items-center duration-300 bg-blue-600 hover:scale-125">
            <a
              href="https://www.linkedin.com/in/agustin-frontend-javascript/"
              className="flex justify-between items-center w-full text-gray-300 "
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>{" "}
          <li className="w-[60px] h-[50px] flex justify-between items-center duration-300 bg-[#333333] hover:scale-125">
            <a
              href="https://github.com/kbcruz6"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <FaGithub size={30} />
            </a>
          </li>{" "}
          <li className="w-[60px] h-[50px] flex justify-between items-center duration-300 bg-[#61ab9b] hover:scale-125">
            <a
              href="mailto:agustin.tcw@gmail.com"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>{" "}
          <li className="w-[60px] h-[50px] flex justify-between items-center duration-300 bg-[#565f69] hover:scale-125">
            <a
              href="https://github.com/kbcruz6/kbcruz6.github.io/raw/main/CvAgustinCruz/CV%20Agustin%20Cruz.pdf"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <FiPaperclip size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMediaBottom;
