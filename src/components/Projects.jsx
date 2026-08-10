import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Globe2,
  LayoutDashboard,
  Megaphone,
  Settings2,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { projectTypes } from "../data/content";

function WebsitePreview() {
  return (
    <div className="h-full bg-white">
      <div className="h-7 border-b border-slate-200 flex items-center px-3 gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-red-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-green-300" />

        <div className="ml-2 h-3 flex-1 rounded-full bg-slate-100" />
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-blue flex items-center justify-center">
              <span className="text-[6px] text-white font-bold">A</span>
            </div>

            <div className="w-14 h-1.5 rounded bg-slate-700" />
          </div>

          <div className="flex gap-2">
            <span className="w-6 h-1 rounded bg-slate-200" />
            <span className="w-6 h-1 rounded bg-slate-200" />
            <span className="w-6 h-1 rounded bg-slate-200" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4 items-center">
          <div>
            <div className="w-10 h-1.5 rounded bg-blue/30 mb-2" />

            <div className="w-full h-2.5 rounded bg-slate-700" />
            <div className="w-4/5 h-2.5 rounded bg-slate-700 mt-1" />

            <div className="w-full h-1 rounded bg-slate-200 mt-2" />
            <div className="w-4/5 h-1 rounded bg-slate-200 mt-1" />

            <div className="mt-2.5 w-14 h-4 rounded-full bg-blue" />
          </div>

          <div className="h-20 rounded-xl bg-blue-soft flex items-center justify-center">
            <Globe2 size={24} className="text-blue" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5 mt-4">
          <div className="h-8 rounded-lg bg-slate-50 border border-slate-100" />
          <div className="h-8 rounded-lg bg-slate-50 border border-slate-100" />
          <div className="h-8 rounded-lg bg-slate-50 border border-slate-100" />
        </div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="h-full bg-white flex">
      <div className="w-[23%] bg-slate-50 border-r border-slate-200 p-2">
        <div className="w-6 h-6 rounded-lg bg-blue mb-4" />

        <div className="space-y-2">
          <div className="h-4 rounded bg-blue-soft" />
          <div className="h-1.5 rounded bg-slate-200" />
          <div className="h-1.5 rounded bg-slate-200" />
          <div className="h-1.5 rounded bg-slate-200" />
          <div className="h-1.5 rounded bg-slate-200" />
        </div>
      </div>

      <div className="flex-1 p-3">
        <div className="flex justify-between">
          <div>
            <div className="w-20 h-2 rounded bg-slate-700" />
            <div className="w-12 h-1 rounded bg-slate-200 mt-1.5" />
          </div>

          <div className="w-5 h-5 rounded-full bg-blue-soft" />
        </div>

        <div className="grid grid-cols-3 gap-1.5 mt-3">
          {["Revenue", "Users", "Growth"].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-100 p-1.5"
            >
              <div className="text-[5px] text-slate-400">{item}</div>
              <div className="w-8 h-1.5 rounded bg-slate-700 mt-1" />
            </div>
          ))}
        </div>

        <div className="mt-2.5 rounded-lg border border-slate-100 p-2.5 h-[105px]">
          <div className="flex justify-between">
            <div className="w-14 h-1.5 rounded bg-slate-700" />
            <BarChart3 size={10} className="text-blue" />
          </div>

          <div className="flex items-end gap-1 h-14 mt-2">
            <div className="flex-1 h-[30%] rounded-t bg-blue/15" />
            <div className="flex-1 h-[45%] rounded-t bg-blue/25" />
            <div className="flex-1 h-[40%] rounded-t bg-blue/30" />
            <div className="flex-1 h-[65%] rounded-t bg-blue/45" />
            <div className="flex-1 h-[75%] rounded-t bg-blue/65" />
            <div className="flex-1 h-full rounded-t bg-blue" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="h-full bg-white p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-lg bg-blue flex items-center justify-center">
            <ShoppingCart size={11} className="text-white" />
          </div>

          <div className="w-14 h-1.5 rounded bg-slate-700" />
        </div>

        <div className="relative">
          <ShoppingCart size={14} className="text-slate-700" />
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-blue text-white text-[5px] flex items-center justify-center">
            2
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-20 h-2 rounded bg-slate-700" />
        <div className="w-28 h-1 rounded bg-slate-200 mt-1" />
      </div>

      <div className="grid grid-cols-3 gap-1.5 mt-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-slate-100 overflow-hidden"
          >
            <div className="h-16 bg-slate-50 flex items-center justify-center">
              <div className="w-8 h-8 rounded-lg bg-blue-soft" />
            </div>

            <div className="p-1.5">
              <div className="w-full h-1 rounded bg-slate-600" />
              <div className="w-6 h-1 rounded bg-blue mt-1" />

              <div className="mt-1.5 h-3 rounded-full bg-blue flex items-center justify-center">
                <span className="text-[4px] text-white font-semibold">Add</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-lg bg-slate-50 border border-slate-100 p-2 flex justify-between items-center">
        <div>
          <div className="text-[5px] text-slate-400">Cart total</div>
          <div className="w-10 h-1.5 rounded bg-slate-700 mt-1" />
        </div>

        <div className="w-12 h-4 rounded-full bg-blue" />
      </div>
    </div>
  );
}

