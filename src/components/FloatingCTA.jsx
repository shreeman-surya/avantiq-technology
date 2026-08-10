import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, buildGeneralMessage } from "../utils/contact";

export default function FloatingCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-paper border-t border-border px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex gap-3 shadow-[0_-4px_20px_-8px_rgba(11,27,51,0.15)]">
      <a
        href="#contact"
        className="flex-1 inline-flex items-center justify-center rounded-full bg-blue text-white font-semibold text-sm py-3"
      >
        Let's Talk
      </a>
      <a
        href={buildWhatsAppLink(buildGeneralMessage())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center justify-center rounded-full bg-whatsapp text-white w-12 shrink-0"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
