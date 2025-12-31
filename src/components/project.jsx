import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "e-Procurement",
    description:
      "A web-based e-Procurement application designed to digitalize the procurement process of goods and services, covering vendor management, approval workflows, evaluation, and integrated reporting.",
    tech: ["PHP", "Codeigniter", "Bootstrap", "Javascript", "Jquery", "MySQL"],
    // link: "",
    live_link: "https://e-proc.kalbe.co.id/PurcApp",
  },
  {
    title: "Laptop Inventory",
    description:
      "Developed a laptop inventory management system with authentication, a dashboard, CRUD operations, and status tracking.",
    tech: ["PHP", "Codeigniter", "Bootstrap", "Javascript", "Jquery", "MySQL"],
    link: "https://github.com/sulaimanF/inventaris",
  },
  {
    title: "Event Registration",
    description:
      "Developed an event registration system for dealer consumers featuring real-time tracking of registered attendees, actual arrivals, and consumer attendance grouped by Sales Head.",
    tech: ["PHP", "Codeigniter", "Bootstrap", "Javascript", "Jquery", "MySQL"],
    link: "https://github.com/sulaimanF/registrasi-event",
  },
  {
    title: "Company Profile Cinta Damai Group",
    description:
      "Built a company profile website for Cinta Damai Group to showcase the corporate profile and subsidiaries, including PT Cinta Damai Putra Bahagia, PT Eiyu Damai Sejahtera, and PT Akbar Mandiri Sejahtera.",
    tech: ["Laravel", "Bootstrap", "Javascript", "MySQL"],
    link: "https://github.com/sulaimanF/cintadamaigroup",
    live_link: "https://cintadamaigroup.com",
  },
  {
    title: "Company Profile Honda Eiyu",
    description:
      "Developed a company profile website for PT Eiyu Damai Sejahtera to present corporate information and services professionally.",
    tech: ["WordPress", "Elementor", "Divi"],
    live_link: "https://honda-eiyu.com",
  },
  {
    title: "Company Profile Hyundai Mandiri",
    description:
      "Developed a company profile website for PT Akbar Mandiri Sejahtera to present corporate information and services professionally.",
    tech: ["WordPress", "Elementor", "Divi"],
    live_link: "https://hyundaimandiri.com",
  },
  {
    title: "Auto Customer",
    description:
      "A web-based application for managing consumer databases with authentication, dashboard, and Excel upload functionality.",
    tech: ["PHP", "Codeigniter", "Bootstrap", "Javascript", "Jquery", "MySQL"],
    // link: "https://github.com/PraveenS-dev/mern-secure-crud-app",
  },
  {
    title: "Lapkin SP",
    description:
      "A web-based toll road report management system that enables real-time monitoring of approval status, verification status, and report ownership, featuring authentication, dashboard, and full CRUD operations.",
    tech: ["PHP", "Codeigniter", "Bootstrap", "Javascript", "Jquery", "MySQL"],
    // link: "https://github.com/PraveenS-dev/mern-secure-crud-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-transparent text-gray-900 relative pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-gray-400 mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {/* Always show GitHub */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:underline"
                  >
                    <FiGithub /> Code
                  </a>
                  {/* Show Live only if it exists */}
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                    >
                      <Globe className="text-lg" /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
