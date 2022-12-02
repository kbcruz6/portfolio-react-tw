import React from "react";
import { Link } from "react-scroll";
import reactApps from "../assets/reactApps.png";
import cvWeb from "../assets/webCv.png";
import pureJs from "../assets/pureJs.png";
import nextJs from "../assets/nextJsApp.png";
import currentPortfolio from "../assets/currentPortfolio.png";
import oldPortfolio from "../assets/oldPortfolio.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="pt-6">Check out some of my recent work</p>
        </div>

        {/*//! Card grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*//! Card grid item REACT APPS*/}
          <div
            style={{ backgroundImage: `url(${reactApps})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1"
          >
            {/*//! Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 grid grid-rows-2 justify-center items-center w-full h-full p-0 content-div rounded-md">
              <span className="text-center font-bold text-2xl opacity-100 text-white pt-5">
                React js Apps{" "}
              </span>

              <div className="flex text-center justify-start align-top pb-8">
                <a href="https://kbcruz6.github.io/react/" target="_blank">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kbcruz6/kbcruz6.github.io/tree/main/react"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*//! Card grid item CV WEB */}
          <div
            style={{ backgroundImage: `url(${cvWeb})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1"
          >
            {/*//! Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 grid grid-rows-2 justify-center items-center w-full h-full p-0 content-div rounded-md">
              <span className="text-center font-bold text-2xl opacity-100 text-white pt-5">
                My Web CV!
              </span>
              <div className="flex text-center justify-start align-top pb-8">
                <a
                  href="https://kbcruz6.github.io/CvAgustinCruz/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kbcruz6/kbcruz6.github.io/tree/main/CvAgustinCruz"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>{" "}
          {/*//! Card grid item PURE JS */}
          <div
            style={{ backgroundImage: `url(${pureJs})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1"
          >
            {/*//! Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 grid grid-rows-2 justify-center items-center w-full h-full p-0 content-div rounded-md">
              <span className="text-center font-bold text-2xl opacity-100 text-white pt-5">
                Pure JavaScript
              </span>

              <div className="flex text-center justify-start align-top pb-8">
                <a
                  href="https://kbcruz6.github.io/MixJsLittleProjects/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kbcruz6/kbcruz6.github.io/tree/main/MixJsLittleProjects/code%20here"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*//! Card grid item NEXT JS */}
          <div
            style={{ backgroundImage: `url(${nextJs})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1"
          >
            {/*//! Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 grid grid-rows-2 justify-center items-center w-full h-full p-0 content-div rounded-md">
              <span className="text-center font-bold text-2xl opacity-100 text-white pt-5">
                First NextJS App
              </span>

              <div className="flex text-center justify-start align-top pb-8">
                <a href="https://xkcd-nextjs-indol.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kbcruz6/xkcd-next-app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*//! Card grid item CURRENT PORTFOLIO */}
          <div
            style={{ backgroundImage: `url(${currentPortfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1"
          >
            {/*//! Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 grid grid-rows-2 justify-center items-center w-full h-full p-0 content-div rounded-md">
              <span className="text-center font-bold text-2xl opacity-100 text-white pt-5">
                Current Portfolio
              </span>

              <div className="flex text-center justify-start align-top pb-8">
                <Link to="home" smooth={true} duration={500}>
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Demo
                  </button>
                </Link>
                <a
                  href="https://github.com/kbcruz6/portfolio-react-tw"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*//! Card grid item OLD PORTFOLIO */}
          <div
            style={{ backgroundImage: `url(${oldPortfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1"
          >
            {/*//! Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 grid grid-rows-2 justify-center items-center w-full h-full p-0 content-div rounded-md">
              <span className="text-center font-bold text-2xl opacity-100 text-white pt-5">
                Old Portfolio
              </span>

              <div className="flex text-center justify-start align-top pb-8">
                <a href="https://kbcruz6.github.io/" target="_blank">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/kbcruz6/kbcruz6.github.io"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
