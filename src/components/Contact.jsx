import React from "react";

const Contact = () => {
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
              class="flex p-4 w-full text-md z-0 appearance-none focus:outline-none bg-transparent text-white"
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
            data-rel="back"
            className="text-xl border-2 text-white hover:bg-pink-600 hover:border-pink-600 duration-200 px-5 py-2 my-3 mx-auto flex items-center"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
