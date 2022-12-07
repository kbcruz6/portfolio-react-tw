import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      // data-aos="fade-down"
      // data-aos-duration="2000"
      name="home"
      className="w-full h-screen"
    >
      {/*//! Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-400">Hi there, welcome to my portfolio!👋</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          I'm Agustin Cruz
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          As a highly motivated Engineer, I'm looking for new challenges in IT &
          development areas, to continue growing professionally and personally.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className=" text-white group border-2 px-4 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200">
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
