import React, { useEffect, useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (count === 0) return;
  // }, [count]);

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
          <div class="outline-white relative z-10 border-2 focus-within:border-pink-600 mb-2  hover:border-pink-600 duration-300">
            <input
              required
              type="text"
              name="name"
              placeholder=" "
              class="flex p-4 w-full text-md z-10 appearance-none focus:outline-none bg-transparent text-white"
            />
            <label
              for="name"
              class="absolute top-0 text-md p-4 -z-10 duration-300 origin-0 bg-[#0a192f] text-pink-600"
            >
              Name
            </label>
          </div>
          {/*//! Input email */}
          <div class="outline-white relative z-10 border-2 focus-within:border-pink-600 mb-2  hover:border-pink-600 duration-300">
            <input
              required
              type="email"
              name="email"
              placeholder=" "
              class="flex p-4 w-full text-md z-0 appearance-none focus:outline-none bg-transparent text-white"
            />
            <label
              for="email"
              class="absolute top-0 text-md p-4 -z-10 duration-300 origin-0 bg-[#0a192f] text-pink-600"
            >
              Email
            </label>
          </div>
          {/*//! Textarea message */}
          <div class="outline-white relative z-10 border-2 focus-within:border-pink-600 mb-2  hover:border-pink-600 duration-300">
            <textarea
              required
              type="text"
              name="message"
              placeholder=" "
              class="flex p-4 w-full text-md z-0 appearance-none focus:outline-none bg-transparent text-white"
            />
            <label
              for="message"
              class="absolute top-0 text-md p-4 -z-10 duration-300 origin-0 bg-[#0a192f] text-pink-600"
            >
              Message
            </label>
          </div>
          {/*//! Button */}
          <button
            onClick={() => setCount(1)}
            className="text-xl border-2 text-white hover:bg-pink-600 hover:border-pink-600 duration-200 px-5 py-2 my-3 mx-auto flex items-center"
          >
            Send
          </button>
        </form>
        {/*//! Loading button  */}
        <button
          type="button"
          disabled
          className={
            count === 0
              ? "hidden fixed top-1/2 inset-x-auto z-20 w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-pink-600 bg-pink-600 px-4 py-3 text-sm font-medium text-white transition hover:border-pink-800 hover:bg-pink-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-85"
              : "inline-flex fixed top-1/2 inset-x-auto z-20 w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-pink-600 bg-pink-600 px-4 py-3 text-sm font-medium text-white transition hover:border-pink-800 hover:bg-pink-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-85"
          }
        >
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
