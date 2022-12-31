import React from "react";
import profileImg from "../assets/33.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-orange-200 duration-300 invisible dark:visible"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 ">
          <div className="sm:text-center pb-8 ">
            <p className="text-4xl font-bold inline dark:border-b-4 dark:border-orange-500">
              This is me 🙋🏻‍♂️
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
              className="w-[200px] sm:w-[250px] sm:h-[250px] h-[200px] rounded-br-full sm:rounded-bl-full rounded-tl-full sm:rounded-tr-none rounded-tr-full rounded-bl-none hidden dark:flex"
            ></img>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <p>
              I am very curious and persistent, what is super useful in this
              environment to face the daily challenges and solve problems.{" "}
              <p className="my-2">
                I have a creative way to think above and beyond, also a great
                ability to learn quickly and flexibility to continuous change.
              </p>
              <p className="my-2">
                I am good at motivating people and also finding weaknesses,
                which provides us the opportunity to improve them and allows us
                to continue growing.
              </p>
              <p>
                I enjoy a lot travelling & I would love to work remotely.
                Visiting new places, getting to know new people, and practicing
                trekking are my passions, I really love nature life.
              </p>
              <p className="mt-2">Enjoy the journey!</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
