import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Digital PR",
  "Organic Social & Content",
  "Search & Growth Strategy",
  "Content Experience",
  "Data & Insights",
  "Onsite SEO",
];

export function Services() {
  return (
    <section className="relative bg-bone text-ink py-24 md:py-40 px-6 md:px-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute -bottom-20 md:-bottom-40 left-0 right-0 font-display font-bold text-[28vw] leading-none tracking-tighter text-ink/[0.04] pointer-events-none select-none"
      >
        SERVICES
      </div>

      <div className="max-w-[1600px] mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] opacity-60">— What we do</span>
            <h2 className="font-display font-bold text-[14vw] md:text-[8vw] leading-[0.85] tracking-tighter mt-6">
              Our<br/>Services
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 bg-ink text-white rounded-full px-6 py-4 text-sm font-medium hover:bg-[var(--mint)] hover:text-ink transition-colors" data-cursor>
            View All Services <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16">
          {services.map((s, i) => (
            <motion.a
              href="#"
              key={s}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative flex items-center justify-between py-8 md:py-10 border-b border-ink/15"
              data-cursor
            >
              <span className="font-display text-3xl md:text-5xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-4">
                {s}
              </span>
              <ArrowUpRight className="w-7 h-7 transition-transform duration-500 group-hover:rotate-45" />
              <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
