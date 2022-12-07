import React, { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [clase, setClase] = useState("hidden");
  const handleSubmit = () => {
    setClase(
      "inline-flex fixed top-1/2 inset-x-auto z-20 w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-pink-600 bg-pink-600 px-4 py-3 text-sm font-medium text-white transition hover:border-pink-800 hover:bg-pink-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-85"
    );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <form
          action="https://getform.io/f/503080b0-f501-49a9-b095-e98844e90b47"
          className="flex flex-col max-w-[500px] w-full"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="pb-1">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600  text-gray-300">
              Contact me!
            </p>
            <p className="pt-4 pb-2 text-gray-300">
              Submit the form below or email me → agustin.tcw@gmail.com
            </p>
          </div>
          {/*//! Input name */}
          <div
            // data-aos="fade-right"
            // data-aos-duration="800"
            // data-aos-delay="500"
            className="outline-white relative z-10 border-2 focus-within:border-pink-600 mb-2  hover:border-pink-600 duration-300"
          >
            <input
              required
              type="text"
              name="name"
              placeholder=" "
              className="flex p-4 w-full text-md z-10 appearance-none focus:outline-none bg-transparent text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for="name"
              className="absolute top-0 text-md p-4 -z-10 duration-300 origin-0 bg-[#0a192f] text-pink-600"
            >
              Name
            </label>
          </div>
          {/*//! Input email */}
          <div
            // data-aos="fade-left"
            // data-aos-duration="800"
            // data-aos-delay="700"
            className="outline-white relative z-10 border-2 focus-within:border-pink-600 mb-2  hover:border-pink-600 duration-300"
          >
            <input
              required
              type="email"
              name="email"
              placeholder=" "
              className="flex p-4 w-full text-md z-0 appearance-none focus:outline-none bg-transparent text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              for="email"
              className="absolute top-0 text-md p-4 -z-10 duration-300 origin-0 bg-[#0a192f] text-pink-600"
            >
              Email
            </label>
          </div>
          {/*//! Textarea message */}
          <div
            // data-aos="fade-right"
            // data-aos-duration="800"
            // data-aos-delay="900"
            className="outline-white relative z-10 border-2 focus-within:border-pink-600 mb-2  hover:border-pink-600 duration-300"
          >
            <textarea
              required
              type="text"
              name="message"
              placeholder=" "
              className="flex p-4 w-full text-md z-0 appearance-none focus:outline-none bg-transparent text-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label
              for="message"
              className="absolute top-0 text-md p-4 -z-10 duration-300 origin-0 bg-[#0a192f] text-pink-600"
            >
              Message
            </label>
          </div>
          {/*//! Button */}
          <button
            // data-aos="fade-left"
            // data-aos-duration="800"
            // data-aos-delay="1100"
            className="text-xl border-2 text-white hover:bg-pink-600 hover:border-pink-600 duration-200 px-5 py-2 my-3 mx-auto flex items-center"
          >
            Send
          </button>
        </form>
        {/*//! Loading button  */}
        <button type="button" disabled className={clase}>
          <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
            <path
              className="fill-pink-800"
              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            ></path>
            <path
              className="fill-pink-100"
              d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
            ></path>
          </svg>
          <span> Sending your message...</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
