import { UtensilsCrossed } from "lucide-react";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <a href="#home" className="group flex items-center gap-2.5">
    <span
      className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-gold shadow-gold transition-transform group-hover:rotate-12`}
    >
      <UtensilsCrossed className="h-5 w-5 text-maroon-deep" strokeWidth={2.4} />
    </span>
    <span className="leading-tight">
      <span
        className={`block font-display text-lg font-bold tracking-wide ${
          light ? "text-cream" : "text-maroon"
        }`}
      >
        Urban Zaiqa
      </span>
      <span
        className={`block text-[10px] uppercase tracking-[0.25em] ${
          light ? "text-gold-soft" : "text-mehndi"
        }`}
      >
        Restaurant & Catering
      </span>
    </span>
  </a>
);