import { whyUs } from "../data/content";

export default function WhyUs() {
  return (
    <section className="bg-mist border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-10">
          Why Businesses Choose AVANTIQ
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {whyUs.map((item) => (
            <div key={item.number} className="flex gap-4">
              <span className="font-display font-extrabold text-2xl text-blue/25 leading-none shrink-0">
                {item.number}
              </span>
              <div>
                <p className="font-display font-semibold text-ink text-sm mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-slate leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
