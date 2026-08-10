import { techCategories } from "../data/content";

export default function Technology() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">
          Built With Modern Technology
        </h2>
        <p className="text-slate mt-3 leading-relaxed">
          Technologies we work with — the right stack is chosen based on what
          each project actually needs.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {techCategories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-border bg-paper p-5 shadow-soft"
          >
            <p className="font-display font-semibold text-ink text-sm mb-3">{cat.title}</p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium rounded-full bg-blue-soft text-blue px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
