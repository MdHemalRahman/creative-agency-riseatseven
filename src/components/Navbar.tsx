import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV = ["Services", "Industries", "International", "About", "Work", "Careers", "Blog & Resources", "Webinar"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--mint)] text-ink text-xs md:text-sm py-2 px-6 text-center font-medium tracking-wide">
        🏆 The Category Leaderboard — Live Now
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
        className={`fixed top-8 md:top-9 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-black/30" : ""
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 py-4 text-white">
          <a href="/" className="text-lg md:text-xl font-display font-bold tracking-tight" data-cursor>
            rise<span className="text-[var(--mint)]">.</span>seven
          </a>

          <ul className="hidden lg:flex items-center gap-7 text-sm">
            {NAV.map((item) => (
              <li key={item}>
                <a href="#" className="relative group" data-cursor>
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 bg-white text-ink rounded-full px-5 py-2.5 text-sm font-medium hover:bg-[var(--mint)] transition-colors" data-cursor>
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </button>
            <button onClick={() => setOpen(true)} className="lg:hidden p-2" aria-label="Menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-2xl text-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <span className="font-display font-bold text-lg">rise<span className="text-[var(--mint)]">.</span>seven</span>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="w-7 h-7" /></button>
            </div>
            <ul className="flex-1 flex flex-col justify-center gap-5">
              {NAV.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, ease: [0.2, 0.8, 0.2, 1] }}
                  className="font-display text-5xl font-bold tracking-tight"
                >
                  <a href="#" onClick={() => setOpen(false)}>{item}</a>
                </motion.li>
              ))}
            </ul>
            <button className="bg-[var(--mint)] text-ink rounded-full px-6 py-4 font-medium flex items-center justify-center gap-2">
              Get in Touch <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
