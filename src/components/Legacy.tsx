import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Pioneers",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    bg: "var(--ink)",
    fg: "#fff",
    body:
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it. We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
  },
  {
    title: "Award Winning",
    img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80",
    bg: "var(--mint)",
    fg: "var(--ink)",
    body:
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
  },
  {
    title: "Speed",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    bg: "var(--bone)",
    fg: "var(--ink)",
    body:
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which makes ideas to result within 60 minutes.",
  },
  {
    title: "Bold",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    bg: "var(--peach)",
    fg: "var(--ink)",
    body:
      "We don't make safe work. We back instinct, sharp ideas and category-defying campaigns that earn attention, links and noise — all while building meaningful brand worlds.",
  },
];

function Card({
  card,
  i,
  total,
  progress,
}: {
  card: (typeof cards)[number];
  i: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = i / total;
  const end = (i + 1) / total;
  const rotate = useTransform(progress, [start, end], [i % 2 === 0 ? -3 : 4, 0]);
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i) * 0.04]);
  return (
    <div className="sticky top-0 h-screen flex items-center justify-center px-6">
      <motion.div
        style={{
          rotate,
          scale,
          background: card.bg,
          color: card.fg,
          top: `${i * 18}px`,
        }}
        className="relative w-full max-w-[520px] rounded-[32px] p-8 md:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]"
      >
        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
          <img src={card.img} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <h3 className="font-display font-bold text-5xl md:text-6xl text-center tracking-tighter mb-5">
          {card.title}
        </h3>
        <p className="text-sm md:text-base text-center leading-relaxed opacity-80">{card.body}</p>
      </motion.div>
    </div>
  );
}

export function Legacy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="bg-bone text-ink relative" style={{ height: `${cards.length * 100}vh` }}>
      <div className="sticky top-0 pt-16 pb-6 text-center z-10 pointer-events-none">
        <span className="text-xs md:text-sm uppercase tracking-[0.4em]">— Legacy In The Making</span>
      </div>
      <div className="absolute inset-0 top-24">
        {cards.map((c, i) => (
          <Card key={c.title} card={c} i={i} total={cards.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
