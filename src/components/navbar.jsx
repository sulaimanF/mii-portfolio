import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
        setMenuOpen(false); // auto close menu saat scroll
      } else {
        setHidden(false);
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
          className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <a href="#hero" className="text-xl font-bold text-purple-600">
              sulaimanF<span className="text-gray-700 dark:text-gray-300">.</span>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
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

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl text-gray-700 dark:text-gray-300"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 flex flex-col gap-4 text-gray-700 dark:text-gray-300"
              >
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 border-b border-gray-200 dark:border-gray-700 hover:text-purple-600 transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
