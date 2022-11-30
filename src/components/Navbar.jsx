import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPaperclip } from "react-icons/fi";

import Logo from "../assets/logo1.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d1e3a] text-gray-300">
      <div>
        <img src={Logo} alt="Logo image" style={{ width: "50px" }} />
      </div>
      {/*//! Menu */}
      <ul className="hidden font-bold md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="relative group hover:opacity-90"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="relative group hover:opacity-90"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="relative group hover:opacity-90"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="relative group hover:opacity-90"
          >
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="relative group hover:opacity-90"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
      </ul>

      {/*//! Hamburguer */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer hover:opacity-90"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*//! Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center opacity-95"
        }
      >
        <li className="py-6 text-4xl hover:opacity-80 relative group">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="py-6 text-4xl hover:opacity-80 relative group">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="py-6 text-4xl hover:opacity-80 relative group">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="py-6 text-4xl hover:opacity-80 relative group">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="py-6 text-4xl hover:opacity-80 relative group">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
            <span className="absolute -bottom-0 left-0 w-0 h-2 bg-pink-600 transition-all group-hover:w-full"></span>
          </Link>
        </li>
      </ul>

      {/*//! Social media vertical */}
      <div className="hidden lg:flex fixed flex-col lg:top-[35%] lg:left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/agustin-frontend-javascript/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/kbcruz6"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#61ab9b]">
            <a
              href="mailto:agustin.tcw@gmail.com"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]">
            <a
              href="https://github.com/kbcruz6/kbcruz6.github.io/raw/main/CvAgustinCruz/CV%20Agustin%20Cruz.pdf"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <FiPaperclip size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
