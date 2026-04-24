import { useState } from "react";
import { X } from "lucide-react";
import biryani from "@/assets/biryani.jpg";
import karahi from "@/assets/karahi.jpg";
import bbq from "@/assets/bbq.jpg";
import naan from "@/assets/naan.jpg";
import desserts from "@/assets/desserts.jpg";
import nihari from "@/assets/nihari.jpg";
import kebab from "@/assets/kebab.jpg";
import hero from "@/assets/hero-feast.jpg";

type Item = { src: string; alt: string; category: Category; span?: string };
type Category = "All" | "Biryani" | "BBQ" | "Karahi" | "Desserts";

const items: Item[] = [
  { src: biryani, alt: "Chicken biryani", category: "Biryani", span: "md:row-span-2" },
  { src: bbq, alt: "Pakistani BBQ platter", category: "BBQ" },
  { src: karahi, alt: "Chicken karahi", category: "Karahi" },
  { src: kebab, alt: "Seekh kebabs", category: "BBQ", span: "md:row-span-2" },
  { src: naan, alt: "Hot naan bread", category: "Karahi" },
  { src: desserts, alt: "Pakistani desserts", category: "Desserts" },
  { src: nihari, alt: "Mutton nihari", category: "Karahi" },
  { src: hero, alt: "Full feast spread", category: "Biryani", span: "md:col-span-2" },
];

const categories: Category[] = ["All", "Biryani", "BBQ", "Karahi", "Desserts"];

export const Gallery = () => {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="bg-gradient-mehndi py-24 text-cream md:py-32">
      <div className="container">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <span className="ornament-divider mx-auto max-w-[180px] font-serif italic">Our Gallery</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            A Feast for the <span className="gold-shimmer">Eyes</span>
          </h2>
        </div>

        <div className="reveal mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                active === c
                  ? "border-gold bg-gradient-gold text-maroon-deep shadow-gold"
                  : "border-cream/25 text-cream/80 hover:border-gold hover:text-gold-soft"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {filtered.map((item, i) => (
            <button
              key={item.src + i}
              onClick={() => setLightbox(item)}
              className={`group relative overflow-hidden rounded-2xl shadow-elegant ${item.span ?? ""}`}
              style={{ animation: `scale-in 0.5s ${i * 60}ms both` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/85 via-maroon-deep/10 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] uppercase tracking-widest text-gold">{item.category}</span>
                <div className="font-display text-lg font-bold text-cream">{item.alt}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-maroon-deep/90 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
          style={{ animation: "fade-in 0.3s both" }}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur transition-colors hover:bg-gold hover:text-maroon-deep"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-elegant"
            style={{ animation: "scale-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};