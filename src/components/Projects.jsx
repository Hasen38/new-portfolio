import React from "react";
import Ethio from "../assets/Ethio-travel.png";
import Pharma from "../assets/pharma1.png";
import Blog3 from "../assets/blog3.png";

import {
  FaGithub,
  FaReact,
  FaLaravel,
  FaStripe,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiInertia, SiFilament } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Ethio-travel",
      image: Ethio, // Add your project image
      description:
        "A full-stack Travel platform with real-time inventory, payment processing, and user authentication.",
      longDescription:
        "A travel platform that allows users to explore and book tours, view detailed destination information, and seamlessly plan their trips to Ethiopia.The site Features an intuitive interface for discovering packages and stripe payment payment processing with a focus on user experience and ease of navigation.",

      technologies: [
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <FaStripe />, name: "Stripe" },
      ],

      github: "https://github.com/hasen38/ethio-travel",
      // live: "https://your-ecommerce.com",
    },
    {
      title: "Pharmacy Inventory Management System",
      image: Pharma, // Add your project image
      description:
        "Analytics dashboard for inventory management with real-time data visualization.",

      longDescription:
        "Features include real-time analytics, customizable widgets, data export capabilities, and integration with multiple social media platforms.",
      technologies: [
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiFilament />, name: "Filament" },
      ],
      github: "https://github.com/hasen38/Pharmacy-inventory-system",
      // live: "https://your-dashboard.com",
    },
    {
      title: "Blog App",
      image: Blog3, // Add your project image
      description:
        "A platform for creating, managing, and publishing blog posts with a clean and intuitive interface.",

      longDescription:
        "An easy-to-use blog management system that allows users to write, edit, and organize blog posts, manage categories, and publish content seamlessly.",

      technologies: [
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <FaReact />, name: "React" },
        // { icon: <SiInertia />, name: "" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
      github: "https://github.com/hasen38/Blog-app",
      // live: "https://your-taskapp.com",
    },
  ];

  return (
    <div
      className="px-4 py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      id="projects"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 md:text-5xl">
            Recent Projects
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
            Explore my latest projects showcasing my skills in full-stack
            development, responsive design, and modern web technologies.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 shadow-lg rounded-xl bg-gray-800/50 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-[250px] sm:h-[300px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-6 text-gray-300">{project.longDescription}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 transition-colors rounded-full bg-gray-700/50 hover:bg-gray-700"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-white transition-all bg-gray-700 rounded-full hover:bg-blue-600"
                  >
                    <FaGithub className="text-xl" />
                    <span>View Code</span>
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-white transition-all bg-gray-700 rounded-full hover:bg-purple-600"
                  > */}
                    {/* <FaExternalLinkAlt className="text-xl" />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
