import React from "react";
import picfit from "../assets/picfit.jpg";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="container px-4 py-20 mx-auto bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <div className="mb-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="relative text-4xl font-bold text-gray-800">
                <span className="relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-blue-500">
                  About Me
                </span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg leading-relaxed text-gray-700"
              >
               As a full-stack developer, I craft elegant, scalable web solutions
                that bridge creativity and functionality. My expertise spans from designing
                intuitive React interfaces styled with Tailwind CSS to architecting robust
                Laravel back-ends powered by MySQL.
              </motion.p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 overflow-hidden border-4 border-white rounded-full shadow-xl">
                <img
                  src={picfit}
                  alt="Profile"
                  className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.h3
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-4xl font-bold text-center"
          >
            <span className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              My Journey
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute left-0 -bottom-3 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </span>
          </motion.h3>

          <div className="relative max-w-4xl mx-auto px-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
              <div className="h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />
            </div>

            {[
              {
                year: "2019-2023",
                title: "Bachelor's Degree",
                description: "Graduated with a degree in Computer Science",
                icon: "",
                color: "from-blue-500 to-blue-600",
              },
              {
                year: "2022",
                title: "Internship",
                description: "Gained practical experience as a web developer intern",
                icon: "",
                color: "from-purple-500 to-purple-600",
              },
              {
                year: "2024",
                title: "Freelance",
                description: "Started freelancing, exploring new opportunities",
                icon: "",
                color: "from-pink-500 to-pink-600",
              },
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0
                    ? "pr-8 md:ml-auto md:pr-0 md:pl-8 md:w-1/2 md:text-right"
                    : "pl-8 md:mr-auto md:pr-8 md:w-1/2 md:text-left"
                }`}
              >
                <div
                  className={`relative ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } flex items-center gap-4`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-full shadow-lg`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </motion.div>

                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex-1 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 text-sm font-semibold bg-gradient-to-r ${item.color} text-white rounded-full`}>
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-24">
          <h3 className="mb-12 text-3xl font-bold text-center text-gray-800">
            <span className="relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:w-1/2 after:h-1 after:bg-blue-500">
              Skills
            </span>
          </h3>
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            <div className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <h4 className="mb-4 text-xl font-bold text-blue-600">Frontend</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>React.js
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>Redux
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>HTML/CSS
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>CSS
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>JavaScript
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <h4 className="mb-4 text-xl font-bold text-blue-600">Backend</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>Laravel
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>PHP
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>REST API
                </li>
                {/* <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>MongoDB
                </li> */}
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>MYSQL
                </li>
              </ul>
            </div>
            <div className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <h4 className="mb-4 text-xl font-bold text-blue-600">
                TOOLS & API'S
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>Git/GitHub
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>Docker
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>AWS
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>GitLab
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>Vscode
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="mb-12 text-3xl font-bold text-center text-gray-800">
            <span className="relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:w-1/2 after:h-1 after:bg-blue-500">
              Services
            </span>
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {/* <div className="p-8 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="mb-4 text-4xl text-blue-600">🎨</div>
              <h4 className="mb-4 text-xl font-bold text-gray-800">Design</h4>
              <p className="leading-relaxed text-gray-600">
                A key aspect of any project is the design. I believe that the
                design should be an integral part of the development process.
                With that in mind, I take the time to create visually appealing
                and user-friendly designs that enhance the user experience.
              </p>
            </div> */}
            <div className="p-8 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="mb-4 text-4xl text-blue-600">🚀</div>
              <h4 className="mb-4 text-xl font-bold text-gray-800">
                Development
              </h4>
              <p className="leading-relaxed text-gray-600">
                Full-stack web development with modern technologies and best
                practices. Creating responsive, scalable, and maintainable
                applications.
              </p>
            </div>
            <div className="p-8 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="mb-4 text-4xl text-blue-600">⚙️</div>
              <h4 className="mb-4 text-xl font-bold text-gray-800">
                Deployment
              </h4>
              <p className="leading-relaxed text-gray-600">
                Seamless deployment and configuration of applications using
                cloud platforms and CI/CD pipelines for optimal performance.
              </p>
            </div>
            <div className="p-8 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1">
              <div className="mb-4 text-4xl text-blue-600">🛠️</div>
              <h4 className="mb-4 text-xl font-bold text-gray-800">
                Maintenance
              </h4>
              <p className="leading-relaxed text-gray-600">
                Ongoing support, updates, and optimization of existing
                applications to ensure smooth operation and enhanced
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
