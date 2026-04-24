import { Leaf, Sparkles, Truck, Users } from "lucide-react";

const items = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Hand-picked spices, daily-sourced meat & farm-fresh produce." },
  { icon: Sparkles, title: "Hygienic Cooking", desc: "Spotless kitchen, certified chefs, HACCP-ready process." },
  { icon: Truck, title: "Fast Delivery", desc: "Hot, on-time delivery across the city — piping fresh to your door." },
  { icon: Users, title: "Event Catering Pros", desc: "From 20 to 2,000 guests — weddings, mehndi, corporate dawat." },
];

export const Features = () => (
  <section className="bg-cream py-20 md:py-28">
    <div className="container">
      <div className="reveal mx-auto mb-14 max-w-2xl text-center">
        <span className="ornament-divider mx-auto max-w-[180px] font-serif italic text-gold">Why Urban Zaiqa</span>
        <h2 className="mt-4 font-display text-4xl font-bold text-maroon md:text-5xl">
          Made for the <span className="text-mehndi">Real Foodies</span>
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-gold"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 transition-all duration-500 group-hover:scale-150 group-hover:bg-gold/20" />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-maroon shadow-soft transition-transform group-hover:rotate-6">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-maroon">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);