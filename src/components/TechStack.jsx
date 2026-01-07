import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVite,
  SiBootstrap,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const iconClass =
  "w-12 h-12 md:w-12 md:h-12 transition-transform duration-300 hover:scale-125";

const TechStack = () => {
  return (
    <Reveal>
      <section
        className="py-8 px-6 md:px-20 overflow-hidden rounded-lg shadow-md
                   hover:shadow-lg transition-shadow duration-300 bg-purple-700/10"
      >
        <div className="relative w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            className="flex items-center whitespace-nowrap will-change-transform"
          >
            {/* Row 1 */}
            <div className="flex items-center gap-14 md:gap-20 w-max">
              <SiHtml5 className={`${iconClass} text-orange-500`} />
              <SiCss3 className={`${iconClass} text-blue-500`} />
              <SiJavascript className={`${iconClass} text-yellow-400`} />
              <SiReact className={`${iconClass} text-sky-400`} />
              <SiVite className={`${iconClass} text-purple-400`} />
              <SiBootstrap className={`${iconClass} text-purple-600`} />
              <SiNextdotjs className={`${iconClass} text-black`} />
              <SiTailwindcss className={`${iconClass} text-sky-300`} />
              <SiFramer className={`${iconClass} text-pink-400`} />
              <SiMongodb className={`${iconClass} text-green-600`} />
              <SiExpress className={`${iconClass} text-gray-500`} />
              <SiNodedotjs className={`${iconClass} text-green-500`} />
              <SiGithub className={`${iconClass} text-gray-500`} />
            </div>

            {/* Row 2 (for infinite looping) */}
            <div className="flex items-center gap-14 md:gap-20 w-max ml-20">
              <SiHtml5 className={`${iconClass} text-orange-500`} />
              <SiCss3 className={`${iconClass} text-blue-500`} />
              <SiJavascript className={`${iconClass} text-yellow-400`} />
              <SiReact className={`${iconClass} text-sky-400`} />
              <SiNodedotjs className={`${iconClass} text-green-500`} />
              <SiBootstrap className={`${iconClass} text-purple-600`} />
              <SiMongodb className={`${iconClass} text-green-600`} />
              <SiGithub className={`${iconClass} text-gray-500`} />
              <SiNextdotjs className={`${iconClass} text-black`} />
              <SiTailwindcss className={`${iconClass} text-sky-300`} />
              <SiExpress className={`${iconClass} text-gray-500`} />
            </div>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
};

export default TechStack;
