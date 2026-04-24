import heroImg from "@/assets/hero-feast.jpg";
import { ChevronDown, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Authentic Pakistani feast — biryani, karahi and naan"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(42 90% 60% / 0.5), transparent 40%), radial-gradient(circle at 80% 70%, hsl(350 70% 30% / 0.6), transparent 45%)",
        }}
      />

      <div className="container relative z-10 flex flex-col items-center pt-24 text-center">
        <span
          className="ornament-divider mx-auto max-w-xs animate-fade-in font-serif text-sm italic text-gold"
          style={{ animationDelay: "0.1s" }}
        >
          ✦ Since 2015 ✦
        </span>

        <h1
          className="mt-6 font-display text-4xl font-bold leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animation: "fade-in 1s 0.25s both" }}
        >
          Authentic <span className="gold-shimmer">Taste</span>
          <br />
          of Pakistan
        </h1>

        <p
          className="mt-6 max-w-2xl font-serif text-xl italic text-cream/85 sm:text-2xl md:text-3xl"
          style={{ animation: "fade-in 1s 0.5s both" }}
        >
          Urban Zaiqa Restaurant &amp; Catering — handi biryani, sizzling karahi, smoky BBQ &amp; full event catering across the city.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animation: "fade-in 1s 0.75s both" }}
        >
          <a
            href="#packages"
            className="rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-maroon-deep shadow-gold transition-transform hover:scale-105"
          >
            View Packages
          </a>
          <a
            href={waLink("Salam! I want to place an order with Urban Zaiqa.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-cream/30 bg-cream/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-cream backdrop-blur transition-all hover:border-gold hover:bg-cream/10 hover:text-gold-soft"
          >
            <MessageCircle className="h-4 w-4" /> Order on WhatsApp
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 text-cream/90 sm:gap-12" style={{ animation: "fade-in 1s 1s both" }}>
          {[
            ["10K+", "Happy Guests"],
            ["500+", "Events Catered"],
            ["50+", "Signature Dishes"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl font-bold text-gold sm:text-4xl">{n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/70">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/80 hover:text-gold"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
};