import { ArrowRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="bg-mist border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">
            Technology Solutions That Move Your Business Forward
          </h2>
          <p className="text-slate mt-3 leading-relaxed">
            From websites to complete digital solutions, we help businesses
            build, launch and grow with technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-paper p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-soft flex items-center justify-center mb-4">
                <s.icon className="text-blue" size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-semibold text-ink text-base leading-snug mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed">{s.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue mt-4 group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
