import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen
    bg-transparent
    text-gray-900
    relative
    pt-24 pb-24
    md:pt-0 md:pb-0
    flex md:items-center md:justify-center"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        {/* Image / Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex-shrink-0"
        >
          <div className="relative">
            <img
              src="/linkedin.jpg"
              alt="Fahmi Sulaiman"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover 
              border-4 border-purple-500/70 shadow-lg hover:shadow-xl 
              transition-all duration-500"
            />
            {/* Subtle soft ring */}
            <span className="absolute inset-0 rounded-full border border-purple-400/40 pointer-events-none"></span>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-400 tracking-wide">
            About Me
          </h2>

          <p className="text-lg text-gray-900 dark:text-gray-600 leading-relaxed mb-4">
            Hi, I’m{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-600">
                Fahmi Sulaiman
            </span>, a{" "}
            <span className="font-medium text-gray-900 dark:text-gray-600">
                Full Stack Developer
            </span>{" "}
            specializing in{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-600">
                Codeigniter & Javascript
            </span>
            . I enjoy building high-performance, real-time applications that combine
            clean architecture with modern. My experience includes
            multi-role platforms, scalable APIs, and delivering end-to-end solutions
            that solve real-world business challenges.
          </p>

          <p className="text-lg text-gray-900 dark:text-gray-600 leading-relaxed mb-6">
            I’m also passionate about{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-600">
                Programming
            </span>
            , ensuring every project is production-ready and maintainable. I stay
            curious, constantly exploring new tools and frameworks to create{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-600">
                efficient, scalable, and impactful solutions
            </span>
            . For me, development is not just about code, it’s about crafting digital
            experiences that make a difference.
          </p>

          <p className="text-lg font-medium text-gray-900 dark:text-gray italic">
            Let’s build something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
