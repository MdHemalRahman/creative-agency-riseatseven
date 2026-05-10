import { ArrowUpRight } from "lucide-react";

const cols = {
  Services: ["Digital PR", "SEO", "Content", "Strategy"],
  Work: ["Case Studies", "Industries", "Clients"],
  About: ["Story", "Team", "Press"],
  Careers: ["Open Roles", "Culture", "Internships"],
  Locations: ["London", "Sheffield", "New York"],
};

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-24 pb-8 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">— Newsletter</p>
            <h3 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-none">
              The brief.<br/>Monthly insights.
            </h3>
          </div>
          <div className="flex items-end">
            <form className="w-full flex items-center bg-white/10 backdrop-blur rounded-full p-2 pl-6 border border-white/10">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent outline-none text-sm md:text-base placeholder:text-white/40"
              />
              <button className="bg-[var(--mint)] text-ink rounded-full px-5 md:px-6 py-3 text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform" data-cursor>
                Subscribe <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-t border-white/10 pt-16">
          {Object.entries(cols).map(([k, v]) => (
            <div key={k}>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-5">{k}</p>
              <ul className="space-y-3">
                {v.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm md:text-base hover:text-[var(--mint)] transition-colors" data-cursor>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-40">
          <h2 className="font-display font-bold text-[20vw] md:text-[16vw] leading-[0.85] tracking-tighter">
            Rise at Seven
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40 border-t border-white/10 pt-8">
          <span>© 2025 Rise at Seven. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
