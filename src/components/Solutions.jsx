import { solutions } from "../data/content";

export default function Solutions() {
  return (
    <section id="solutions" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">
          Solutions Built Around Your Business
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-border bg-paper p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-soft flex items-center justify-center mb-4">
              <s.icon className="text-blue" size={22} strokeWidth={1.75} />
            </div>
            <h3 className="font-display font-semibold text-ink text-base mb-2">{s.title}</h3>
            <p className="text-sm text-slate leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-blue text-white px-6 py-3.5 text-sm font-semibold hover:bg-navy transition"
        >
          Discuss Your Project
        </a>
      </div>
    </section>
  );
}
