// import React from "react";
// import { FiExternalLink } from "react-icons/fi";
// import formed from "../assets/formed.png";
// import yder from "../assets/yder.png";
// import gmage from "../assets/gmage.png";
// import { useNavigate } from "react-router-dom";
// import { Code, Layers, Database } from "lucide-react";

// function Projects() {
//   const navigate = useNavigate();
//   const projects = [
//     {
//       title: "Gmail Clone",
//       description: "A frontend Clone of Gmail",
//       image: gmage,
//       tech: "React, Node.js, Firebase",
//       liveLink: "https://clone-457b2.web.app/",
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
//       title: "GIFNOIR ",
//       description: "the GIF generator",
//       image: formed,
//       tech: "HTML, TailwindCSS, JavaScript",
//       liveLink: "https://formedusite.vercel.app/",
//       align: "left",
//     },
//     {
//       title: "Shopping Cart ",
//       description: "redux shopping cart",
//       image: formed,
//       tech: "HTML, TailwindCSS, JavaScript",
//       liveLink: "https://dshops.vercel.app/",
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

//     <div className="max-w-6xl mx-auto px-4">
//       <section
//         id="projects"
//         className="py-10 md:py-20 px-4 sm:px-6 md:px-10 mb-10 mt-10 md:mt-20"
//       >
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent">
//           Live Projects
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center sm:text-left gap-3 bg-transparent border border-white/50 sm:border-white p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition w-full max-w-xs mx-auto sm:max-w-sm"
//             >
//               <div className="relative w-full group">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   loading="lazy"
//                   className="w-full h-36 sm:h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105 shadow-sm sm:shadow-md shadow-white/40 sm:shadow-white/50"
//                 />
//               </div>

//               <h3 className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-2">
//                 {project.type === "frontend" && (
//                   <Code size={18} className="text-blue-400" />
//                 )}
//                 {project.type === "backend" && (
//                   <Database size={18} className="text-green-400" />
//                 )}
//                 {project.type === "fullstack" && (
//                   <Layers size={18} className="text-purple-400" />
//                 )}
//                 {project.title}
//               </h3>

//               <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
//                 {project.description}
//               </p>

//               <p className="text-gray-400 text-xs md:text-sm">
//                 Tech Stack: {project.tech}
//               </p>

//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-xs sm:text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-lime-400 to-gray-300 hover:from-gray-300 hover:to-lime-500 transition-all"
//               >
//                 Visit <FiExternalLink className="ml-2 text-white" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Projects;

// src/components/Projects/Projects.jsx
import React, { useState } from "react";
import { projects, projectCategories } from "./projects/projectsData";
import ProjectCard from "./projects/ProjectCard";
import ProjectsFilter from "./projects/ProjectFilter";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-b from-white via-white to-purple-400 bg-clip-text text-transparent">
          My Projects
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Here are some of my featured projects. Each one was built to solve
          specific problems and demonstrate different technical skills.
        </p>

        <ProjectsFilter
          categories={projectCategories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No projects found in this category.
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
