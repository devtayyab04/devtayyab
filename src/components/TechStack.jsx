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
import { TbBrandVite, TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <Reveal>
      <section
        className=" py-10 px-6 md:px-20 overflow-hidden border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
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
            className="flex items-center justify-center whitespace-nowrap will-change-transform"
          >
            <div className="flex items-center justify-center gap-12 md:gap-20 text-5xl md:text-6xl w-max">
              <DiHtml5 className="text-orange-600" />
              <DiCss3 className="text-blue-600" />
              <DiJavascript1 className="text-yellow-500" />
              <DiReact className="text-blue-500" />
              <TbBrandVite className="text-white" />
              <DiBootstrap className="text-purple-600" />
              <RiNextjsLine className="text-black" />
              <RiTailwindCssLine className="text-sky-400" />
              <TbBrandFramerMotion className="text-black" />
              <DiMongodb className="text-green-600" />
              <SiExpress className="text-gray-700" />
              <DiNodejsSmall className="text-green-500" />
              <DiGithubBadge className="text-gray-600" />
            </div>

            <div className="flex items-center justify-center gap-12 md:gap-20 text-5xl md:text-6xl w-max ml-20">
              <DiHtml5 className="text-orange-600" />
              <DiCss3 className="text-blue-600" />
              <DiJavascript1 className="text-yellow-500" />
              <DiReact className="text-blue-500" />
              <DiNodejsSmall className="text-green-500" />
              <DiBootstrap className="text-purple-600" />
              <DiMongodb className="text-green-600" />
              <DiGithubBadge className="text-gray-600" />
              <RiNextjsLine className="text-black" />
              <RiTailwindCssLine className="text-sky-400" />
              <SiExpress className="text-gray-700" />
            </div>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
};

export default TechStack;
