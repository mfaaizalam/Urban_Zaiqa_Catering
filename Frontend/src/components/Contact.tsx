import { useState } from "react";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { PHONE_DISPLAY, waLink } from "@/lib/whatsapp";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill name and phone");
      return;
    }
    setSending(true);
    const text = `Salam Urban Zaiqa!%0AName: ${form.name}%0APhone: ${form.phone}%0A%0A${form.message || "I'd like to know more about your packages."}`;
    setTimeout(() => {
      window.open(`https://wa.me/923323336821?text=${text}`, "_blank");
      toast.success("Opening WhatsApp…");
      setSending(false);
      setForm({ name: "", phone: "", message: "" });
    }, 400);
  };

  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div className="reveal">
          <span className="ornament-divider mr-auto max-w-[180px] font-serif italic text-gold">Get In Touch</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-maroon md:text-5xl">
            Let&apos;s Plan Your <span className="text-mehndi">Next Dawat</span>
          </h2>
          <p className="mt-4 max-w-md font-serif text-lg text-foreground/80">
            Call, WhatsApp or drop a message — our catering team will reach out within minutes.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: Phone, label: "Call Us", value: PHONE_DISPLAY, href: `tel:+${PHONE_DISPLAY.replace(/-/g, "")}` },
              { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: waLink("Salam! I want to enquire about Urban Zaiqa.") },
              { icon: MapPin, label: "Visit", value: "Main Boulevard, Lahore, Pakistan" },
            ].map(({ icon: Icon, label, value, href }) => {
              const Comp: any = href ? "a" : "div";
              return (
                <Comp
                  key={label}
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-4 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-maroon">
                    <Icon className="h-5 w-5 text-gold" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-mehndi">{label}</div>
                    <div className="font-semibold text-maroon">{value}</div>
                  </div>
                </Comp>
              );
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Urban Zaiqa location"
              src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={submit}
          className="reveal rounded-3xl border border-border bg-gradient-card p-8 shadow-elegant md:p-10"
        >
          <h3 className="font-display text-2xl font-bold text-maroon">Send a Message</h3>
          <p className="mt-1 text-sm text-foreground/70">We&apos;ll reply on WhatsApp instantly.</p>

          <div className="mt-6 space-y-4">
            {[
              { name: "name", label: "Your Name", type: "text", placeholder: "e.g. Ahmed Khan" },
              { name: "phone", label: "Phone Number", type: "tel", placeholder: "0300-0000000" },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-xs font-semibold uppercase tracking-widest text-mehndi">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  required
                  value={form[f.name as "name" | "phone"]}
                  onChange={(e) => setForm((s) => ({ ...s, [f.name]: e.target.value }))}
                  placeholder={f.placeholder}
                  className="mt-1 w-full rounded-xl border border-border bg-cream/60 px-4 py-3 text-foreground outline-none transition-all focus:border-gold focus:bg-cream focus:ring-2 focus:ring-gold/30"
                />
              </div>
            ))}
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-mehndi">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                placeholder="Tell us about your event…"
                className="mt-1 w-full resize-none rounded-xl border border-border bg-cream/60 px-4 py-3 text-foreground outline-none transition-all focus:border-gold focus:bg-cream focus:ring-2 focus:ring-gold/30"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-maroon py-4 text-sm font-bold uppercase tracking-widest text-cream shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {sending ? <span className="loader-ring h-5 w-5" /> : <Send className="h-4 w-4" />}
            {sending ? "Sending…" : "Send via WhatsApp"}
          </button>
        </form>
      </div>
    </section>
  );
};