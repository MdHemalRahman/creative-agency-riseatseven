import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Pioneers",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    bg: "var(--ink)",
    fg: "#ffffff",
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
    bg: "#ffffff",
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

function StackCard({
  card,
  i,
  total,
  progress,
}: {
  card: (typeof cards)[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = i / total;
  const end = Math.min(1, (i + 1.2) / total);
  const rotate = useTransform(progress, [start, end], [i % 2 === 0 ? -4 : 5, 0]);
  const targetScale = 1 - (total - i) * 0.04;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div
      className="sticky h-screen flex items-center justify-center px-6"
      style={{ top: 0 }}
    >
      <motion.div
        style={{
          rotate,
          scale,
          background: card.bg,
          color: card.fg,
          marginTop: `${i * 28}px`,
        }}
        className="relative w-full max-w-[540px] rounded-[32px] p-8 md:p-10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)] grain"
      >
        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
          <img src={card.img} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <h3 className="font-display font-bold text-5xl md:text-6xl text-center tracking-tighter mb-5">
          {card.title}
        </h3>
        <p className="text-sm md:text-base text-center leading-relaxed opacity-80 max-w-md mx-auto">
          {card.body}
        </p>
      </motion.div>
    </div>
  );
}

export function Legacy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="bg-bone text-ink relative">
      <div className="sticky top-0 pt-12 md:pt-16 pb-4 text-center z-10 pointer-events-none">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-ink/70">
          — Legacy In The Making
        </span>
      </div>
      {cards.map((c, i) => (
        <StackCard key={c.title} card={c} i={i} total={cards.length} progress={scrollYProgress} />
      ))}
      <div className="h-[40vh]" />
    </section>
  );
}
