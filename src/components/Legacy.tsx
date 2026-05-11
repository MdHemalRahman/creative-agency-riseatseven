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
  // shrink as later cards come in on top
  const targetScale = 1 - (total - i - 1) * 0.05;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const rotate = i % 2 === 0 ? -3 : 4;
  // stagger pin offset so stacked cards peek
  const topOffset = 80 + i * 28;

  return (
    <div
      className="sticky flex items-center justify-center px-6"
      style={{ top: `${topOffset}px`, height: "calc(100vh - 80px)" }}
    >
      <motion.div
        style={{
          scale,
          background: card.bg,
          color: card.fg,
          rotate,
        }}
        className="relative w-full max-w-[520px] rounded-[36px] p-7 md:p-9 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)] grain origin-top"
      >
        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h3 className="font-display font-bold text-5xl md:text-6xl text-center tracking-tighter mb-4">
          {card.title}
        </h3>
        <p className="text-sm md:text-[15px] text-center leading-relaxed opacity-80 max-w-md mx-auto">
          {card.body}
        </p>
      </motion.div>
    </div>
  );
}

export function Legacy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end end"],
  });

  return (
    <section ref={ref} id="legacy" className="relative bg-bone text-ink grain py-20 md:py-28">
      <div className="px-6 md:px-10 max-w-[1600px] mx-auto mb-10 md:mb-16">
        <span className="block text-xs uppercase tracking-[0.35em] text-ink/60 mb-5">
          — Legacy In The Making
        </span>
        <h2 className="font-display font-bold text-[18vw] md:text-[11vw] uppercase tracking-tighter leading-[0.82] max-w-6xl">
          Legacy In<br />The Making
        </h2>
      </div>
      <div className="relative min-h-[360vh]">
        {cards.map((c, i) => (
          <StackCard
            key={c.title}
            card={c}
            i={i}
            total={cards.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
      <div className="h-[30vh]" />
    </section>
  );
}
