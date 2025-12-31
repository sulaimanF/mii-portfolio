import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true); // scroll down → hide
      } else {
        setHidden(false); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <a
              href="#hero"
              className="text-xl font-bold text-purple-600"
            >
              sulaimanF<span className="text-gray-700 dark:text-gray-300">.</span>
            </a>

            {/* Menu */}
            <ul className="flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="relative hover:text-purple-600 transition
                      after:content-[''] after:absolute after:-bottom-1 after:left-0
                      after:w-0 after:h-px after:bg-purple-600
                      hover:after:w-full after:transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
