import { motion } from "framer-motion";

const cards = [
  {
    tag: "Insights",
    date: "Nov 2025",
    title: "How AI search is rewriting the rules of brand visibility",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    accent: "var(--mint)",
  },
  {
    tag: "Case Study",
    date: "Oct 2025",
    title: "Building a category leader from zero in 18 months",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&q=80",
    accent: "var(--peach)",
  },
  {
    tag: "Culture",
    date: "Sep 2025",
    title: "Inside Rise at Seven: a year of bold creative work",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    accent: "var(--mint)",
  },
];

export function News() {
  return (
    <section className="bg-background py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter">Latest thinking</h2>
          <a href="#" className="hidden md:inline-block text-sm underline underline-offset-4">All articles →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href="#"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -8 }}
              className="group block"
              data-cursor
            >
              <div className="relative overflow-hidden rounded-[28px] aspect-[4/5]" style={{ background: c.accent }}>
                <img
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                <span>{c.tag}</span><span>·</span><span>{c.date}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                {c.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
