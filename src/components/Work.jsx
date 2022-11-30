import React from "react";
import workImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

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

        {/* Card grid container */}
        <div className="grid sm:grid-cols-3 gap-4">
          {/* Card grid item */}
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card grid item */}
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card grid item */}
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    Demo
                  </button>
                </a>
                <a href="/">
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
