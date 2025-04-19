// src/components/Projects/ProjectsFilter.jsx
import React from "react";

const ProjectsFilter = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-4 py-2 text-sm rounded-full transition-all ${
            activeFilter === category
              ? "bg-purple-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilter;