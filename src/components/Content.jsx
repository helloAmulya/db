/***************************** */
// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Cons from "./Cons";
// import log from "../assets/log.jpg";
// import {
//   Brain,
//   Divide,
//   Code,
//   Rotate3D,
//   Rocket,
//   Wrench,
//   Code2,
//   FlameKindling,
//   Mail,
//   Twitter,
// } from "lucide-react";

// const highlightItems = [
//   {
//     icon: <Rocket className="text-purple-400" size={20} />,
//     text: "Building full-stack web apps with React, Redux, Node.js, and MongoDB",
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     icon: <Wrench className="text-blue-400" size={20} />,
//     text: "Diving deep into backend — auth, JWT, REST APIs, Firebase, Mongoose",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     icon: <Code2 className="text-green-400" size={20} />,
//     text: "Loving clean code, dark UIs, and dev tooling (Powerlevel10k, iTerm, Git workflows)",
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     icon: <FlameKindling className="text-orange-400" size={20} />,
//     text: "Always learning — Docker, CI/CD, AWS on the radar",
//     color: "from-orange-500 to-red-500",
//   },
// ];

// const currentOngoings = [
//   {
//     icon: <Brain className="text-purple-400" size={18} />,
//     text: "Studying Electronics Engineering",
//   },
//   {
//     icon: <Divide className="text-blue-400" size={18} />,
//     text: "Learning traditional Web-Dev",
//   },
//   {
//     icon: <Code className="text-green-400" size={18} />,
//     text: "Making the AI-Humidifier",
//   },
//   {
//     icon: <Rotate3D className="text-orange-400" size={18} />,
//     text: "Getting used to with Vibe-Coding",
//   },
// ];

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// function Content() {
//   return (
//     <div className="bg-black text-white font-mono flex flex-col items-center max-w-full px-4">
//       {/* === Intro Heading === */}
//       {/* <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="h-[20vh] md:h-[27vh] mt-24 md:mt-10 flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left px-6 md:px-20"
//       >
//         <motion.div variants={fadeInVariants}>
//           <motion.div
//             className="font-black text-5xl md:text-[5vw] overflow-hidden"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
//               hey, i'm amulya.
//             </span>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             <p className="text-sm md:text-xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-gray-300">
//               building the future, one line of code at a time.
//             </p>
//           </motion.div>

//           <div className="md:hidden mt-14 border-t-2 border-white/30 w-full max-w-4xl mb-14 mx-auto"></div>
//         </motion.div>

//       </motion.section> */}

//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-20 overflow-hidden"
//       >
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden z-0">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl animate-float1"></div>
//           <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-900/20 blur-3xl animate-float2"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-60 h-60 rounded-full bg-pink-900/20 blur-3xl animate-float3"></div>
//         </div>

//         <motion.div
//           variants={fadeInVariants}
//           className="relative z-10 w-full max-w-4xl"
//         >
//           {/* Main heading with animated gradient */}
//           <motion.h1
//             className="font-black text-6xl md:text-8xl lg:text-[7vw] leading-tight"
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: 0.2,
//               type: "spring",
//               stiffness: 100,
//               damping: 10,
//             }}
//           >
//             <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
//               Hey, I'm Amulya
//             </span>
//           </motion.h1>

//           {/* Animated subtitle with typing effect */}
//           <motion.div
//             className="mt-6 md:mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             <div className="text-xl md:text-2xl font-mono text-gray-300">
//               <TypeAnimation
//                 sequence={[
//                   "Full-Stack Developer",
//                   2000,
//                   "Tech Enthusiast",
//                   2000,
//                   "Problem Solver",
//                   2000,
//                   "Continuous Learner",
//                   2000,
//                 ]}
//                 wrapper="span"
//                 cursor={true}
//                 repeat={Infinity}
//                 className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent"
//               />
//             </div>
//           </motion.div>

//           {/* Animated scroll indicator */}
//           <motion.div
//             className="mt-20 md:mt-24"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2 }}
//           >
//             <div className="flex flex-col items-center">
//               <motion.div
//                 animate={{
//                   y: [0, 10, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
//               >
//                 <motion.div
//                   animate={{
//                     y: [0, 5, 0],
//                     opacity: [1, 0.5, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="w-1 h-2 bg-purple-400 rounded-full mt-2"
//                 />
//               </motion.div>
//               <span className="text-xs text-purple-300 mt-2">SCROLL</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* CSS for animations */}
//         <style jsx>{`
//           @keyframes gradient-shift {
//             0% {
//               background-position: 0% 50%;
//             }
//             50% {
//               background-position: 100% 50%;
//             }
//             100% {
//               background-position: 0% 50%;
//             }
//           }
//           .animate-gradient-shift {
//             background-size: 200% 200%;
//             animation: gradient-shift 6s ease infinite;
//           }
//           @keyframes float1 {
//             0% {
//               transform: translate(0, 0) rotate(0deg);
//             }
//             50% {
//               transform: translate(-20px, -20px) rotate(5deg);
//             }
//             100% {
//               transform: translate(0, 0) rotate(0deg);
//             }
//           }
//           @keyframes float2 {
//             0% {
//               transform: translate(0, 0) rotate(0deg);
//             }
//             50% {
//               transform: translate(20px, 20px) rotate(-5deg);
//             }
//             100% {
//               transform: translate(0, 0) rotate(0deg);
//             }
//           }
//           @keyframes float3 {
//             0% {
//               transform: translate(0, 0) rotate(0deg);
//             }
//             50% {
//               transform: translate(15px, -15px) rotate(3deg);
//             }
//             100% {
//               transform: translate(0, 0) rotate(0deg);
//             }
//           }
//           .animate-float1 {
//             animation: float1 15s ease-in-out infinite;
//           }
//           .animate-float2 {
//             animation: float2 18s ease-in-out infinite;
//           }
//           .animate-float3 {
//             animation: float3 12s ease-in-out infinite;
//           }
//         `}</style>
//       </motion.section>

//       {/* <Cons/>      */}

//       {/* === Image === */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6 }}
//         className="mt-10"
//       >
//         <img
//           src={log}
//           alt="AboutImage"
//           className="rounded-xl w-full max-w-lg border border-gray-800 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
//         />
//       </motion.div>

//       {/* === Bio === */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="max-w-2xl w-full text-left mt-10 space-y-6 text-xs sm:text-sm text-gray-300 px-6 md:px-20"
//       >
//         <motion.p variants={fadeInVariants}>
//           I'm a frontend-focused full-stack developer from India. Started with
//           curiosity, now building real-world stuff to learn it for real.
//         </motion.p>
//         <motion.p className="text-left mb-4" variants={fadeInVariants}>
//           I've built a <span className="text-purple-400">Gmail clone</span>{" "}
//           using Firebase, a{" "}
//           <span className="text-blue-400">Redux shopping cart</span>, a{" "}
//           <span className="text-green-400">GIF generator</span> using Giphy API,
//           and I'm currently getting my hands dirty with backend:
//           <span className="text-orange-400">
//             {" "}
//             JWT, Express.js, MongoDB, Mongoose
//           </span>
//           , and making my own custom auth and CRUD APIs.
//         </motion.p>
//         <motion.p variants={fadeInVariants}>
//           I vibe with clean UIs, solo builds, and the occasional terminal setup
//           obsession. Currently rebuilding things from scratch with depth and
//           intent.
//         </motion.p>
//       </motion.div>

