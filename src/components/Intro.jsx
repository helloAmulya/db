// import React from "react";
// import {
//   TerminalSquare,
//   Rocket,
//   Wrench,
//   Code2,
//   FlameKindling,
// } from "lucide-react";

// const highlightItems = [
//   {
//     icon: <Rocket size={18} />,
//     text: "Building full-stack web apps with React, Redux, Node.js, and MongoDB",
//   },
//   {
//     icon: <Wrench size={18} />,
//     text: "Diving deep into backend — auth, JWT, REST APIs, Firebase, Mongoose",
//   },
//   {
//     icon: <Code2 size={18} />,
//     text: "Loving clean code, dark UIs, and dev tooling (Powerlevel10k, iTerm, Git workflows)",
//   },
//   {
//     icon: <FlameKindling size={18} />,
//     text: "Always learning — Docker, CI/CD, AWS on the radar",
//   },
// ];

// function Intro() {
//   return (
//     <div className="bg-black text-white font-mono flex flex-col justify-center items-center px-4">
//       <section className="h-[20vh] md:h-[27vh] mt-24 md:mt-10 flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left px-6 md:px-20">
//         <div>
//           <div className="font-black text-5xl md:text-[5vw] overflow-hidden">
//             <div>hey, i'm amulya.</div>
//           </div>
//           <p className="text-sm md:text-xl mt-4 animate-pulse">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-gray-300">
//               building the future, one line of code at a time.
//             </span>
//           </p>

//           <div className="md:hidden mt-14 border-t-2 border-white w-full max-w-4xl mb-14 mx-auto"></div>
//         </div>
//       </section>

//       <div className="max-w-2xl w-full font-mono text-xs sm:text-sm md:text-sm font-normal text-foreground dark:text-white px-6 md:px-20">
//         <p className="text-left mb-4">
//           I'm a frontend-focused full-stack developer from India. My journey
//           started with curiosity, and now I’m deep into crafting real-world apps
//           — not just for fun, but to truly understand the craft.
//         </p>

//         <p className="text-left mb-4">
//           I’ve built a Gmail clone using Firebase, a Redux shopping cart, a GIF
//           generator using Giphy API, and I’m currently getting my hands dirty
//           with backend: JWT, Express.js, MongoDB, Mongoose, and making my own
//           custom auth and CRUD APIs.
//         </p>

//         <p className="text-left mb-4">
//           Outside of code, I vibe with coffee ☕, gaming 🎮, and clean terminal
//           setups. Currently obsessed with dark themes, powerline terminals, and
//           keeping my workflow minimal and sharp.
//         </p>

//         <div className="mt-8">
//           <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-foreground dark:text-white text-left">
//             Right now, I'm focused on:
//           </h2>
//           <div className="flex flex-col space-y-2 sm:space-y-4">
//             {highlightItems.map((item, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 <div className="text-purple-500">{item.icon}</div>
//                 <p className="text-xs sm:text-sm font-normal text-muted-foreground dark:text-gray-400 text-left">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="text-left mt-8">
//           <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold mb-3 text-foreground dark:text-white">
//             Ping me anytime
//           </h2>
//           <p className="text-xs sm:text-sm md:text-sm font-normal text-foreground dark:text-white text-left">
//             You can reach out via{" "}
//             <a
//               href="mailto:ratna.amulya98@gmail.com"
//               className="text-purple-500 hover:underline"
//             >
//               email
//             </a>{" "}
//             or say hi on{" "}
//             <a
//               href="https://x.com/helloAmulya"
//               className="text-purple-500 hover:underline"
//             >
//               Twitter
//             </a>
//             . Always happy to connect, talk dev, or just vibe.
//           </p>
//         </div>

//       </div>

//       <div className="md:hidden mt-14 border-t-2 border-white w-full max-w-4xl mx-auto"></div>
//     </div>
//   );
// }

// export default Intro;
