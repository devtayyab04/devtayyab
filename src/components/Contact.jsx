// import React, { useRef } from "react";
import Reveal from "./Reveal";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="px-6 max-w-[80%] mx-auto md:my-12 " id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center gap-2">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                Let's Build Something Together
              </h3>
              <p className="text-justify w-[80%] ">
                Whether you have an idea or a full project in mind — let’s talk!
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7 flex-col">
              <div className="flex gap-5 items-center w-full">
                <div className="bg-gray-800/40 p-4 rounded-lg flex">
                  <IoCallOutline className="text-2xl text-white" />
                </div>
                <div className="flex flex-col">
                  <span>Phone</span>
                  <h1 className="text-white">+92 3247605937</h1>
                </div>
              </div>
              <div className="flex gap-5 items-center w-full">
                <div className="bg-gray-800/40 p-4 rounded-lg flex">
                  <MdOutlineEmail className="text-2xl text-white" />
                </div>
                <div className="flex flex-col">
                  <span>Email</span>
                  <h1 className="text-white">tayyabhamza173@gmail.com</h1>
                </div>
              </div>
              <div className="flex gap-5 items-center w-full">
                <div className="bg-gray-800/40 p-4 rounded-lg flex">
                  <IoLocationOutline className="text-2xl text-white" />
                </div>
                <div className="flex flex-col ">
                  <span>Address</span>
                  <h1 className="text-white">Arfa Karim Tower, Lahore</h1>
                </div>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/bjjjnppb"
            method="POST"
            className=" max-w-6xl p-5 md:p-12 bg-gray-800/40 rounded-lg w-full gap-2"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="john doe"
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-inherit text-gray-100 "
            />
            <input
              type="email"
              id="email"
              placeholder="hello@example.com"
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-inherit text-gray-100"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Message in brief ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-inherit text-gray-100"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>{" "}
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
