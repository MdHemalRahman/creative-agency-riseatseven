const items = ["Category Leaders", "★", "Digital PR", "★", "Search Strategy", "★", "Content", "★", "Awwwards", "★"];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="bg-[var(--mint)] text-ink py-6 md:py-8 overflow-hidden border-y border-ink/10">
      <div className="flex marquee-track whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-4xl md:text-6xl font-bold tracking-tight px-6">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
