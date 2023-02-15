import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Nextjs from "../assets/nextjs.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import MySQL from "../assets/mysql.png";
import mongoDB from "../assets/mongodb.png";

const Skills = () => {
  return (
    <div className="bg-slate-100 dark:bg-transparent">
      <div
        name="skills"
        className="w-full h-screen text-slate-600 dark:text-white duration-300 bg-white sm:rounded-tr-[400px] shadow-lg shadow-slate-400 dark:shadow-none dark:bg-transparent"
      >
        {/*//! Container */}
        <div className="max-w-[1000px] w-full h-full mx-auto items-center p-4 flex flex-col justify-center ">
          <div className="text-justify">
            <p className="text-4xl font-bold inline border-b-4 border-slate-300 text-blue-400 dark:text-white dark:border-orange-500">
              Skills and knowledge
            </p>
            <p data-aos="fade-left" data-aos-duration="1000" className="py-4">
              Since I directed my profile towards web development, I have been
              studying and practicing a lot about all the technologies listed
              below. In addition to web development, I have a solid
              understanding of web SEO and blockchain. My background in
              Industrial Engineering adds a unique perspective to my work. I am
              passionate about learning and growing in the tech industry.
            </p>
            <p data-aos="fade-left" data-aos-duration="1000">
              These are the main technologies I've worked with:
            </p>
            {/* <p data-aos="fade-left" data-aos-duration="1000">
              (I'm currently learning Next.js 💪🏻)
            </p> */}
          </div>
          <div className="mt-3 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 shadow-lg shadow-slate-400 bg-slate-50 rounded-[80px] dark:shadow-none dark:bg-transparent">
            {/*//! HTML  */}
            <div
              data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
              data-aos-duration="2000"
              data-aos-delay="500"
              // className="shadow-md shadow-slate-600 hover:scale-110 duration-500 rounded-full"
            >
              <img
                className="w-20 mx-auto hover:scale-110 duration-500"
                src={HTML}
                alt="HTML icon"
              />
              <p>HTML</p>
            </div>
            {/*//! CSS  */}
            <div
              data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
              data-aos-duration="2000"
              data-aos-delay="500"
              // className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto hover:scale-110 duration-500"
                src={CSS}
                alt="HTML icon"
              />
              <p>CSS</p>
            </div>
            {/*//! JAVASCRIPT  */}
            <div
              data-aos-duration="2000"
              data-aos-delay="500"
              data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
              // className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto hover:scale-110 duration-500"
                src={JavaScript}
                alt="HTML icon"
              />
              <p>JavaScript</p>
            </div>
            {/*//! REACT  */}
            <div
              data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
              data-aos-duration="2000"
              data-aos-delay="500"
              // className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto hover:scale-110 duration-500"
                src={ReactImg}
                alt="HTML icon"
              />
              <p>React JS</p>
            </div>
            {/*//! NODE JS  */}
            <div
              data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
              data-aos-duration="2000"
              data-aos-delay="500"
              // className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto hover:scale-110 duration-500"
                src={Node}
                alt="HTML icon"
              />
              <p>Node JS</p>
            </div>
            {/*//! MYSQL  */}
            <div
              data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
              data-aos-duration="2000"
              data-aos-delay="500"
              // className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-[6.3rem] mx-auto hover:scale-110 duration-500"
                src={MySQL}
                alt="mysql icon"
              />
              {/* <p>MySQL</p> */}
            </div>
            {/*//! MONGODB  */}
            <div
              data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
              data-aos-duration="2000"
              data-aos-delay="500"
              // className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto hover:scale-110 duration-500"
                src={mongoDB}
                alt="mongodb icon"
              />
              <p>MongoDB</p>
            </div>
            {/*//! TAILWIND  */}
            <div
              data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
              data-aos-duration="2000"
              data-aos-delay="500"
              // className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto hover:scale-110 duration-500"
                src={Tailwind}
                alt="HTML icon"
              />
              <p>Tailwind</p>
            </div>
            {/*//! GITHUB  */}
            {/* <div
              data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
              data-aos-duration="2000"
              data-aos-delay="500"
              // className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto hover:scale-110 duration-500"
                src={GitHub}
                alt="HTML icon"
              />
              <p>GitHub</p>
            </div> */}
            {/*//! NEXT  */}
            {/* <div
            // className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos={window.innerWidth < 700 ? "zoom-in" : "flip-left"}
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <img
              className="w-20 mx-auto hover:scale-110 duration-500"
              src={Nextjs}
              alt="HTML icon"
            />
            <p>Next JS</p>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