function AutomationPreview() {
  return (
    <div className="h-full bg-white p-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="w-20 h-2 rounded bg-slate-700" />
          <div className="w-16 h-1 rounded bg-slate-200 mt-1" />
        </div>

        <div className="w-6 h-6 rounded-lg bg-blue-soft flex items-center justify-center">
          <Zap size={12} className="text-blue" />
        </div>
      </div>

      <div className="relative mt-3">
        <div className="absolute left-[22px] top-7 bottom-7 w-px bg-blue/20" />

        <div className="space-y-2">
          <div className="relative z-10 flex items-center gap-2 rounded-lg border border-slate-100 p-2 bg-white shadow-sm">
            <div className="w-7 h-7 rounded-lg bg-blue-soft flex items-center justify-center">
              <Sparkles size={11} className="text-blue" />
            </div>

            <div>
              <div className="text-[6px] font-semibold text-slate-700">
                New customer
              </div>
              <div className="text-[5px] text-slate-400 mt-0.5">Trigger</div>
            </div>

            <CheckCircle2 size={10} className="ml-auto text-green-500" />
          </div>

          <div className="relative z-10 flex items-center gap-2 rounded-lg border border-slate-100 p-2 bg-white shadow-sm">
            <div className="w-7 h-7 rounded-lg bg-blue-soft flex items-center justify-center">
              <Settings2 size={11} className="text-blue" />
            </div>

            <div>
              <div className="text-[6px] font-semibold text-slate-700">
                Process data
              </div>
              <div className="text-[5px] text-slate-400 mt-0.5">
                Automated action
              </div>
            </div>

            <CheckCircle2 size={10} className="ml-auto text-green-500" />
          </div>

          <div className="relative z-10 flex items-center gap-2 rounded-lg border border-slate-100 p-2 bg-white shadow-sm">
            <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center">
              <ArrowUpRight size={11} className="text-green-600" />
            </div>

            <div>
              <div className="text-[6px] font-semibold text-slate-700">
                Business result
              </div>
              <div className="text-[5px] text-slate-400 mt-0.5">Completed</div>
            </div>

            <span className="ml-auto text-[5px] font-semibold text-green-600">
              Done
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Preview({ type }) {
  if (type === "Business Websites") {
    return <WebsitePreview />;
  }

  if (type === "Web Applications") {
    return <DashboardPreview />;
  }

  if (type === "E-commerce Solutions") {
    return <EcommercePreview />;
  }

  return <AutomationPreview />;
}

export default function Projects() {
  return (
    <section className="bg-mist border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-blue text-xs font-semibold mb-3">
            <LayoutDashboard size={14} />
            What We Build
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">
            Digital Experiences We Build
          </h2>

          <p className="text-slate mt-3 text-sm sm:text-base leading-relaxed">
            Practical digital products designed around real business needs,
            customer experiences and growth.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projectTypes.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-paper overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              {/* Real Product Preview */}
              <div className="h-48 bg-slate-50 border-b border-border overflow-hidden">
                <div className="h-full transition-transform duration-500 group-hover:scale-[1.02]">
                  <Preview type={p.title} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display font-semibold text-ink text-sm">
                    {p.title}
                  </p>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-slate-300 group-hover:text-blue transition"
                  />
                </div>

                <p className="text-sm text-slate leading-relaxed mt-2">
                  {p.description}
                </p>

                <div className="flex items-center gap-1 mt-4 text-[11px] font-semibold text-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore solution
                  <ChevronRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue text-white px-6 py-3.5 text-sm font-semibold hover:bg-navy transition"
          >
            Start Your Project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
