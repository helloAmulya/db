import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/helloAmulya" },
    { name: "Twitter", url: "https://twitter.com/helloAmulya" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/helloAmulya" },
  ];

  return (
    <footer className="bg-black text-white p-4 font-grotesk">
      <div className="flex justify-between items-end">
        <h2
          className="cursor-pointer font-bold self-end"
          onClick={() => navigate("/")}
        >
          @DB
        </h2>
        <h3 className="pt-2">Based in India</h3>

        <div className="flex flex-col items-center space-y-2">
          <ul className="text-center space-y-2">
            {socialLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition duration-300 text-white text-lg"
                >
                  {link.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
