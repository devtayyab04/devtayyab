import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineLinkedin, AiOutlineCodepenCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-20 text-sm md:text-lg mt-12 gap-6 md:gap-0">
      {/* Left Side */}
      <div className="space-y-4 flex flex-col items-center md:items-start">
        <h3 className="text-2xl text-gray-200 font-semibold">M. Tayyab</h3>

        {/* Social Icons */}
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a
            href="https://github.com/devtayyab04"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
          >
            <FaGithubSquare />
          </a>

          <a
            href="https://www.linkedin.com/in/m-tayyab-960b4b257/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
          >
            <AiOutlineLinkedin />
          </a>

          <a
            href="https://codepen.io/M-Tayyab-the-scripter"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
          >
            <AiOutlineCodepenCircle />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <p className="text-gray-400 text-center md:text-right">
        © 2025 Dev | Tayyab
      </p>
    </footer>
  );
};

export default Footer;
