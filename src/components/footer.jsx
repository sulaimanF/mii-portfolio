import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-300 py-8 px-6 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center flex flex-col items-center gap-3"
      >
        {/* Social Links */}
        <div className="flex gap-5 text-2xl text-purple-500 dark:text-purple-400">
          <a
            href="mailto:sulaimanfahmi6@gmail.com"
            className="hover:text-cyan-300 dark:hover:text-purple-200 transition-colors"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/sulaimanF"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 dark:hover:text-purple-200 transition-colors"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/fahmi-sulaiman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 dark:hover:text-purple-200 transition-colors"
          >
            <FiLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">
          &copy; {new Date().getFullYear()} sulaimanF. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );

}
