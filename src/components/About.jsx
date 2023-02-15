import React from "react";
import profileImg from "../assets/33.jpeg";

const About = () => {
  return (
    <div className="bg-slate-100 dark:bg-transparent">
      <div
        name="about"
        className="w-full h-screen text-slate-600 dark:text-white duration-300 sm:rounded-bl-full rounded-tr-[8000px] shadow-lg shadow-slate-400 dark:shadow-none bg-white dark:bg-transparent"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full px-4 ">
            <div className="sm:text-center pb-8 ">
              <p className=" text-4xl font-bold inline text-blue-400 border-b-4 border-slate-300 dark:text-white dark:border-orange-500">
                This is me
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 sm:items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex sm:justify-end justify-center"
            >
              <img
                src={profileImg}
                className="w-[200px] shadow-lg dark:shadow-none shadow-slate-600 sm:w-[250px] sm:h-[250px] h-[200px] rounded-br-full sm:rounded-bl-full rounded-tl-full sm:rounded-tr-none rounded-tr-full rounded-bl-none flex"
              ></img>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="text-justify"
            >
              <p>
                With a curious, persistent and determined mindset, I am able to
                tackle daily obstacles and find effective solutions.{" "}
                <p className="my-2">
                  In addition to my technical skills, I am a strong communicator
                  and motivator, and I enjoy working with others to identify
                  areas for growth and improvement.
                </p>
                <p className="my-2">
                  When I'm not coding, I love to travel and explore new cultures
                  and environments, I am a nature lover. I am always ready for
                  the next adventure and eager to make the most of every
                  experience.
                </p>
                <p>Enjoy the journey!</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
