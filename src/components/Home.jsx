import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-black/80 dark:bg-transparent duration-300 fixed dark:relative "
    >
      {/*//! Container */}
      <div
        // data-aos="fade-right"
        // data-aos-duration="2000"
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-transparent dark:text-orange-200 dark:duration-300 "
      >
        <p className="">Here we are! Welcome to my portfolio!👋</p>
        <h1 className="text-4xl sm:text-7xl font-bold dark:text-orange-300 ">
          I'm Agustin Cruz
        </h1>{" "}
        {/*//! OOPS  */}
        <p className="text-white dark:hidden text-4xl text-center duration-300">
          Oops, it's dark! <br></br>
          <br></br> Please turn on the light to see the content...
        </p>
        {/*//! <--->  */}
        <h2 className="text-4xl sm:text-7xl font-bold dark:text-orange-500 ">
          a Frontend Developer.
        </h2>
        <p className="py-4 max-w-[700px] ">
          As a highly motivated Engineer, I'm looking for new challenges in IT &
          development areas, to continue creating solutions and growing
          professionally and personally.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="group dark:border-2 dark:border-orange-300 px-4 py-3 my-2 flex items-center dark:hover:text-white dark:hover:bg-orange-500 dark:hover:border-orange-500 dark:text-orange-300">
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
