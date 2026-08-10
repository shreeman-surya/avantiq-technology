import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, buildGeneralMessage } from "../utils/contact";

export default function CallToAction() {
  return (
    <section className="bg-cta-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
          Let's Build Something That Grows Your Business.
        </h2>
        <p className="text-white/75 mt-4 max-w-xl mx-auto leading-relaxed">
          Have an idea, a business problem or a digital project in mind? Tell
          us what you need and let's find the right technology solution.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-navy px-6 py-3.5 text-sm font-semibold hover:bg-mist transition"
          >
            Start a Conversation
          </a>
          <a
            href={buildWhatsAppLink(buildGeneralMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 justify-center rounded-full border border-white/30 text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
