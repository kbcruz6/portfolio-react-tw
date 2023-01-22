import React from "react";
import { Link } from "react-scroll";
import reactApps from "../assets/reactApps.png";
import cvWeb from "../assets/webCv.png";
import pureJs from "../assets/pureJs.png";
import nextJs from "../assets/nextJsApp.png";
import currentPortfolio from "../assets/currentPortfolio.png";
import weather from "../assets/weather.png";
import weatherReact from "../assets/weatherReactDark.png";
import { FaEye, FaGithub } from "react-icons/fa";
import books from "../assets/books.png";
import workout from "../assets/workout.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-orange-200 invisible dark:visible duration-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 dark:flex hidden flex-col justify-center w-full h-full duration-300">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-500">
            Work
          </p>
          <p data-aos="fade-right" data-aos-duration="1000" className="pt-6">
            Check out some of my recent work
          </p>
        </div>

        {/*//! Card grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*//! Card grid item */}
          {/*//! WORKOUT */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="max-w-sm rounded-md shadow-lg shadow-[#040c16] p-2  bg-[#11294e]/50 hover:bg-[#11294e]/90 duration-300"
          >
            <div
              style={{ backgroundImage: `url(${workout})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div1"
            >
              {/*//! Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md">
                <div className="flex text-center justify-start">
                  <a href="https://workout-kbcruz.vercel.app/" target="_blank">
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaEye size={30} />
                    </button>
                  </a>
                  <a
                    href="https://github.com/stars/kbcruz6/lists/workouts-mern-app"
                    target="_blank"
                  >
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaGithub size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              MERN app (w/MongoDB){" "}
            </div>
          </div>
          {/*//! BOOKS MERN APP*/}
          {/* <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="max-w-sm rounded-md shadow-lg shadow-[#040c16] p-2 bg-[#11294e]/50 hover:bg-[#11294e]/90"
          >
            <div
              style={{ backgroundImage: `url(${books})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div1"
            > */}
          {/*//! Hover effects */}
          {/* <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md duration-300">
                <a href="https://books-info.vercel.app/" target="_blank">
                  <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    <FaEye size={30} />
                  </button>
                </a>
                <a
                  href="https://github.com/stars/kbcruz6/lists/books-mern-app"
                  target="_blank"
                >
                  <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              MERN app (w/MySQL)
            </div>
          </div> */}
          {/*//! WEATHER APP*/}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="max-w-sm rounded-md shadow-lg shadow-[#040c16] p-2 bg-[#11294e]/50 hover:bg-[#11294e]/90"
          >
            <div
              style={{ backgroundImage: `url(${weatherReact})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div1"
            >
              {/*//! Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md duration-300">
                <a href="https://weather-kbcruz.vercel.app/" target="_blank">
                  <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    <FaEye size={30} />
                  </button>
                </a>
                <a
                  href="https://github.com/kbcruz6/weather-app"
                  target="_blank"
                >
                  <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              React Weather App
            </div>
          </div>
          {/*//! WEB CV */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="max-w-sm rounded-md shadow-lg shadow-[#040c16] p-2  bg-[#11294e]/50 hover:bg-[#11294e]/90 duration-300"
          >
            <div
              style={{ backgroundImage: `url(${cvWeb})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div1"
            >
              {/*//! Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md">
                <div className="flex text-center justify-start">
                  <a
                    href="https://kbcruz6.github.io/CvAgustinCruz/"
                    target="_blank"
                  >
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaEye size={30} />
                    </button>
                  </a>
                  <a
                    href="https://github.com/kbcruz6/kbcruz6.github.io/tree/main/CvAgustinCruz"
                    target="_blank"
                  >
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaGithub size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              My Web CV{" "}
            </div>
          </div>
          {/*//! NEXT JS xkcd */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="max-w-sm rounded-md shadow-lg shadow-[#040c16] p-2  bg-[#11294e]/50 hover:bg-[#11294e]/90 duration-300"
          >
            <div
              style={{ backgroundImage: `url(${nextJs})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div1"
            >
              {/*//! Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md">
                <div className="flex text-center justify-start">
                  <a
                    href="https://xkcd-nextjs-indol.vercel.app/"
                    target="_blank"
                  >
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaEye size={30} />
                    </button>
                  </a>
                  <a
                    href="https://github.com/kbcruz6/xkcd-next-app"
                    target="_blank"
                  >
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaGithub size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              First NextJS App{" "}
            </div>
          </div>
          {/*//! CURRENT PORTFOLIO */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            className="max-w-sm rounded-md shadow-lg shadow-[#040c16] p-2 bg-[#11294e]/50 hover:bg-[#11294e]/90"
          >
            <div
              style={{ backgroundImage: `url(${currentPortfolio})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div1"
            >
              {/*//! Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md duration-300">
                <Link to="home" smooth={true} duration={500}>
                  <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    <FaEye size={30} />
                  </button>
                </Link>
                <a
                  href="https://github.com/kbcruz6/portfolio-react-tw"
                  target="_blank"
                >
                  <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>{" "}
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              Current Portfolio{" "}
            </div>
          </div>
          {/*//! REACT APPS*/}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
            className="max-w-sm rounded-md shadow-lg shadow-[#040c16] p-2  bg-[#11294e]/50 hover:bg-[#11294e]/90 duration-300"
          >
            <div
              style={{ backgroundImage: `url(${reactApps})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div1"
            >
              {/*//! Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md">
                <div className="flex text-center justify-start">
                  <a href="https://kbcruz6.github.io/react/" target="_blank">
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaEye size={30} />
                    </button>
                  </a>
                  <a
                    href="https://github.com/kbcruz6/kbcruz6.github.io/tree/main/react"
                    target="_blank"
                  >
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaGithub size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              React Apps
            </div>
          </div>
          {/* //! PURE JS
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
            className="max-w-sm rounded-md shadow-lg shadow-[#040c16] p-2  bg-[#11294e]/50 hover:bg-[#11294e]/90 duration-300"
          >
            <div
              style={{ backgroundImage: `url(${pureJs})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div1"
            >
              //! Hover effects 
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md">
                <div className="flex text-center justify-start">
                  <a
                    href="https://kbcruz6.github.io/MixJsLittleProjects/"
                    target="_blank"
                  >
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaEye size={30} />
                    </button>
                  </a>
                  <a
                    href="https://github.com/kbcruz6/kbcruz6.github.io/tree/main/MixJsLittleProjects/<FaGithub size={30} />%20here"
                    target="_blank"
                  >
                    <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                      <FaGithub size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              Pure JavaScript{" "}
            </div>
          </div> */}

          {/*//! WEATHER APP*/}
          {/* <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="max-w-sm rounded-md shadow-lg shadow-[#040c16] p-2 bg-[#11294e]/50 hover:bg-[#11294e]/90"
          >
            <div
              style={{ backgroundImage: `url(${weather})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div1"
            >
              //! Hover effects 
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full p-0 content-div rounded-md duration-300">
                <a
                  href="https://weather-agustincruz.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    <FaEye size={30} />
                  </button>
                </a>
                <a
                  href="https://github.com/kbcruz6/weather-nextjs-app"
                  target="_blank"
                >
                  <button className="text-center rounded-full px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_3px_0px_rgb(0,0,0)] ease-out hover:translate-y-1  transition-all">
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              NextJS Weather App
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
