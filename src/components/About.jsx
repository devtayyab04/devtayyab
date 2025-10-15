// import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

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

          <div className="mt-16 w-full overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              className="flex items-center justify-center whitespace-nowrap text-4xl md:text-6xl font-light"
            >
              {/* <p className="text-gray-200 mr-6">My Tech Stack</p> */}
              <DiHtml5 className="text-orange-600 mx-auto" />
              <DiCss3 className="text-blue-600 mx-auto" />
              <DiJavascript1 className="text-yellow-500 mx-auto" />
              <DiReact className="text-blue-500 mx-auto" />
              <DiNodejsSmall className="text-green-500 mx-auto" />
              <DiBootstrap className="text-purple-600 mx-auto" />
              <DiMongodb className="text-green-600 mx-auto" />
              <DiGithubBadge className="text-gray-400 mx-auto" />
              <RiNextjsLine className="text-white mx-auto" />
              <RiTailwindCssLine className="text-sky-400 mx-auto" />
              <SiExpress className="text-green-600 mx-auto" />
            </motion.div>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
};

export default About;
