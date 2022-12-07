import React from "react";
import profileImg from "../assets/33.jpeg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 ">
          <div className="sm:text-center pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              This is me 🙋🏻‍♂️
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            // data-aos="fade-right"
            // data-aos-duration="1000"
            className="flex sm:justify-end justify-center"
          >
            <img
              src={profileImg}
              className="w-[200px] h-[200px] rounded-full"
            ></img>
          </div>

          <div
          // data-aos="fade-left"
          // data-aos-duration="1000"
          // data-aos-delay="500"
          >
            <p>
              I am very curious and persistent, and also... an Engineer, what is
              super useful in this environment to face the daily challenges and
              solve problems.{" "}
              <p className="my-2">
                I have a creative way to think above and beyond, also a great
                ability to learn quickly and flexibility to continuous change.
              </p>
              <p>
                I enjoy a lot travelling & I would love to work remotely.
                Visiting new places, getting to know new people, and practicing
                trekking are my passions, I really love nature life.
              </p>
              <p className="my-2">Enjoy the journey!</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
