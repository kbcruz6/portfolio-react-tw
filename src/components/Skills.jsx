import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Nextjs from "../assets/nextjs.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/*//! Container */}
      <div className="max-w-[1000px] w-full h-full mx-auto items-center p-4 flex flex-col justify-center ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills and knowledge
          </p>
          <p className="py-4">
            Since I directed my profile towards web development, I have been
            studying and practicing a lot, all the technologies listed below.
            And it's also good to mention that I have knowledge of web SEO &
            Blockchain, and I'm an Industrial Engineer.
          </p>
          <p>These are the technologies I've worked with:</p>
          <p>(I'm currently learning Next.js 💪🏻)</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p>React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p>GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p>Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p>Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Nextjs} alt="HTML icon" />
            <p>Next JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
