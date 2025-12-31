import { motion } from "framer-motion";
import { SiTailwindcss, SiBootstrap, SiCss3, SiJavascript, SiJquery, SiMysql, SiPostgresql } from "react-icons/si";
import { FaLaravel, FaPhp, FaGitAlt, FaGithub, FaServer, FaProjectDiagram, FaSitemap, FaWordpress, FaElementor } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
      { name: "CodeIgniter", icon: <DiCodeigniter className="text-orange-500" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },
      { name: "Visual Studio Code", icon: <img src="/vscode.svg" className="w-6 h-6" alt="VS Code" /> },
      { name: "Laragon", icon: <FaServer className="text-green-500" /> },
      { name: "Lucid.app", icon: <FaProjectDiagram className="text-purple-500" /> },
      { name: "Draw.io", icon: <FaSitemap className="text-blue-500" /> },
      { name: "WordPress", icon: <FaWordpress className="text-blue-500" /> },
      { name: "Elementor", icon: <FaElementor className="text-pink-500" /> },
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="bg-transparent text-gray-900 relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-400 mb-12"
        >
          Skills & Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 h-full flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
