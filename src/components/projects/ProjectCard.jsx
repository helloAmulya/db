// src/components/Projects/ProjectCard.jsx
import React from "react";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative group bg-gray-900/80 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
    >
      {/* Media container */}
      <div className="h-48 relative overflow-hidden">
        {project.mediaType === "image" ? (
          <img 
            src={project.media} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={project.media} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="space-y-2 w-full">
            {project.features?.map((feature, i) => (
              <span 
                key={i} 
                className="block text-xs bg-black/70 text-white px-3 py-1 rounded-full backdrop-blur-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-xs px-2 py-1 rounded-full bg-purple-900/80 text-purple-100 backdrop-blur-sm">
            {project.category}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-gray-100 backdrop-blur-sm">
            {project.date}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-purple-400">{project.role}</p>
          </div>
          <div className="flex space-x-2">
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Live Demo"
              >
                <FiExternalLink size={18} />
              </a>
            )}
            {project.codeLink && (
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="View Code"
              >
                <FiGithub size={18} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;