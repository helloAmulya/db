import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative flex flex-col justify-center px-6 md:px-20 overflow-hidden"
      style={{ minHeight: "calc(100vh - 80px)" }} // Adjusted for mobile
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-indigo-900 blur-3xl animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full bg-slate-800 blur-3xl animate-float2"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto py-12 md:py-24">
        {/* Main heading */}
        <motion.h1
          className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
            Hey, I'm Amulya
          </span>
        </motion.h1>

        {/* Animated subtitle */}
        <motion.div
          className="mt-4 md:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-lg md:text-xl font-mono text-slate-400">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Systems Architect",
                2000,
                "Problem Solver",
                2000,
                "Electronics Engineer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-slate-300"
            />
          </div>
        </motion.div>

        {/* Scroll indicator (desktop only) */}
        <motion.div
          className="hidden md:block mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5 h-8 border-2 border-indigo-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, 4, 0],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-2 bg-indigo-400 rounded-full mt-1"
              />
            </motion.div>
            <span className="text-xs text-indigo-300 mt-2">EXPLORE</span>
          </div>
        </motion.div>
      </div>

      {/* Mobile-only divider */}
      <div className="md:hidden border-t border-slate-700 w-full mt-8"></div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float1 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-10px, -10px) rotate(2deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        @keyframes float2 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(10px, 10px) rotate(-2deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        .animate-float1 {
          animation: float1 20s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 25s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default HeroSection;



