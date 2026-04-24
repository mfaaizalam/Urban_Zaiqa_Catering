import { Facebook, Instagram, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { PHONE_DISPLAY } from "@/lib/whatsapp";

export const Footer = () => (
  <footer className="bg-maroon-deep pt-16 text-cream/85">
    <div className="container grid gap-12 pb-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <Logo light />
        <p className="mt-5 max-w-sm font-serif text-lg italic text-cream/70">
          “Where every bite tells a story of tradition, taste and tehzeeb.”
        </p>
        <div className="mt-6 flex gap-3">
          {[Facebook, Instagram, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 transition-all hover:border-gold hover:bg-gold hover:text-maroon-deep"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg font-bold text-gold">Quick Links</h4>
        <ul className="mt-4 space-y-2 text-sm">
          {["Home", "About", "Packages", "Gallery", "Contact"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-gold">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg font-bold text-gold">Contact</h4>
        <a
          href={`tel:+${PHONE_DISPLAY.replace(/-/g, "")}`}
          className="mt-4 inline-flex items-center gap-2 text-sm hover:text-gold"
        >
          <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
        </a>
        <p className="mt-3 text-sm text-cream/60">
          Main Boulevard,<br />Lahore, Pakistan
        </p>
        <p className="mt-3 text-sm text-cream/60">Open: 11 AM – 1 AM Daily</p>
      </div>
    </div>

    <div className="border-t border-cream/10">
      <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/50 md:flex-row">
        <p>© {new Date().getFullYear()} Urban Zaiqa Restaurant &amp; Catering. All rights reserved.</p>
        <p className="font-serif italic">Crafted with ❤ for true desi foodies.</p>
      </div>
    </div>
  </footer>
);