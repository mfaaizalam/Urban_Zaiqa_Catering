import { Check, MessageCircle, Star } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

type Pkg = {
  name: string;
  tagline: string;
  price: string;
  perHead: string;
  items: string[];
  highlight?: boolean;
  accent: "maroon" | "mehndi" | "gold";
};

const packages: Pkg[] = [
  {
    name: "Package 1",
    tagline: "Family Delight",
    price: "Rs. 850",
    perHead: "per head",
    accent: "mehndi",
    items: [
      "Chicken Biryani",
      "Chicken Karahi",
      "Naan (2 per person)",
      "Raita & Salad",
      "Soft Drink",
    ],
  },
  {
    name: "Package 2",
    tagline: "Royal Dawat",
    price: "Rs. 1,250",
    perHead: "per head",
    accent: "maroon",
    highlight: true,
    items: [
      "Chicken Biryani",
      "Mutton Karahi",
      "Chicken Tikka",
      "Seekh Kebab",
      "Naan (2 per person)",
      "Raita, Salad & Chutney",
      "Gulab Jamun",
      "Soft Drink",
    ],
  },
  {
    name: "Package 3",
    tagline: "Shahi Wedding",
    price: "Rs. 1,850",
    perHead: "per head",
    accent: "gold",
    items: [
      "Mutton Biryani",
      "Mutton Karahi",
      "Chicken Malai Boti",
      "Beef Bihari Kebab",
      "Naan (3 per person)",
      "Raita, Salad, Chutney",
      "Kheer + Gulab Jamun",
      "Mineral Water + Soft Drink",
    ],
  },
];

export const Packages = () => (
  <section id="packages" className="relative overflow-hidden bg-gradient-maroon py-24 text-cream md:py-32">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 25% 30%, hsl(42 90% 60%), transparent 30%), radial-gradient(circle at 75% 70%, hsl(95 50% 50%), transparent 30%)",
      }}
    />
    <div className="container relative">
      <div className="reveal mx-auto max-w-2xl text-center">
        <span className="ornament-divider mx-auto max-w-[200px] font-serif italic">Catering Menu</span>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
          Pick Your Perfect <span className="gold-shimmer">Dawat</span>
        </h2>
        <p className="mt-4 font-serif text-lg text-cream/80 md:text-xl">
          From intimate family dinners to grand wedding feasts — every package is freshly cooked, lavishly served and unforgettable in taste.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {packages.map((pkg, i) => (
          <article
            key={pkg.name}
            className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border bg-gradient-card p-8 text-foreground shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:shadow-gold ${
              pkg.highlight ? "border-gold scale-[1.02] md:scale-105" : "border-border"
            }`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {pkg.highlight && (
              <div className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-maroon-deep shadow-gold">
                <Star className="h-3 w-3 fill-maroon-deep" /> Most Popular
              </div>
            )}

            <div className="text-xs font-bold uppercase tracking-[0.25em] text-mehndi">{pkg.tagline}</div>
            <h3 className="mt-2 font-display text-3xl font-bold text-maroon">{pkg.name}</h3>

            <div className="my-6 flex items-end gap-2">
              <span className="font-display text-5xl font-bold text-maroon">{pkg.price}</span>
              <span className="pb-2 text-sm text-foreground/60">/ {pkg.perHead}</span>
            </div>

            <ul className="flex-1 space-y-3 border-t border-dashed border-border pt-6">
              {pkg.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-mehndi/10">
                    <Check className="h-3 w-3 text-mehndi" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={waLink(
                `Salam Urban Zaiqa! I want to order ${pkg.name} (${pkg.tagline}) — ${pkg.price} ${pkg.perHead}. Please share details.`
              )}
              target="_blank"
              rel="noreferrer"
              className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.03] ${
                pkg.highlight
                  ? "bg-gradient-gold text-maroon-deep shadow-gold"
                  : "bg-gradient-maroon text-cream shadow-soft hover:shadow-elegant"
              }`}
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
          </article>
        ))}
      </div>

      <p className="reveal mt-12 text-center font-serif italic text-cream/70">
        ✦ Custom packages available for weddings, corporate &amp; mehndi events ✦
      </p>
    </div>
  </section>
);