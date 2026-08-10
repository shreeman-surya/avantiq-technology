import {
  BarChart3,
  Globe2,
  Megaphone,
  Settings2,
  Smartphone,
  Sparkles,
  Store,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { company } from "../data/company";

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft text-blue px-3.5 py-1.5 text-xs font-semibold">
              <Sparkles size={13} />
              Technology • Business • Growth
            </span>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-ink mt-5">
              Technology That
              <br />
              Understands <span className="text-blue">Business.</span>
            </h2>

            <p className="mt-6 text-slate text-base sm:text-lg leading-relaxed max-w-xl">
              {company.name} is a digital solutions company focused on helping
              businesses, startups and growing brands use technology to build a
              stronger digital presence and improve the way they operate.
            </p>

            <p className="mt-5 text-slate text-base sm:text-lg leading-relaxed max-w-xl">
              From custom websites and web applications to mobile apps, digital
              marketing and complete IT solutions, we combine technology with
              practical business thinking.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-blue text-white px-6 py-3.5 text-sm font-semibold hover:bg-navy transition shadow-soft"
            >
              Work With Us
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* =====================================================
              RIGHT — BUSINESS ECOSYSTEM
          ====================================================== */}

          <div className="relative h-[430px] sm:h-[470px]">
            {/* Background */}
            <div className="absolute inset-0 rounded-[32px] bg-mist border border-border overflow-hidden">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-[0.35] about-grid" />

              {/* Soft glow */}
              <div className="absolute w-72 h-72 bg-blue/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              {/* =================================================
                  CONNECTION LINES
              ================================================== */}

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 470"
                fill="none"
              >
                {/* Website → Business */}
                <path
                  d="M120 105 C190 105 215 190 270 220"
                  stroke="currentColor"
                  className="text-blue/20"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                />

                {/* Mobile → Business */}
                <path
                  d="M480 105 C410 105 385 190 330 220"
                  stroke="currentColor"
                  className="text-blue/20"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                />

                {/* Marketing → Business */}
                <path
                  d="M105 335 C185 335 220 285 270 260"
                  stroke="currentColor"
                  className="text-blue/20"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                />

                {/* Analytics → Business */}
                <path
                  d="M495 335 C415 335 380 285 330 260"
                  stroke="currentColor"
                  className="text-blue/20"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                />

                {/* Business → Growth */}
                <path
                  d="M300 275 C300 320 300 355 300 395"
                  stroke="currentColor"
                  className="text-blue/30"
                  strokeWidth="2"
                  strokeDasharray="6 7"
                />

                {/* Animated data points */}
                <circle
                  r="4"
                  fill="currentColor"
                  className="text-blue about-dot"
                >
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path="M120 105 C190 105 215 190 270 220"
                  />
                </circle>

                <circle
                  r="4"
                  fill="currentColor"
                  className="text-cyan about-dot"
                >
                  <animateMotion
                    dur="3.5s"
                    repeatCount="indefinite"
                    path="M480 105 C410 105 385 190 330 220"
                  />
                </circle>

                <circle
                  r="4"
                  fill="currentColor"
                  className="text-blue about-dot"
                >
                  <animateMotion
                    dur="3.2s"
                    repeatCount="indefinite"
                    path="M105 335 C185 335 220 285 270 260"
                  />
                </circle>
              </svg>

              {/* =================================================
                  TOP LABEL
              ================================================== */}

              <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1.5 shadow-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 about-pulse" />

                <span className="text-[8px] font-semibold text-slate">
                  Digital ecosystem
                </span>
              </div>

              {/* =================================================
                  WEBSITE NODE
              ================================================== */}

              <div className="absolute top-[58px] left-[25px] sm:left-[48px] w-[145px] rounded-2xl bg-white border border-border shadow-soft p-3 about-node about-node-one">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-soft flex items-center justify-center">
                    <Globe2 size={15} className="text-blue" />
                  </div>

                  <div>
                    <div className="text-[9px] font-bold text-ink">Website</div>

                    <div className="text-[7px] text-slate">
                      Digital presence
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex gap-1">
                  <div className="h-1.5 flex-1 rounded bg-blue/20" />
                  <div className="h-1.5 w-6 rounded bg-blue/40" />
                </div>
              </div>

              {/* =================================================
                  MOBILE NODE
              ================================================== */}

              <div className="absolute top-[58px] right-[25px] sm:right-[48px] w-[145px] rounded-2xl bg-white border border-border shadow-soft p-3 about-node about-node-two">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <Smartphone size={15} className="text-cyan" />
                  </div>

                  <div>
                    <div className="text-[9px] font-bold text-ink">
                      Mobile App
                    </div>

                    <div className="text-[7px] text-slate">
                      Connected experience
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex gap-1">
                  <div className="h-1.5 w-7 rounded bg-cyan/30" />
                  <div className="h-1.5 flex-1 rounded bg-border" />
                </div>
              </div>

              {/* =================================================
                  CENTRAL BUSINESS HUB
              ================================================== */}

              <div className="absolute top-[175px] left-1/2 -translate-x-1/2 w-[170px] sm:w-[190px]">
                <div className="relative rounded-[24px] bg-navy text-white p-5 shadow-2xl about-core">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-[24px] bg-blue/20 blur-xl -z-10" />

                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <Store size={21} className="text-white" />
                    </div>
                  </div>

                  <div className="text-center mt-3">
                    <div className="text-[12px] font-bold">Your Business</div>

                    <div className="text-[7px] text-white/60 mt-1">
                      One connected digital system
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-1.5">
                    <div className="h-1 rounded-full bg-white/20" />
                    <div className="h-1 rounded-full bg-blue" />
                    <div className="h-1 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>

              {/* =================================================
                  MARKETING NODE
              ================================================== */}

              <div className="absolute bottom-[72px] left-[25px] sm:left-[48px] w-[145px] rounded-2xl bg-white border border-border shadow-soft p-3 about-node about-node-three">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Megaphone size={15} className="text-orange-500" />
                  </div>

                  <div>
                    <div className="text-[9px] font-bold text-ink">
                      Marketing
                    </div>

                    <div className="text-[7px] text-slate">
                      Reach & engagement
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex gap-1">
                  <div className="h-1.5 w-8 rounded bg-orange-200" />
                  <div className="h-1.5 flex-1 rounded bg-border" />
                </div>
              </div>

              {/* =================================================
                  ANALYTICS NODE
              ================================================== */}

              <div className="absolute bottom-[72px] right-[25px] sm:right-[48px] w-[145px] rounded-2xl bg-white border border-border shadow-soft p-3 about-node about-node-four">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-soft flex items-center justify-center">
                    <BarChart3 size={15} className="text-blue" />
                  </div>

                  <div>
                    <div className="text-[9px] font-bold text-ink">
                      Analytics
                    </div>

                    <div className="text-[7px] text-slate">
                      Insights & decisions
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-end gap-1 h-5">
                  <div className="w-full h-[35%] rounded-t bg-blue/20" />
                  <div className="w-full h-[55%] rounded-t bg-blue/35" />
                  <div className="w-full h-[70%] rounded-t bg-blue/55" />
                  <div className="w-full h-full rounded-t bg-blue" />
                </div>
              </div>

              {/* =================================================
                  BOTTOM GROWTH STATUS
              ================================================== */}

              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 rounded-full bg-white border border-border shadow-soft px-4 py-2">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                    <Zap size={11} className="text-green-600" />
                  </div>

                  <div>
                    <div className="text-[7px] font-bold text-ink">
                      Connected • Automated • Growing
                    </div>

                    <div className="text-[6px] text-slate">
                      Technology working for your business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
