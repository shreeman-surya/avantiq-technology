import { Zap, SlidersHorizontal, Layers, HeadphonesIcon } from "lucide-react";
import { trustPoints } from "../data/content";

const icons = [Zap, SlidersHorizontal, Layers, HeadphonesIcon];

export default function TrustStrip() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
      <h2 className="font-display font-bold text-xl sm:text-2xl text-ink text-center mb-8">
        Built for Business Growth
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trustPoints.map((point, i) => {
          const Icon = icons[i];
          return (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-paper p-5 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition"
            >
              <Icon className="text-blue mb-3" size={22} strokeWidth={1.75} />
              <p className="font-display font-semibold text-ink text-sm">{point.title}</p>
              <p className="text-sm text-slate mt-1 leading-relaxed">{point.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
