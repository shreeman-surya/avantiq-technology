import { process } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="bg-mist border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-12 text-center">
          How We Work
        </h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-border" aria-hidden="true" />
          {process.map((step) => (
            <div key={step.number} className="relative text-center px-2">
              <div className="relative z-10 w-12 h-12 mx-auto rounded-full bg-blue text-white font-display font-bold flex items-center justify-center text-sm">
                {step.number}
              </div>
              <p className="font-display font-semibold text-ink text-sm mt-4">{step.title}</p>
              <p className="text-sm text-slate mt-1.5 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div className="lg:hidden space-y-8 relative">
          <div className="absolute top-2 bottom-2 left-6 w-px bg-border" aria-hidden="true" />
          {process.map((step) => (
            <div key={step.number} className="relative flex gap-4">
              <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-blue text-white font-display font-bold flex items-center justify-center text-sm">
                {step.number}
              </div>
              <div className="pt-2">
                <p className="font-display font-semibold text-ink text-sm">{step.title}</p>
                <p className="text-sm text-slate mt-1 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
