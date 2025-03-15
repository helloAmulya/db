import React from "react";
import { FiExternalLink } from "react-icons/fi";
import bizmage from "../assets/bizmage.png";
import formed from "../assets/formed.png";
import yder from "../assets/yder.png";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Bizman",
      description:
        "A React Project with Dashboard, Login & Signup functionality",
      image: bizmage,
      tech: "React, Node.js, TailwindCSS",
      liveLink: "https://bizman.vercel.app/",
      align: "right",
    },
    {
      title: "Edutech Website",
      description: "Educational Website to manage Clients",
      image: formed,
      tech: "HTML, TailwindCSS, JavaScript",
      liveLink: "https://formedusite.vercel.app/",
      align: "left",
    },
    {
      title: "Yder",
      description: (
        <>
          An Extension to download YouTube audios and videos separately.{" "}
          <span className="bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent">
            Hosted locally.
          </span>
        </>
      ),
      image: yder,
      tech: "React.js, Express, Node.js",
      liveLink: "https://yder.vercel.app/",
      align: "right",
    },
  ];

  return (
    <div className="bg-black text-white font-grotesk">
      {/* Hero Section */}
      <section className="h-[35vh] md:h-[57vh] mt-44 flex flex-col md:flex-row justify-between items-start px-6 md:px-20">
        <div className="text-left">
          <div class=" font-black text-6xl md:text-[8vw] overflow-hidden">
            <div class="name ">Amulya Ratna</div>
          </div>
          <p className="text-xl mt-4 animate-pulse">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-lime-400 to-gray-300">
              "Building the future, one line of code at a time."
            </span>
          </p>

          <div className=" md:hidden mt-14 border-t-2 border-white w-full max-w-4xl mx-auto"></div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className=" md:py-20 px-6 md:px-20 md:mb-36 ">
        <h2 className="hidden md:block animate-gradientMove text-5xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-xl text-gray-300 leading-relaxed text-center md:text-left max-w-4xl mx-auto">
          I am a passionate{" "}
          <span className="text-blue-400 font-semibold">
            Full-Stack Developer
          </span>{" "}
          who loves solving real-world problems through code. With experience in{" "}
          <span className="text-[#58C4DC] font-semibold">React</span>,{" "}
          <span className="text-[#84BA64] font-semibold">Node.js</span>, and{" "}
          building <span className="font-bold animate-glow">scalable</span> and{" "}
          <span className="font-bold animate-glow">user-friendly</span>{" "}
          applications.
        </p>

        <div className="mt-12 flex  flex-wrap justify-center gap-4 md:gap-6">

          {[
            { name: "React", gradient: "from-blue-400 to-cyan-300" },
            { name: "Node.js", gradient: "from-green-400 to-lime-300" },
            { name: "Express", gradient: "from-gray-500 to-gray-300" },
            { name: "TailwindCSS", gradient: "from-teal-400 to-blue-300" },
            { name: "JavaScript", gradient: "from-yellow-400 to-orange-300" },
            { name: "MongoDB", gradient: "from-green-500 to-emerald-300" },
          ].map((skill, index) => (
            <div
              key={index}
              className={`text-base md:text-lg font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r ${skill.gradient}`}
            >
              {skill.name}
            </div>
          ))}
        </div>

        <div className="mt-14 border-t-2 border-white w-full max-w-4xl mx-auto"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 md:py-20 px-6 md:px-20 mb-14">
        <h2 className="text-5xl animate-gradientMove md:text-6xl font-extrabold text-center mb-24 bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent relative">
          Live Projects
        </h2>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                project.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative w-full md:w-[50%]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full rounded-2xl transition-transform duration-500 hover:scale-105  ${
                    project.title === "Edutech Website"
                      ? "shadow-[0px_0px_50px_rgba(0,200,255,0.9)]"
                      : "shadow-[0px_0px_30px_rgba(0,173,181,0.7)]"
                  }`}
                />
              </div>

              <div className="w-full md:w-1/2 text-white text-center md:text-left">
                <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  {project.description}
                </p>
                <p className="text-gray-500 mb-6">Tech Stack: {project.tech}</p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-lime-400 to-gray-300 hover:from-gray-300 hover:to-lime-500 transition-all"
                >
                  Visit <FiExternalLink className="ml-2 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* resume button */}
      <div className="w-full px-6 md:px-20 text-left">
        <div className="inline-block md:hidden">
          <button
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-white to-lime-400 bg-clip-text text-transparent animate-gradientMove"
            onClick={() => navigate("/resume")}
          >
            Resume
          </button>
          <div className="md:hidden border-t-2 border-white mt-4 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
