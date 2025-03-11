import React from "react";
import { FiDownload } from "react-icons/fi";
import resumePDF from "../assets/resume.pdf";
import resumeImage from "../assets/resume.png";

function Resume() {
  return (
    <div className="bg-black text-white font-grotesk p-10 md:p-20 text-center">
      {/* <h1 className="text-6xl font-extrabold mb-10 bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent">
        Resume
      </h1> */}

      <div className="flex justify-center">
        <img
          src={resumeImage}
          alt="Resume Preview"
          className="w-full md:w-3/4 lg:w-3/5 rounded-xl shadow-lg transition-transform "
        />
      </div>

      <div className="mt-8">
        <a
          href={resumePDF}
          download="Amulya_Ratna_Resume.pdf"
          className="inline-flex items-center px-6 py-3 text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          Download <FiDownload className="ml-2 text-white" />
        </a>
      </div>
    </div>
  );
}

export default Resume;
