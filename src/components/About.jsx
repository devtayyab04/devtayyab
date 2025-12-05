import { motion } from "framer-motion";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 flex flex-col items-center text-center text-gray-300"
    >
      <motion.div
        className="space-y-12 max-w-4xl"
        initial="hidden"
        animate="visible"
      >
        <Reveal>
          <div className="sm:max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="text-white">About</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed md:text-lg border border-purple-600/40 p-7 rounded-2xl shadow-xl bg-gradient-to-br from-purple-900/10 to-purple-600/10 backdrop-blur-lg">
              I’m a dedicated{" "}
              <span className="text-white font-semibold">
                Full Stack MERN Developer
              </span>{" "}
              who builds clean, scalable, and modern web applications. I focus
              on{" "}
              <span className="text-purple-300 font-medium">
                smooth UI/UX, strong backend logic, and performance-optimized
                design
              </span>
              . My goal is to turn ideas into powerful digital products 🚀
            </p>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                { number: "10+", label: "Projects" },
                { number: "1+", label: "Year Experience" },
                { number: "5+", label: "Happy Clients" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-xl border border-purple-600/30 p-6 rounded-2xl w-36 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {item.number}
                  </h3>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
};

export default About;
