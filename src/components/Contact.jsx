import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <form
          action="https://getform.io/f/503080b0-f501-49a9-b095-e98844e90b47"
          className="flex flex-col max-w-[500px] w-full"
          method="POST"
        >
          <div className="pb-1">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600  text-gray-300">
              Contact
            </p>
            <p className="pt-4 pb-2 text-gray-300">
              Submit the form below or email me → agustin.tcw@gmail.com
            </p>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="rounded p-1 bg-[#ccd6f6] hover:bg-[#ccd6f6c8] placeholder:hover:text-white focus:outline-none focus:bg-[#ccd6f6c8] focus:placeholder:text-white focus:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="rounded my-2 p-1 bg-[#ccd6f6] hover:bg-[#ccd6f6c8] placeholder:hover:text-white focus:outline-none focus:bg-[#ccd6f6c8] focus:placeholder:text-white focus:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="rounded p-1 bg-[#ccd6f6] hover:bg-[#ccd6f6c8] placeholder:hover:text-white focus:outline-none focus:bg-[#ccd6f6c8] focus:placeholder:text-white focus:text-white"
          ></textarea>
          <button className="rounded border-2 text-white hover:bg-pink-600 hover:border-pink-600 duration-200 px-4 py-2 my-3 mx-auto flex items-center">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
