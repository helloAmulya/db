// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

// function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const menuItems = [
//     { name: "About", id: "about" },
//     { name: "Projects", id: "projects" },
//     {
//       name: location.pathname === "/resume" ? "Home" : "Resume",
//       path: location.pathname === "/resume" ? "/" : "/resume",
//     },
//   ];

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     }
//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [menuOpen]);

//   return (
//     <nav className="flex justify-between items-center p-4 relative">
//       {/* Desktop Navigation */}
//       <div className="hidden sm:flex items-center gap-6">
//         {menuItems.map((item, index) => (
//           <span
//             key={index}
//             onClick={() =>
//               item.id
//                 ? document
//                     .getElementById(item.id)
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 : navigate(item.path)
//             }
//             // className="relative text-sm text-gray-300 hover:text-purple-500 transition-colors duration-200 cursor-pointer"
//             className="relative text-sm text-gray-300 hover:text-purple-500 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-purple-500 after:left-0 after:bottom-[-2px] after:transition-all after:duration-200 hover:after:w-full cursor-pointer"
//           >
//             {item.name}
//           </span>
//         ))}
//       </div>

//       <div className="sm:hidden relative">
//         <button
//           className="text-gray-300 hover:text-purple-500 transition-colors duration-200 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <FiMenu size={28} />
//         </button>

//         {menuOpen && (
//           <div
//             ref={menuRef}
//             className="absolute left-0 top-12 bg-gray-900/90 rounded-xl p-4 w-48 shadow-lg backdrop-blur-md border border-gray-800 z-50"
//           >
//             <button
//               className="absolute top-2 right-2 bg-purple-500/80 p-1 rounded-full hover:bg-purple-500 transition"
//               onClick={() => setMenuOpen(false)}
//             >
//               <FiX size={20} className="text-white" />
//             </button>

//             <div className="flex flex-col space-y-3 mt-6">
//               {menuItems.map((item, index) => (
//                 <span
//                   key={index}
//                   onClick={() => {
//                     setMenuOpen(false);
//                     item.id
//                       ? document
//                           .getElementById(item.id)
//                           ?.scrollIntoView({ behavior: "smooth" })
//                       : navigate(item.path);
//                   }}
//                   className="text-gray-200 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
//                 >
//                   {item.name}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <button
//         className=" text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200"
//         onClick={() =>
//           navigate(location.pathname === "/contact" ? "/" : "/contact")
//         }
//       >
//         {location.pathname === "/contact" ? "Home" : "Get in Touch"}
//       </button>
//     </nav>
//   );
// }

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { name: "About", id: "about" },
    {
      name: location.pathname === "/projects" ? "Home" : "Projects",
      path: location.pathname === "/projects" ? "/" : "/projects",
    },
    {
      name: location.pathname === "/resume" ? "Home" : "Resume",
      path: location.pathname === "/resume" ? "/" : "/resume",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="flex md:justify-evenly justify-between items-center p-4 relative md:gap-x-6 md:mt-10 mt-6">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-6">
        {menuItems.map((item, index) => (
          <span
            key={index}
            onClick={() =>
              item.id
                ? document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                : navigate(item.path)
            }
            className="relative text-sm text-gray-300 hover:text-purple-500 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-purple-500 after:left-0 after:bottom-[-2px] after:transition-all after:duration-200 hover:after:w-full cursor-pointer"
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="sm:hidden relative">
        <button
          className="text-gray-300 hover:text-purple-500 transition-colors duration-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu size={28} />
        </button>

        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute left-0 top-12 bg-gray-900/90 rounded-xl p-4 w-48 shadow-lg backdrop-blur-md border border-gray-800 z-50"
          >
            <button
              className="absolute top-2 right-2 bg-purple-500/80 p-1 rounded-full hover:bg-purple-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              <FiX size={20} className="text-white" />
            </button>

            <div className="flex flex-col space-y-3 mt-6">
              {menuItems.map((item, index) => (
                <span
                  key={index}
                  onClick={() => {
                    setMenuOpen(false);
                    item.id
                      ? document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" })
                      : navigate(item.path);
                  }}
                  className="text-gray-200 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        className=" text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200"
        onClick={() =>
          navigate(location.pathname === "/contact" ? "/" : "/contact")
        }
      >
        {location.pathname === "/contact" ? "Home" : "Get in Touch"}
      </button>
    </nav>
  );
}

export default Header;
