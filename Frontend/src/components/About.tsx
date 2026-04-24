import biryani from "@/assets/biryani.jpg";
import karahi from "@/assets/karahi.jpg";
import { Award, Flame, Heart } from "lucide-react";

export const About = () => (
  <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-32">
    <div
      className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      aria-hidden
    />
    <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
      <div className="reveal relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elegant">
          <img
            src={biryani}
            alt="Pakistani chicken biryani in copper handi"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1280}
          />
        </div>
        <div className="absolute -bottom-10 -right-6 hidden aspect-square w-56 overflow-hidden rounded-[1.5rem] border-4 border-cream shadow-elegant md:block">
          <img src={karahi} alt="Chicken karahi" className="h-full w-full object-cover" loading="lazy" width={400} height={400} />
        </div>
        <div className="absolute -left-6 top-10 hidden rotate-[-6deg] rounded-2xl bg-gradient-gold px-6 py-4 shadow-gold md:block">
          <div className="font-display text-3xl font-bold text-maroon-deep">10+</div>
          <div className="text-[11px] uppercase tracking-widest text-maroon-deep/80">Years Of Zaiqa</div>
        </div>
      </div>

      <div className="reveal">
        <span className="ornament-divider mr-auto max-w-[180px] font-serif text-sm italic">Our Story</span>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-maroon md:text-5xl">
          Where Tradition Meets <span className="text-mehndi">Modern Zaiqa</span>
        </h2>
        <p className="mt-6 font-serif text-lg leading-relaxed text-foreground/80 md:text-xl">
          From the bustling streets of old Lahore to your dastarkhwan — Urban Zaiqa brings you the soul of Pakistani cuisine. Every grain of biryani, every smoky kebab and every dollop of qorma is cooked the way <em>Ami</em> would: slow, generous and full of love.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Flame, title: "Slow-Cooked", desc: "Authentic dum & bhuna technique" },
            { icon: Heart, title: "Made with Love", desc: "Family recipes, premium spices" },
            { icon: Award, title: "Award Winning", desc: "Top-rated catering 2023" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-gradient-card p-5 shadow-soft transition-transform hover:-translate-y-1">
              <Icon className="h-7 w-7 text-gold" strokeWidth={1.6} />
              <div className="mt-3 font-display font-bold text-maroon">{title}</div>
              <div className="mt-1 text-sm text-foreground/70">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);