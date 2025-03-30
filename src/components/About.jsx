import React from "react";
import log from "../assets/log.jpg";
import { Brain, Divide, Code, Rotate3D } from "lucide-react";

const currentOngoings = [
  { icon: <Brain size={16} />, text: "Studying traditional Web-Dev" },
  {
    icon: <Divide size={16} />,
    text: "Learning react for Web-Dev",
  },
  { icon: <Code size={16} />, text: "Making the blog-works" },
  {
    icon: <Rotate3D size={16} />,
    text: "Getting used to with MongoDB & Firebase",
  },
];

function About() {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <div className="max-w-2xl w-full font-mono text-xs sm:text-sm md:text-sm font-normal text-foreground dark:text-white">
        <p className="text-left">Hi! I am Amulya.</p>

        <div className="w-full border border-transparent mt-8 mb-0 transition-colors duration-200"></div>

        <p className="text-left mt-4">
          I'm a Frontend Developer based in India. I love coffee, gaming, tech,
          and more. Glad to have you here! Feel free to look around :)
        </p>

        <div className="w-full border border-transparent mt-2 mb-0 transition-colors duration-200"></div>

        <p className="text-left mt-4">
          This is my graph of thoughts, notes, and ideas.
        </p>

        <div className="w-full border border-transparent mt-8 mb-0 transition-colors duration-200"></div>

        <p className="text-left mt-4">
          I ramble about things on my{" "}
          <a
            className="text-purple-500 font-bold hover:underline"
            href="https://blog-works.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog
          </a>
          ; you can check it out if you're interested.
        </p>

        <div className="w-full border border-transparent mt-8 mb-0 transition-colors duration-200"></div>

        {/* Bizmage Image */}
        <img src={log} alt="AboutImage" className="mt-4 " />

        {/* Current Ongoings Section */}
        <div className="flex flex-col mt-10">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-foreground dark:text-white text-left">
            Current Ongoings
          </h2>
          <div className="flex flex-col space-y-2 sm:space-y-4">
            {currentOngoings.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-purple-500">{item.icon}</div>
                <p className="text-xs sm:text-sm font-normal text-muted-foreground dark:text-gray-400 text-left">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-left">
          <h2 class="text-lg sm:text-xl md:text-xl lg:text-2xl __className_f88c93 font-bold mb-3 mt-5 text-foreground dark:text-white">
            Socials
          </h2>
          <p class="__className_0cdd3d text-xs sm:text-sm md:text-sm font-normal text-foreground dark:text-white text-left">
            I’m always open to chat! Please feel free to ping me at{" "}
            <a
              class="text-purple-500 hover:underline"
              href="mailto:sumit@sumit.ml"
            >
              ratna.amulya98@gmail.com
            </a>{" "}
            or{" "}
            <a
              class="text-purple-500 hover:underline"
              href="https://x.com/helloAmulya"
            >
              Twitter
            </a>{" "}
            if you have any questions or just wanna talk.
          </p>
        </div>
      </div>

      <div className="md:hidden mt-14 border-t-2 border-white w-full max-w-4xl mx-auto"></div>
    </div>
  );
}

export default About;
