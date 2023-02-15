import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="bg-slate-100 dark:bg-transparent">
      <div
        name="home"
        className="w-full h-screen rounded-tl-[8000px] rounded-br-full duration-300 bg-white shadow-lg shadow-slate-400 dark:shadow-none dark:bg-transparent"
      >
        {/*//! Container */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  text-slate-600 dark:text-white dark:duration-300 "
        >
          <p className="">Here we are! Welcome to my portfolio!👋</p>
          <h1 className="text-4xl sm:text-7xl font-bold dark:text-orange-300 ">
            I'm Agustin Cruz
          </h1>{" "}
          <h2 className="text-4xl sm:text-7xl font-bold text-blue-400 dark:text-orange-500 ">
            a Frontend Developer.
          </h2>
          <p className="py-4 max-w-[700px] text-justify">
            As a driven Engineer and Frontend Developer, I am always seeking new
            opportunities to challenge myself, create innovative solutions, and
            grow both professionally and personally.
          </p>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className="rounded-3xl shadow-md shadow-slate-400 group px-4 py-3 my-2 flex items-center border-2 border-blue-400 hover:text-white hover:bg-blue-400 hover:border-blue-400 dark:shadow-black dark:border-orange-300 dark:hover:text-white dark:hover:bg-orange-500 dark:hover:border-orange-500 dark:text-white duration-300">
                Have a look!
                <HiArrowNarrowDown className="ml-3 animate-bounce" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
