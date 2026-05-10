import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = ["We", "Create", "Category", "Leaders"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-ink text-white">
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,255,225,0.08),transparent_60%)]" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--mint)] mb-8"
        >
          ★ Awwwards Agency of the Year 2025
        </motion.p>

        <h1 className="font-display font-bold text-[15vw] md:text-[10vw] leading-[0.85] tracking-tighter max-w-[1400px]">
          {words.map((w, i) => (
            <span key={w} className="reveal-mask mr-[0.15em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.2 + i * 0.12, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.0, duration: 1 }}
          className="mt-8 text-lg md:text-2xl text-white/70 font-light"
        >
          on every searchable platform.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between text-[10px] md:text-xs uppercase tracking-widest text-white/50">
        <span>EST. 2020 — Sheffield · London · NYC</span>
        <span className="hidden md:inline">Scroll to explore ↓</span>
        <span>©  2025</span>
      </div>
    </section>
  );
}
