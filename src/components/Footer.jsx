// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="relative pt-12 mt-6">
//       <div className="relative w-full mb-8">
//         <div className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent dark:via-purple-400/30"></div>
//       </div>

//       <div className="w-full max-w-screen-md mx-auto px-4 flex flex-col items-center gap-4 sm:gap-6 text-sm text-muted-foreground/60">
//         <div className="flex flex-wrap items-center justify-center gap-x-3">
//           <a
//             className="flex items-center gap-1 sm:gap-2 text-purple-500 hover:text-purple-400 text-[11px] sm:text-sm font-medium transition-all duration-200 ease-in-out hover:translate-y-[-1px] relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-purple-400 after:left-0 after:bottom-[-2px] after:transition-all after:duration-200 hover:after:w-full"
//             href="#top"
//           >
//             To the Top
//           </a>
//         </div>

//         <div className="flex items-center justify-center gap-6 sm:gap-8">
//           <div className="flex items-center gap-6">
//             <div tabIndex="0" style={{ opacity: 1, transform: "none" }}>
//               <a
//                 className="block text-purple-400/80 hover:text-purple-400 transition-all duration-200 -m-2 p-2 hover:bg-purple-400/10 rounded-md hover:shadow-md hover:shadow-purple-500/5"
//                 href="mailto:ratna.amulya98@gmail.com"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-mail w-3 h-3 sm:w-4 sm:h-4"
//                 >
//                   <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                 </svg>
//               </a>
//             </div>
//             <div tabIndex="0" style={{ opacity: 1, transform: "none" }}>
//               <a
//                 target="_blank"
//                 className="block text-purple-400/80 hover:text-purple-400 transition-all duration-200 -m-2 p-2 hover:bg-purple-400/10 rounded-md hover:shadow-md hover:shadow-purple-500/5"
//                 href="https://github.com/helloAmulya"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-github w-3 h-3 sm:w-4 sm:h-4"
//                 >
//                   <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
//                   <path d="M9 18c-4.51 2-5-2-7-2"></path>
//                 </svg>
//               </a>
//             </div>
//             <div tabIndex="0" style={{ opacity: 1, transform: "none" }}>
//               <a
//                 target="_blank"
//                 className="block text-purple-400/80 hover:text-purple-400 transition-all duration-200 -m-2 p-2 hover:bg-purple-400/10 rounded-md hover:shadow-md hover:shadow-purple-500/5"
//                 href="https://x.com/helloAmulya"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-twitter w-3 h-3 sm:w-4 sm:h-4"
//                 >
//                   <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <span
//             className="text-[10px] sm:text-xs text-purple-400"
//             style={{ opacity: 1 }}
//           >
//             © 2025 Amulya
//           </span>
//         </div>
//       </div>
//       <div className="h-8"></div>
//     </footer>
//   );
// }

// export default Footer;



import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Mail size={18} />,
      href: "mailto:ratna.amulya98@gmail.com",
      label: "Email"
    },
    {
      icon: <Github size={18} />,
      href: "https://github.com/helloAmulya",
      label: "GitHub"
    },
    {
      icon: <Twitter size={18} />,
      href: "https://x.com/helloAmulya",
      label: "Twitter"
    }
  ];

  return (
    <footer className="relative ">
      {/* Gradient divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8"
      />

      <div className="w-full max-w-screen-md mx-auto px-4 flex flex-col items-center gap-6">
        {/* Back to top link */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          href="#top"
          className="text-xs sm:text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors relative group"
        >
          Back to Top
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-400 group-hover:w-full transition-all duration-300" />
        </motion.a>

        {/* Social links */}
        <div className="flex items-center gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400/80 hover:text-purple-400 p-2 hover:bg-purple-400/10 rounded-md transition-all"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-purple-400/80"
        >
          © {new Date().getFullYear()} Amulya. All rights reserved.
        </motion.p>
      </div>
      
      <div className="h-8"></div>
    </footer>
  );
};

export default Footer;