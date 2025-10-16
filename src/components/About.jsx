// import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 px-6 flex flex-col items-center text-center text-gray-300"
    >
      <motion.div
        className="space-y-8 max-w-5xl"
        initial="hidden"
        animate="visible"
      >
        <Reveal>
          <div className="sm:max-w-5xl ">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
              About <span className="text-">Me</span>
            </h2>

            <p
              className="text-gray-400 leading-relaxed md:text-lg  border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              I’m a passionate{" "}
              <span className="text-white font-medium">
                Full Stack MERN Developer
              </span>
              with expertise in{" "}
              <span className="text-white">
                MongoDB, Express.js, React, and Node.js
              </span>
              . I build modern, responsive, and scalable web applications with
              smooth user experiences and efficient backend architecture. Let’s
              bring your ideas to life through creative digital solutions 🚀
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl w-32">
                <h3 className="text-3xl font-semibold text-white">
                  10<span className="text-purple">+</span>
                </h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl w-32">
                <h3 className="text-3xl font-semibold text-white">
                  1<span className="text-purple">+</span>
                </h3>
                <p className="text-sm text-gray-400">Year Experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl w-32">
                <h3 className="text-3xl font-semibold text-white">
                  5<span className="text-purple">+</span>
                </h3>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
};

export default About;
