import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/*//! Container */}
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-transparent dark:text-orange-200 duration-300 "
      >
        <p className="text-white dark:hidden text-2xl text-center duration-300">
          Oops... the light is off! Turn it on to see the content...{" "}
        </p>
        <p className="">Here we are! Welcome to my portfolio!👋</p>
        <h1 className="text-4xl sm:text-7xl font-bold dark:text-orange-300 ">
          I'm Agustin Cruz
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold dark:text-orange-500 ">
          a Frontend Developer.
        </h2>
        <p className="py-4 max-w-[700px] ">
          As a highly motivated Engineer, I'm looking for new challenges in IT &
          development areas, to continue growing professionally and personally.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="group dark:border-2 dark:border-orange-300 px-4 py-3 my-2 flex items-center dark:hover:text-white dark:hover:bg-orange-600 dark:hover:border-orange-600 dark:text-orange-300">
              Have a look!
              <span className=" group-hover:rotate-90 duration-200">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
