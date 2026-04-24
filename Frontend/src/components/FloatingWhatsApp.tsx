import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export const FloatingWhatsApp = () => (
  <a
    href={waLink("Salam Urban Zaiqa! I want to place an order.")}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-4 text-white shadow-elegant animate-pulse-ring transition-transform hover:scale-110 sm:bottom-7 sm:right-7"
  >
    <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
    <span className="hidden text-sm font-bold uppercase tracking-wider sm:inline">Chat Now</span>
  </a>
);