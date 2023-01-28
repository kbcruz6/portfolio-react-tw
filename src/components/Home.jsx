import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen duration-300">
      {/*//! Container */}
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  text-slate-600 dark:text-orange-200 dark:duration-300 "
      >
        <p className="">Here we are! Welcome to my portfolio!👋</p>
        <h1 className="text-4xl sm:text-7xl font-bold dark:text-orange-300 ">
          I'm Agustin Cruz
        </h1>{" "}
        <h2 className="text-4xl sm:text-7xl font-bold text-blue-400 dark:text-orange-500 ">
          a Frontend Developer.
        </h2>
        <p className="py-4 max-w-[700px] text-justify">
          As a highly motivated Engineer, I'm looking for new challenges in IT &
          development areas, to continue creating solutions and growing
          professionally and personally.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="rounded-3xl group px-4 py-3 my-2 flex items-center border-2 border-blue-400 hover:text-white hover:bg-blue-400 hover:border-blue-400 dark:border-orange-300 dark:hover:text-white dark:hover:bg-orange-500 dark:hover:border-orange-500 dark:text-orange-300 duration-300">
              Have a look!
              <HiArrowNarrowDown className="ml-3 animate-bounce" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