//       {/* === Focus Highlights === */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="max-w-2xl w-full mt-14 px-6 md:px-20"
//       >
//         <motion.h2
//           className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 text-white text-left"
//           variants={fadeInVariants}
//         >
//           <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//             Right now, I'm focused on:
//           </span>
//         </motion.h2>
//         <div className="flex flex-col space-y-4">
//           {highlightItems.map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex items-start gap-4 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
//               variants={fadeInVariants}
//               whileHover={{ x: 5 }}
//             >
//               <div className="p-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
//                 {item.icon}
//               </div>
//               <p className="text-sm text-gray-300 text-left flex-1">
//                 {item.text}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* === Current Ongoings === */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="max-w-2xl w-full mt-14 px-6 md:px-20"
//       >
//         <motion.h2
//           className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 text-white text-left"
//           variants={fadeInVariants}
//         >
//           <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
//             Current Ongoings
//           </span>
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {currentOngoings.map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-purple-500/30 transition-colors"
//               variants={fadeInVariants}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="shrink-0">{item.icon}</div>
//               <p className="text-sm text-gray-300 text-left">{item.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* === Socials === */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="max-w-2xl w-full mt-14 mb-20 px-6 md:px-20"
//       >
//         <motion.h2
//           className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold mb-4 text-white"
//           variants={fadeInVariants}
//         >
//           <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//             Ping me anytime
//           </span>
//         </motion.h2>
//         <motion.p
//           className="text-xs sm:text-sm md:text-sm font-normal text-gray-400 text-left mb-6"
//           variants={fadeInVariants}
//         >
//           You can reach out via email or Twitter. Always happy to connect, talk
//           dev, or just vibe.
//         </motion.p>

//         <motion.div className="flex gap-4" variants={fadeInVariants}>
//           <a
//             href="mailto:ratna.amulya98@gmail.com"
//             className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-colors text-sm text-gray-300 hover:text-white"
//           >
//             <Mail size={16} className="text-purple-400" />
//             Email
//           </a>
//           <a
//             href="https://x.com/helloAmulya"
//             className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-colors text-sm text-gray-300 hover:text-white"
//           >
//             <Twitter size={16} className="text-blue-400" />
//             Twitter
//           </a>
//         </motion.div>

//         <div className="md:hidden mt-14 border-t-2 border-white/30 w-full max-w-4xl mx-auto"></div>
//       </motion.div>
//     </div>
//   );
// }

// export default Content;
/***************************** */

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Cons from "./Cons";
import log from "../assets/log.jpg";
import {
  Brain,
  Divide,
  Code,
  Rotate3D,
  Rocket,
  Wrench,
  Code2,
  FlameKindling,
  Mail,
  Twitter,
} from "lucide-react";

const highlightItems = [
  {
    icon: <Rocket className="text-purple-400" size={20} />,
    text: "Building full-stack web apps with React, Redux, Node.js, and MongoDB",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Wrench className="text-blue-400" size={20} />,
    text: "Diving deep into backend — auth, JWT, REST APIs, Firebase, Mongoose",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Code2 className="text-green-400" size={20} />,
    text: "Loving clean code, dark UIs, and dev tooling (Powerlevel10k, iTerm, Git workflows)",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FlameKindling className="text-orange-400" size={20} />,
    text: "Always learning — Docker, CI/CD, AWS on the radar",
    color: "from-orange-500 to-red-500",
  },
];

const currentOngoings = [
  {
    icon: <Brain className="text-purple-400" size={18} />,
    text: "Studying Electronics Engineering",
  },
  {
    icon: <Divide className="text-blue-400" size={18} />,
    text: "Learning traditional Web-Dev",
  },
  {
    icon: <Code className="text-green-400" size={18} />,
    text: "Making the AI-Humidifier",
  },
  {
    icon: <Rotate3D className="text-orange-400" size={18} />,
    text: "Getting used to with Vibe-Coding",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Content() {
  return (
    <div className="bg-black text-white flex flex-col items-center max-w-full px-4">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full flex flex-col items-center pt-16 pb-8 md:pt-24 md:pb-16 px-4"
      >
        {/* Main heading - smaller on mobile */}
        <motion.h1
          className="font-bold text-4xl md:text-6xl lg:text-7xl text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-b from-white via-white to-purple-400 bg-clip-text text-transparent">
            Hey, I'm Amulya
          </span>
        </motion.h1>

        {/* Animated subtitle */}
        <motion.div
          className="text-lg md:text-xl text-slate-300 mb-8 md:mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Tech Adadptable",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </motion.div>

        {/* Profile image - appears below heading on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-md mb-8 md:mb-12"
        >
          <img
            src={log}
            alt="Profile"
            className="rounded-xl w-full border border-gray-800 shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-2xl w-full px-4 md:px-8 mb-16"
      >
        <motion.p variants={fadeInVariants} className="text-gray-300 mb-4">
          I'm a frontend-focused full-stack developer from India. Started with
          curiosity, now building real-world solutions with modern technologies.
        </motion.p>

        <motion.p variants={fadeInVariants} className="text-gray-300 mb-4">
          I've built a <span className="text-blue-400">Gmail clone</span> using
          Firebase, a{" "}
          <span className="text-purple-400">Redux shopping cart</span>, and a{" "}
          <span className="text-green-400">GIF generator</span> using Giphy API.
          Currently mastering backend technologies including{" "}
          <span className="text-orange-400">
            {" "}
            JWT, Express.js <span className="text-white">and</span> MongoDB.
          </span>
        </motion.p>

        <motion.p variants={fadeInVariants} className="text-gray-300">
          Passionate about clean code, intuitive UIs, and continuous learning.
        </motion.p>
      </motion.section>

      {/* Focus Highlights */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-2xl w-full px-4 md:px-8 mb-16"
      >
        <motion.h2
          variants={fadeInVariants}
          className="text-2xl font-bold mb-6 text-white"
        >
          <span className="bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">
            Right now, I'm focusing
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlightItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              className="p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-colors"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-blue-400 mt-0.5">{item.icon}</div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Current Ongoings */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-2xl w-full px-4 md:px-8 mb-16"
      >
        <motion.h2
          variants={fadeInVariants}
          className="text-2xl font-bold mb-6 text-white"
        >
          <span className="bg-gradient-to-l from-white via-white to-purple-400 bg-clip-text text-transparent">
            Current Ongoings
          </span>
        </motion.h2>

        <div className="space-y-3">
          {currentOngoings.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-colors"
            >
              <div className="text-indigo-400">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Social Links Section */}
      {/* <motion.section
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
  className="max-w-2xl w-full px-4 md:px-8 mb-20"
>
  <motion.h2
    variants={fadeInVariants}
    className="text-2xl font-bold mb-4 text-white"
  >
    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      Ping Me Anytime
    </span>
  </motion.h2>

  <motion.p 
    variants={fadeInVariants} 
    className="text-gray-400 mb-6 text-sm md:text-base"
  >
    Have a question or want to collaborate? I'm just a message away.
  </motion.p>

  <motion.div 
    variants={fadeInVariants} 
    className="flex flex-wrap gap-3"
  >
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href="mailto:ratna.amulya98@gmail.com"
      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700/80 transition-all border border-gray-700 hover:border-purple-400/30"
    >
      <Mail size={18} className="text-purple-400" />
      <span>Email</span>
    </motion.a>
    
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href="https://x.com/helloAmulya"
      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700/80 transition-all border border-gray-700 hover:border-blue-400/30"
    >
      <Twitter size={18} className="text-blue-400" />
      <span>Twitter</span>
    </motion.a>
  </motion.div>
        </motion.section> */}
      <div className="max-w-2xl w-full mt-10 mb-20 px-6 md:px-8">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-2xl sm:text-2xl md:text-xl lg:text-2xl font-bold mb-3 text-white  "
        >
          <span className="bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
            Ping me anytime
          </span>
        </motion.h2>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-sm sm:text-sm md:text-[17px] text-gray-400 text-left mb-4 "
        >
          You can reach out via{" "}
          <motion.a
            whileHover={{ y: -1 }}
            href="mailto:ratna.amulya98@gmail.com"
            className="text-purple-400 hover:underline"
          >
            email
          </motion.a>{" "}
          or say hi on{" "}
          <motion.a
            whileHover={{ y: -1 }}
            href="https://x.com/helloAmulya"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </motion.a>
          . Always happy to connect, talk dev, or just vibe.
        </motion.p>

        {/* Mobile divider - kept from original */}
        <div className="md:hidden mt-14 border-t-2 border-white/30 w-full max-w-4xl mx-auto"></div>
      </div>
    </div>
  );
}

export default Content;
