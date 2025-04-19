// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Home, Mail } from "lucide-react";
// import { motion } from "framer-motion";
// function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const menuItems = [
//     // { name: location.pathname === "/intro" ? "Home" : "About",
//     //   path: location.pathname === "/intro" ? "/" : "/intro",

//     // },
//     {
//       name: location.pathname === "/projects" ? "Home" : "Projects",
//       path: location.pathname === "/projects" ? "/" : "/projects",
//     },
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
//     <nav className="flex md:justify-evenly justify-between items-center p-4 relative md:gap-x-6 md:mt-10 mt-6">
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

//       {/* <button
//         className=" text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200"
//         onClick={() =>
//           navigate(location.pathname === "/contact" ? "/" : "/contact")
//         }
//       >
//         {location.pathname === "/contact" ? "Home" : "Get in Touch"}
//       </button> */}
//       <motion.button
//         whileHover={{ y: -3 }}
//         whileTap={{ scale: 0.98 }}
//         className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-blue-500/20 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all"
//         onClick={() =>
//           navigate(location.pathname === "/contact" ? "/" : "/contact")
//         }
//       >
//         {location.pathname === "/contact" ? (
//           <>
//             <Home size={20} className="text-purple-400" />
//             <span className="font-medium">Home</span>
//           </>
//         ) : (
//           <>
//             <Mail size={20} className="text-blue-400" />
//             <span className="font-medium">Get in Touch</span>
//           </>
//         )}
//       </motion.button>
//     </nav>
//   );
// }

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Home, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center p-4 md:p-6 relative max-w-6xl mx-auto gap-4"
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => navigate(item.path)}
              className="relative text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors"
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-500"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden w-full flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-purple-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu size={28} />
        </motion.button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            ref={menuRef}
            className="md:hidden fixed top-16 right-4 left-4 py-4 px-4 border border-blue-500/20 hover:border-blue-500/50 z-50  bg-gray-900/95 rounded-xl p-4 w-56 shadow-xl backdrop-blur-md"
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-3 px-3 cursor-pointer text-white hover:bg-gray-100 rounded-md flex items-center"
                  onClick={() => {
                    navigate(item.path);
                    setMenuOpen(false);
                  }}
                >
                  {item.name === "Home" && <Home className="h-4 w-4 mr-2" />}
                  {item.name}
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 px-3 cursor-pointer text-white hover:bg-gray-100 rounded-md flex items-center"
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Contact Button */}
      <motion.button
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-blue-500/20 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all"
        onClick={() =>
          navigate(location.pathname === "/contact" ? "/" : "/contact")
        }
      >
        {location.pathname === "/contact" ? (
          <>
            <Home size={18} className="text-purple-400" />
            <span className="text-sm font-medium">Home</span>
          </>
        ) : (
          <>
            <Mail size={18} className="text-blue-400" />
            <span className="text-sm font-medium">Contact</span>
          </>
        )}
      </motion.button>
    </motion.nav>
  );
}

export default Header;
