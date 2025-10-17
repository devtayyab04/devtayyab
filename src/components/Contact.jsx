// import React from "react";
import Reveal from "./Reveal";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="contact"
      className="px-6 md:px-10 max-w-6xl mx-auto my-16 md:my-20 text-gray-300"
    >
      <Reveal>
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
              Let's Build Something Together
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Whether you have an idea or a full project in mind — let’s talk!
            </p>

            <div className="flex flex-col gap-6 mt-10 w-full">
              <div className="flex items-center gap-4">
                <div className="bg-gray-800/40 p-4 rounded-lg flex items-center justify-center">
                  <IoCallOutline className="text-2xl text-purple-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">Phone</span>
                  <h1 className="text-white text-lg">+92 3247605937</h1>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-800/40 p-4 rounded-lg flex items-center justify-center">
                  <MdOutlineEmail className="text-2xl text-purple-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">Email</span>
                  <h1 className="text-white text-lg">
                    tayyabhamza173@gmail.com
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-800/40 p-4 rounded-lg flex items-center justify-center">
                  <IoLocationOutline className="text-2xl text-purple-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">Address</span>
                  <h1 className="text-white text-lg">
                    Arfa Karim Tower, Lahore
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/bjjjnppb"
            method="POST"
            className="w-full bg-gray-800/40 p-6 md:p-10 rounded-xl flex flex-col gap-4 shadow-lg"
          >
            <p className="text-gray-100 font-bold text-2xl mb-2">
              Let’s connect!
            </p>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full rounded-md border border-purple-600 py-2 px-4 bg-transparent text-gray-100 focus:outline-none focus:border-purple-400 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="hello@example.com"
              className="w-full rounded-md border border-purple-600 py-2 px-4 bg-transparent text-gray-100 focus:outline-none focus:border-purple-400 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Message in brief..."
              rows="5"
              className="w-full rounded-md border border-purple-600 py-2 px-4 bg-transparent text-gray-100 focus:outline-none focus:border-purple-400 transition resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold text-lg bg-primary-color hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
