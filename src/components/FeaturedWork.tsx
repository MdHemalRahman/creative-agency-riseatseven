import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = ["SIXT", "Dojo", "B2B Magnet"];

export function FeaturedWork() {
  return (
    <section className="bg-ink text-white py-24 md:py-40 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">— Featured Work</span>
          <a href="#" className="text-sm underline underline-offset-4">All projects</a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            {projects.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                className="font-display font-bold text-[18vw] md:text-[10vw] leading-[0.85] tracking-tighter -mb-4 md:-mb-6 hover:text-[var(--mint)] transition-colors duration-500 cursor-pointer"
                data-cursor
              >
                {p}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            whileHover={{ y: -8 }}
            className="relative bg-[var(--peach)] rounded-[40px] aspect-[4/5] p-8 md:p-12 overflow-hidden text-ink group"
            data-cursor
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60">Case Study · 2025</p>
                <h3 className="font-display font-bold text-5xl md:text-7xl mt-4 leading-none">SIXT</h3>
              </div>
              <motion.div
                whileHover={{ rotate: 45 }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--mint)] flex items-center justify-center shrink-0"
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </div>
            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12">
              <p className="text-base md:text-xl font-medium leading-snug">
                Driving 312% organic growth for the global mobility leader through category-defining content.
              </p>
              <div className="flex gap-3 mt-6 flex-wrap">
                {["SEO", "Digital PR", "Strategy"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-ink/30">{t}</span>
                ))}
              </div>
            </div>
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/30 blur-3xl group-hover:scale-125 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
