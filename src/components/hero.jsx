import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-transparent text-gray-900 relative"
    >
      <div className="max-w-4xl px-6 pl-50 relative z-10 text-left">
        {/* Animated Intro */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-bold mb-4"
        >
          Hi, I’m{" "}
          <motion.span
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            className="text-purple-800 dark:text-purple-500"
          >
            Fahmi Sulaiman
          </motion.span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-700 mb-8 h-10"
        >
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "Backend Developer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={1500}
            loop
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="/Resume_Fahmi_Sulaiman.pdf"
            download="Fahmi-Sulaiman-Resume"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-purple-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-purple-500 transition"
          >
            <FiDownload /> Download Resume
          </motion.a>

          <motion.a
            href="https://github.com/sulaimanF"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-gray-400 dark:border-gray-500 px-6 py-3 rounded-2xl text-gray-900 dark:text-gray-700 hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-400 dark:hover:text-purple-400 transition"
          >
            <FiGithub /> GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/fahmi-sulaiman"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-gray-400 dark:border-gray-500 px-6 py-3 rounded-2xl text-gray-900 dark:text-gray-700 hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-400 dark:hover:text-purple-400 transition"
          >
            <FiLinkedin /> LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}