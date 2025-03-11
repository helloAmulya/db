// import React from "react";
// import { FiExternalLink } from "react-icons/fi";
// import bizmage from "../assets/bizmage.png";
// import formed from "../assets/formed.png";
// import yder from "../assets/yder.png";

// function Content() {
//   const projects = [
//     {
//       title: "Bizman",
//       description:
//         "A React Project with Dashboard, Login & Signup functionality",
//       image: bizmage,
//       tech: "React, Node.js, TailwindCSS",
//       liveLink: "https://bizman.vercel.app/",
//       align: "right",
//     },
//     {
//       title: "Edutech Website",
//       description: "Educational Website to manage Clients",
//       image: formed,
//       tech: "HTML, TailwindCSS, JavaScript",
//       liveLink: "https://formedusite.vercel.app/",
//       align: "left",
//     },
//     {
//       title: "Yder",
//       description: (
//         <>
//           An Extension to download YouTube audios and videos separately.{" "}
//           <span className="bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent">
//             Hosted locally.
//           </span>
//         </>
//       ),
//       image: yder,
//       tech: "React.js, Express, Node.js",
//       liveLink: "https://yder.vercel.app/",
//       align: "right",
//     },
//   ];

//   return (
//     <div className="bg-black text-white font-grotesk">
//       {/* Hero Section */}
//       <section className="h-[60vh] mt-44 flex flex-col md:flex-row justify-between items-start px-6 md:px-20">
//         <div className="text-left">
//           <div className="font-black text-6xl md:text-[7vw] overflow-hidden">
//             Amulya Ratna
//           </div>
//           <p className="text-xl mt-4 animate-pulse">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-lime-400 to-gray-300">
//               "Building the future, one line of code at a time."
//             </span>
//           </p>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-6 md:px-20 mb-14">
//         <h2 className=" text-4xl md:text-6xl font-extrabold text-center mb-24 bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent relative">
//           Live Projects
//         </h2>

//         <div className="flex flex-col gap-24">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
//                 project.align === "right" ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               <div className="relative w-full md:w-[50%]">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className={`w-full rounded-2xl transition-transform duration-500 hover:scale-105 ${
//                     project.title === "Edutech Website"
//                       ? "shadow-[0px_0px_50px_rgba(0,200,255,0.9)]"
//                       : "shadow-[0px_0px_50px_rgba(0,200,255,0.9)]"
//                   }`}
//                 />
//               </div>

//               <div className="w-full md:w-1/2 text-white text-center md:text-left">
//                 <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
//                 <p className="text-gray-300 mb-4 text-lg leading-relaxed">
//                   {project.description}
//                 </p>
//                 <p className="text-gray-500 mb-6">Tech Stack: {project.tech}</p>
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-lime-400 to-gray-300 hover:from-gray-300 hover:to-lime-500 transition-all"
//                 >
//                   Visit <FiExternalLink className="ml-2 text-white" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Content;

import React from "react";
import { FiExternalLink } from "react-icons/fi";
import bizmage from "../assets/bizmage.png";
import formed from "../assets/formed.png";
import yder from "../assets/yder.png";

function Content() {
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
      <section className="h-[60vh] mt-44 flex flex-col md:flex-row justify-between items-start px-6 md:px-20">
        <div className="text-left">
          <div className="font-black text-6xl md:text-[7vw] overflow-hidden">
            Amulya Ratna
          </div>
          <p className="text-xl mt-4 animate-pulse">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-lime-400 to-gray-300">
              "Building the future, one line of code at a time."
            </span>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20 mb-14">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-24 bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent relative">
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
                  className={`w-full rounded-2xl transition-transform duration-500 hover:scale-105 ${
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
    </div>
  );
}

export default Content;
