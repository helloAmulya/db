import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    {
      name: location.pathname === "/resume" ? "Home" : "Resume",
      path: location.pathname === "/resume" ? "/" : "/resume",
    },
  ];

  return (
    <nav className="bg-black w-full text-white font-grotesk font-bold p-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="cursor-pointer" onClick={() => navigate("/")}>
          DB
        </h2>

        <ul className="hidden md:flex flex-row space-x-6">
          {menuItems.map((item, index) => (
            <li key={index} className="cursor-pointer group">
              {item.id ? (
                <span
                  onClick={() =>
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {item.name}
                </span>
              ) : (
                <button onClick={() => navigate(item.path)}>{item.name}</button>
              )}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-400"></span>
            </li>
          ))}
        </ul>

        <button
          className="border p-2 hover:bg-lime-400 hover:text-black transition-all duration-300"
          onClick={() =>
            navigate(location.pathname === "/contact" ? "/" : "/contact")
          }
        >
          {location.pathname === "/contact" ? "Home" : "Get in Touch"}
        </button>
      </div>
    </nav>
  );
}

export default Header;
