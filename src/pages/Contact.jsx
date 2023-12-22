import React from "react";
// import "./Contact.css";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { GiEarthAsiaOceania } from "react-icons/gi";

const Contact = () => {
  return (
    <div className="w-full h-[100svh] grid place-content-center p-5">
      <div className="max-w-[900px] grid lg:grid-cols-2 grid-cols-1">
        <div className="bg-primary-dark text-white px-10 md:py-20 py-10">
          <h1 className="text-2xl font-semibold mb-2">let's get in touch</h1>
          <p className="text-xl font-medium mb-9">We're open for any suggestion or just to have a chat.</p>
          <div>
            <div className="grid p-2 text-xl">
              <i>
                <IoLocationOutline />
              </i>
              Address: hiledol, tarkeshwor-11
            </div>
            <div className="grid p-2 text-xl">
              <i>
                <AiOutlinePhone />
              </i>
              Phone: 01-4027555, 9861544966
            </div>
            <div className="grid p-2 text-xl">
              <i>
                <AiOutlineMail />
              </i>
              Email: info@gmail.com
            </div>
            <div className="grid p-2 text-xl">
              <i>
                <GiEarthAsiaOceania />
              </i>
              Website anything.com
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap bg-white px-10 md:py-20 py-10 border-2">
          <h1 className="m-2">Contact Us</h1>
          <form action="https://formspree.io/f/xdovpvjw" method="POST">
            <div className="m-2">
              <label htmlFor="name">
                Full Name
              </label>
              <br />
              <input
                className="w-full px-2 py-2 border-2 rounded"
                type="text"
                name="name"
                autoComplete="off"
                required
              />
            </div>
            <div className="m-2">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <br />
              <input
                className="w-full px-2 py-2 border-2 rounded"
                type="email"
                name="email"
                autoComplete="off"
                required
              />
            </div>
            <div className="m-2">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <br />
              <textarea
                className="w-full border-2 rounded"
                cols="40"
                row="6"
                name="message"
                autoComplete="off"
                required
              ></textarea>
            </div>
            <button className="bg-primary-dark text-white px-6 py-4 m-2 font-semibold hover:bg-[#0e986a]" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
