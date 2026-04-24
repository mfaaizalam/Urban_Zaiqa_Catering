import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { PHONE_DISPLAY, waLink } from "@/lib/whatsapp";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#packages", label: "Packages" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 shadow-soft backdrop-blur-md"
          : "bg-gradient-to-b from-maroon-deep/60 to-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between gap-4">
        <Logo light={!scrolled} />

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors ${
                  scrolled ? "text-maroon hover:text-gold" : "text-cream hover:text-gold-soft"
                } after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:+${PHONE_DISPLAY.replace(/-/g, "")}`}
            className={`flex items-center gap-2 text-sm font-semibold ${
              scrolled ? "text-maroon" : "text-cream"
            }`}
          >
            <Phone className="h-4 w-4 text-gold" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink("Hi Urban Zaiqa, I'd like to make a booking.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-maroon-deep shadow-gold transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${
            scrolled ? "bg-maroon text-cream" : "bg-cream/15 text-cream backdrop-blur"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-20 origin-top bg-gradient-maroon transition-all duration-500 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="container mx-auto flex flex-col gap-1 py-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-display text-xl text-cream transition-colors hover:bg-cream/10 hover:text-gold"
              style={{ animation: open ? `fade-in-down 0.4s ${i * 60}ms both` : undefined }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:+${PHONE_DISPLAY.replace(/-/g, "")}`}
            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-cream"
          >
            <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
          </a>
          <a
            href={waLink("Hi Urban Zaiqa, I'd like to make a booking.")}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-gradient-gold py-3 text-center font-bold uppercase tracking-wider text-maroon-deep shadow-gold"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};