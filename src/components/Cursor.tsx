import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (ref.current) ref.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    const checkHover = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", checkHover);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", checkHover);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ transition: "width 0.3s, height 0.3s, background 0.3s" }}
    >
      <div
        className="rounded-full mix-blend-difference bg-white"
        style={{
          width: hover ? 56 : 14,
          height: hover ? 56 : 14,
          transition: "width 0.35s cubic-bezier(.2,.8,.2,1), height 0.35s cubic-bezier(.2,.8,.2,1)",
        }}
      />
    </div>
  );
}
