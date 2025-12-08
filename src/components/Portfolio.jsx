import { useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description:
      "Developed a responsive job portal using MERN stack and Vite for efficient job search and application management.",
    links: {
      site: "https://job-portal-frontend-five-henna.vercel.app/",
      github: "https://github.com/devtayyab04/job-portal-frontend",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description:
      "Atk Empire: Innovating web, mobile, and digital solutions with style and precision.",
    links: {
      site: "https://atkempire.vercel.app/",

      github: "https://github.com/devtayyab04/atk-empire-",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description:
      "Zeenaro is a stylish clothing brand website with a clean, responsive design for an engaging shopping experience.",
    links: {
      site: "https://zeenaro.up.railway.app/",
      github: "https://github.com/devtayyab04/zeenaro",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description:
      "Hukam Express – Fast, reliable parcel delivery with real-time tracking.",
    links: {
      site: "https://hukm-express.vercel.app/",
      github: "https://github.com/devtayyab04/hukm-express",
    },
  },
  {
    img: project5,
    title: "Project #5",
    description: "Responsive homepage project.",
    links: { site: "#", github: "https://github.com/devtayyab04/Academia.git" },
  },
  {
    img: project6,
    title: "Project #6",
    description: "Responsive homepage project.",
    links: { site: "#", github: "https://github.com/devtayyab04/Academia.git" },
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Portfolio = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340; // width + spacing
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      className="max-w-[1200px] mx-auto p-6 md:my-20 relative"
      id="portfolio"
    >
      <h2 className="text-3xl font-bold text-gray-200 mb-8 ml-5">
        Pro<span className="text-purple">jects</span>
      </h2>

      <div
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[280px] md:min-w-[320px] bg-gray-800 rounded-xl shadow-lg flex-shrink-0 hover:scale-105 transform transition duration-300 snap-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={cardVariants}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col justify-between h-45">
              <div className="max-w-[260px]">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href={project.links.site}
                  target="_blank"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 text-sm"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300 text-sm"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Keyboard-style buttons at bottom-right */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={() => scroll("left")}
          className="bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 shadow-md hover:bg-gray-800 transition font-mono"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 shadow-md hover:bg-gray-800 transition font-mono"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
