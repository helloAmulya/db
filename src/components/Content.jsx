// import React from "react";

// import { useNavigate } from "react-router-dom";
// import About from "./About";

// function Content() {
//   return (
//     <div className="bg-black text-white font-mono flex flex-col justify-center items-center max-w-full px-4">
//       <section className="h-[20vh] md:h-[27vh] mt-24 md:mt-10 flex flex-col md:flex-row justify-between items-start px-6 md:px-20">
//         <div>
//           <div className=" font-black text-5xl md:text-[5vw] overflow-hidden text-left">
//             <div>amulya.ratna</div>
//           </div>
//           <p className="text-sm md:text-xl mt-4 animate-pulse">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-gray-300">
//               "Building the future, one line of code at a time."
//             </span>
//           </p>

//           <div className=" md:hidden mt-14 border-t-2 border-white w-full max-w-4xl mx-auto"></div>
//         </div>
//       </section>

//       <About />
//     </div>
//   );
// }

// export default Content;


import React from "react";
import About from "./About";

function Content() {
  return (
    <div className="bg-black text-white font-mono flex flex-col justify-center max-w-full px-4">
      <section className="h-[20vh] md:h-[27vh] mt-24 md:mt-10 flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left px-6 md:px-20">
        <div>
          <div className="font-black text-5xl md:text-[5vw] overflow-hidden">
            <div>amulya.ratna</div>
          </div>
          <p className="text-sm md:text-xl mt-4 animate-pulse">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-gray-300">
              "Building the future, one line of code at a time."
            </span>
          </p>

          <div className="md:hidden mt-14 border-t-2 border-white w-full max-w-4xl mx-auto"></div>
        </div>
      </section>

      <About />
    </div>
  );
}

export default Content;
