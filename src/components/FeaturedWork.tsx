import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const projects = [
  { name: "SIXT", years: "2023–2025", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80" },
  { name: "Dojo — B2B", years: "2021–2025", img: "https://images.unsplash.com/photo-1556742400-b5b7c5121f5b?w=1400&q=80" },
  { name: "Magnet Trade — B2B", years: "2023–2024", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=80" },
  { name: "Leading E Sim", years: "2023–2025", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80" },
  { name: "Parkdean Resorts", years: "2018–2022", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=80" },
  { name: "Pooky", years: "2020", img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=1400&q=80" },
  { name: "Revolution Beauty", years: "2022–2025", img: "https://images.unsplash.com/photo-1522335789203-aaa5e8c6c8b1?w=1400&q=80" },
  { name: "Lloyds Pharmacy", years: "2022–23", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1400&q=80" },
  { name: "Pretty Little Thing", years: "2019–2021", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80" },
];

export function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(projects.length - 1, Math.floor(v * projects.length));
      setActive(idx);
    });
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="bg-ink text-white grain relative" style={{ height: `${projects.length * 60}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col px-6 md:px-10 py-16 md:py-20 overflow-hidden">
        <div className="flex items-center justify-between mb-10 md:mb-16 max-w-[1600px] mx-auto w-full">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">— Featured Work</span>
          <a href="#" className="text-sm underline underline-offset-4" data-cursor>All projects</a>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-[1600px] mx-auto w-full flex-1">
          {/* Project list */}
          <ul className="font-display font-bold tracking-tighter leading-[0.95] text-[8vw] md:text-[5.2vw]">
            {projects.map((p, i) => (
              <li
                key={p.name}
                onMouseEnter={() => setActive(i)}
                className="cursor-pointer transition-all duration-500"
                data-cursor
                style={{
                  color: i === active ? "#fff" : "rgba(255,255,255,0.18)",
                  transform: i === active ? "translateX(8px)" : "translateX(0)",
                }}
              >
                {p.name}
                <sup className="text-xs md:text-sm font-sans tracking-normal align-super opacity-70 ml-2">
                  {p.years}
                </sup>
              </li>
            ))}
          </ul>

          {/* Sticky image */}
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[32px] overflow-hidden bg-white/5 hidden md:block">
            {projects.map((p, i) => (
              <motion.img
                key={p.name}
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{
                  opacity: i === active ? 1 : 0,
                  scale: i === active ? 1 : 1.08,
                }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              />
            ))}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-sm text-white/90">
              <span className="uppercase tracking-widest">{projects[active].name}</span>
              <span className="opacity-70">{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
