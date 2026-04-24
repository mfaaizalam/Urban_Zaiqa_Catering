import { useEffect, useState } from "react";
import { UtensilsCrossed } from "lucide-react";

export const PageLoader = () => {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 900);
    const t2 = setTimeout(() => setGone(true), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-maroon-deep transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-gold shadow-gold animate-float">
          <UtensilsCrossed className="h-7 w-7 text-maroon-deep" />
        </span>
        <div className="mt-6 font-display text-2xl font-bold text-cream gold-shimmer">
          Urban Zaiqa
        </div>
        <div className="mt-4 loader-ring h-7 w-7" />
      </div>
    </div>
  );
};