import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  //! MAIL
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [clase, setClase] = useState("hidden");

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const submitEmail = async (e) => {
    e.preventDefault();
    setClase(
      "inline-flex fixed top-1/2 inset-x-auto rounded-full z-20 w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-blue-400 bg-blue-400 dark:border-orange-500 dark:bg-orange-500 px-4 py-3 text-sm font-medium dark:text-white transition hover:border-orange-800 hover:bg-orange-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-85 animate-pulse"
    );
    console.log({ mailerState });
    const response = await fetch(
      "https://server-for-portfolio.vercel.app/send",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ mailerState }),
      }
    )
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          Swal.fire({
            title: "Succes!",
            text: `Thanks for your message ${mailerState.name}!👋🏻`,
            icon: "success",
            color: "#ed8936",
            background: "#0d1e3a",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        } else if (resData.status === "fail") {
          Swal.fire({
            title: "Error!",
            text: `Message failed to send 🥲, please try again!`,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
        setClase("hidden");
      });
  };

  return (
    <div className="bg-slate-100 dark:bg-transparent">
      <div
        name="contact"
        className="w-full h-screen flex justify-center items-center p-4 text-slate-600 bg-white dark:bg-transparent sm:rounded-b-full rounded-br-[300px] shadow-lg shadow-slate-400 dark:shadow-none"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <form onSubmit={submitEmail}>
            <div className="pb-1">
              <p className="text-4xl font-bold inline border-b-4 border-slate-300 text-blue-400 dark:border-orange-500  dark:text-white">
                Contact me!
              </p>
              <p className="pt-4 pb-2  dark:text-white">
                Submit the form below or email me → agustin.tcw@gmail.com
              </p>
            </div>
            {/*//! Input name */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="outline-white rounded-3xl relative shadow-lg shadow-slate-300 dark:shadow-black mb-5 z-10 border-2 border-blue-300 focus-within:border-blue-500 dark:border-orange-200 dark:focus-within:border-orange-500 hover:border-blue-500 dark:hover:border-orange-500 duration-300">
                <input
                  onChange={handleStateChange}
                  name="name"
                  value={mailerState.name}
                  required
                  type="text"
                  placeholder=" "
                  className="flex p-4 w-full text-md z-10 appearance-none focus:outline-none bg-transparent dark:text-white"
                />
                <label
                  for="name"
                  className="absolute top-0 rounded-3xl text-md p-4 -z-10 duration-300 origin-0 bg-white text-blue-400 dark:bg-[#0d1e3a] dark:text-orange-500"
                >
                  Name
                </label>
              </div>
            </div>
            {/*//! Input email */}
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="outline-white rounded-3xl relative shadow-lg shadow-slate-300 dark:shadow-black mb-5 z-10 border-2 border-blue-300 focus-within:border-blue-500 dark:border-orange-200 dark:focus-within:border-orange-500 hover:border-blue-500 dark:hover:border-orange-500 duration-300">
                <input
                  required
                  onChange={handleStateChange}
                  name="email"
                  value={mailerState.email}
                  type="email"
                  placeholder=" "
                  className="flex p-4 w-full text-md z-0 appearance-none focus:outline-none bg-transparent dark:text-white"
                />
                <label
                  for="email"
                  className="absolute top-0 rounded-3xl text-md p-4 -z-10 duration-300 origin-0 bg-white text-blue-400 dark:bg-[#0d1e3a] dark:text-orange-500"
                >
                  Email
                </label>
              </div>
            </div>
            {/*//! Textarea message */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="outline-white rounded-3xl relative shadow-lg shadow-slate-300 dark:shadow-black mb-5 z-10 border-2 border-blue-300 focus-within:border-blue-500 dark:border-orange-200 dark:focus-within:border-orange-500 hover:border-blue-500 dark:hover:border-orange-500 duration-300">
                <textarea
                  onChange={handleStateChange}
                  name="message"
                  value={mailerState.message}
                  required
                  type="text"
                  placeholder=" "
                  className="flex p-4 w-full text-md z-0 appearance-none focus:outline-none bg-transparent dark:text-white"
                />
                <label
                  for="message"
                  className="absolute top-0 rounded-3xl text-md p-4 -z-10 duration-300 origin-0 bg-white text-blue-400 dark:bg-[#0d1e3a] dark:text-orange-500"
                >
                  Message
                </label>
              </div>
            </div>
            {/*//! Button */}
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <button className="rounded-3xl text-xl shadow-lg shadow-slate-300 dark:shadow-black border-2 border-blue-400  text-slate-600 hover:text-white hover:bg-blue-400 dark:border-orange-200 dark:text-white  dark:hover:bg-orange-500  dark:hover:border-orange-500 duration-300 px-5 py-2 my-3 mx-auto flex items-center">
                Send
              </button>
            </div>
          </form>
          {/*//! Loading button  */}
          <button type="button" disabled className={clase}>
            <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
              <path
                className="fill-orange-800"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path
                className="fill-orange-100"
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
              ></path>
            </svg>
            <span> Sending your message...</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
