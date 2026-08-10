import {
  Sparkles,
  Globe2,
  Smartphone,
  ArrowUpRight,
  ShoppingBag,
  Menu,
  Search,
  Bell,
  UserRound,
  Check,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mist border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

        <div className="animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft text-blue text-xs font-semibold px-3.5 py-1.5">
            <Sparkles size={13} />
            Technology • Strategy • Growth
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-ink mt-5">
            Your Business.
            <br />
            Our <span className="text-blue">Technology.</span>
          </h1>

          <p className="mt-5 text-slate text-base sm:text-lg leading-relaxed max-w-lg">
            We build fast, customized and scalable digital solutions that help
            businesses grow, operate smarter and reach further.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue text-white px-6 py-3.5 text-sm font-semibold hover:bg-navy transition shadow-soft"
            >
              Start a Project
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-paper text-ink px-6 py-3.5 text-sm font-semibold hover:border-blue hover:text-blue transition"
            >
              Explore Services
            </a>
          </div>

          <p className="mt-6 text-xs font-semibold text-slate tracking-wide uppercase">
            Web • Mobile • Digital • IT Solutions
          </p>
        </div>

        {/* =====================================================
            RIGHT SIDE
            REALISTIC DIGITAL PRODUCT SHOWCASE
        ====================================================== */}

        <div className="relative animate-fadeUp [animation-delay:120ms]">
          <div className="relative min-h-[390px] sm:min-h-[430px] rounded-3xl bg-hero-gradient p-3 sm:p-5 shadow-card overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-28 -left-20 w-72 h-72 rounded-full bg-cyan-300/10 blur-3xl" />

            {/* =================================================
                MAIN BROWSER WINDOW
            ================================================== */}

            <div className="relative z-10 rounded-2xl bg-white shadow-2xl overflow-hidden border border-white/80">
              {/* Browser toolbar */}
              <div className="h-10 px-3 sm:px-4 flex items-center justify-between bg-white border-b border-border">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-mist border border-border rounded-full px-5 py-1">
                  <Globe2 size={9} className="text-slate" />

                  <span className="text-[8px] text-slate">
                    avantiq.business
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-soft" />
                  <div className="w-4 h-4 rounded-full bg-mist" />
                </div>
              </div>

              {/* =================================================
                  PRODUCT SCREENS
              ================================================== */}

              <div className="relative h-[275px] sm:h-[300px] overflow-hidden bg-[#f8fafc]">
                {/* =================================================
                    SCREEN 1 — REAL BUSINESS WEBSITE
                ================================================== */}

                <div className="absolute inset-0 bg-white animate-show-website">
                  {/* Website navigation */}
                  <div className="h-11 px-4 sm:px-5 flex items-center justify-between border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue flex items-center justify-center">
                        <span className="text-white text-[9px] font-bold">
                          A
                        </span>
                      </div>

                      <span className="text-[10px] sm:text-xs font-bold text-ink">
                        Nova Business
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-4">
                      <span className="text-[8px] text-slate">Home</span>

                      <span className="text-[8px] text-slate">Services</span>

                      <span className="text-[8px] text-slate">About</span>

                      <span className="text-[8px] text-slate">Contact</span>
                    </div>

                    <button className="text-[8px] font-semibold bg-blue text-white rounded-full px-3 py-1.5">
                      Get Started
                    </button>
                  </div>

                  {/* Website content */}
                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-2 gap-5 items-center">
                      {/* Website copy */}
                      <div>
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-soft px-2 py-1 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue" />

                          <span className="text-[6px] font-semibold text-blue">
                            SMART DIGITAL SOLUTIONS
                          </span>
                        </div>

                        <h3 className="text-[16px] sm:text-[20px] leading-tight font-bold text-ink">
                          Grow your business
                          <span className="text-blue"> digitally.</span>
                        </h3>

                        <p className="mt-2 text-[7px] sm:text-[8px] leading-relaxed text-slate max-w-[170px]">
                          Everything your business needs to create a stronger
                          digital experience.
                        </p>

                        <div className="mt-3 flex gap-2">
                          <button className="rounded-full bg-blue text-white text-[7px] font-semibold px-3 py-1.5">
                            Explore
                          </button>

                          <button className="rounded-full border border-border text-ink text-[7px] font-semibold px-3 py-1.5">
                            Learn More
                          </button>
                        </div>
                      </div>

                      {/* Website visual */}
                      <div className="relative h-[125px] rounded-2xl bg-blue-soft overflow-hidden">
                        <div className="absolute top-3 left-3 right-3 bg-white rounded-xl shadow-sm p-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded-md bg-blue" />

                              <div>
                                <div className="w-12 h-1.5 rounded bg-ink/70" />
                                <div className="w-8 h-1 rounded bg-slate/20 mt-1" />
                              </div>
                            </div>

                            <ArrowUpRight size={10} className="text-blue" />
                          </div>

                          <div className="grid grid-cols-3 gap-1.5 mt-3">
                            <div className="h-10 rounded-lg bg-mist" />

                            <div className="h-10 rounded-lg bg-mist" />

                            <div className="h-10 rounded-lg bg-blue/10" />
                          </div>
                        </div>

                        {/* Floating notification */}
                        <div className="absolute bottom-3 right-3 bg-white rounded-lg shadow-md px-2 py-1.5 flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-md bg-green-50 flex items-center justify-center">
                            <Check size={10} className="text-green-600" />
                          </div>

                          <div>
                            <div className="text-[6px] font-bold text-ink">
                              Project Ready
                            </div>

                            <div className="text-[5px] text-slate">
                              Live & optimized
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Website service cards */}
                    <div className="grid grid-cols-3 gap-2 mt-5">
                      <div className="rounded-xl border border-border bg-white p-2.5 shadow-sm">
                        <div className="w-6 h-6 rounded-lg bg-blue-soft flex items-center justify-center">
                          <Globe2 size={11} className="text-blue" />
                        </div>

                        <div className="text-[7px] font-bold text-ink mt-2">
                          Web Solutions
                        </div>

                        <div className="text-[6px] text-slate mt-1">
                          Modern & responsive
                        </div>
                      </div>

                      <div className="rounded-xl border border-border bg-white p-2.5 shadow-sm">
                        <div className="w-6 h-6 rounded-lg bg-blue-soft flex items-center justify-center">
                          <Smartphone size={11} className="text-blue" />
                        </div>

                        <div className="text-[7px] font-bold text-ink mt-2">
                          Mobile Apps
                        </div>

                        <div className="text-[6px] text-slate mt-1">
                          Built for users
                        </div>
                      </div>

                      <div className="rounded-xl border border-border bg-white p-2.5 shadow-sm">
                        <div className="w-6 h-6 rounded-lg bg-blue-soft flex items-center justify-center">
                          <BarChart3 size={11} className="text-blue" />
                        </div>

                        <div className="text-[7px] font-bold text-ink mt-2">
                          Business Tools
                        </div>

                        <div className="text-[6px] text-slate mt-1">
                          Smarter operations
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    SCREEN 2 — REAL E-COMMERCE WEBSITE
                ================================================== */}

                <div className="absolute inset-0 bg-[#f8fafc] animate-show-store">
                  {/* Store navbar */}
                  <div className="h-11 px-4 sm:px-5 bg-white border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue flex items-center justify-center">
                        <ShoppingBag size={12} className="text-white" />
                      </div>

                      <span className="text-[10px] font-bold text-ink">
                        Urban Store
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-3">
                      <span className="text-[7px] text-slate">
                        New Arrivals
                      </span>

                      <span className="text-[7px] text-slate">Collections</span>

                      <span className="text-[7px] text-slate">Offers</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Search size={11} className="text-slate" />

                      <div className="relative">
                        <ShoppingBag size={11} className="text-ink" />

                        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-blue text-white text-[5px] flex items-center justify-center">
                          2
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Store content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[14px] sm:text-[17px] font-bold text-ink">
                          Featured products
                        </div>

                        <div className="text-[7px] text-slate mt-1">
                          Discover products made for you
                        </div>
                      </div>

                      <button className="text-[7px] text-blue font-semibold">
                        View all
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {/* Product 1 */}
                      <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                        <div className="relative h-[75px] bg-blue-soft">
                          <div className="absolute inset-4 rounded-lg bg-white shadow-sm" />

                          <span className="absolute top-2 left-2 rounded-full bg-blue text-white text-[5px] font-bold px-1.5 py-1">
                            NEW
                          </span>
                        </div>

                        <div className="p-2.5">
                          <div className="text-[7px] font-semibold text-ink">
                            Essential Collection
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <span className="text-[8px] font-bold text-ink">
                              ₹1,299
                            </span>

                            <div className="w-5 h-5 rounded-full bg-blue flex items-center justify-center">
                              <ArrowUpRight size={9} className="text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product 2 */}
                      <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                        <div className="h-[75px] bg-mist flex items-center justify-center">
                          <div className="w-20 h-12 rounded-lg bg-white shadow-sm" />
                        </div>

                        <div className="p-2.5">
                          <div className="text-[7px] font-semibold text-ink">
                            Premium Series
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <span className="text-[8px] font-bold text-ink">
                              ₹1,899
                            </span>

                            <div className="w-5 h-5 rounded-full bg-blue flex items-center justify-center">
                              <ArrowUpRight size={9} className="text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product 3 */}
                      <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                        <div className="h-[75px] bg-blue/10 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-xl bg-white shadow-sm rotate-3" />
                        </div>

                        <div className="p-2.5">
                          <div className="text-[7px] font-semibold text-ink">
                            Daily Essentials
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <span className="text-[8px] font-bold text-ink">
                              ₹899
                            </span>

                            <div className="w-5 h-5 rounded-full bg-blue flex items-center justify-center">
                              <ArrowUpRight size={9} className="text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    SCREEN 3 — REAL BUSINESS DASHBOARD
                ================================================== */}

                <div className="absolute inset-0 bg-[#f7f9fc] animate-show-dashboard">
                  {/* Dashboard navbar */}
                  <div className="h-11 bg-white border-b border-border px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue flex items-center justify-center">
                        <LayoutDashboard size={12} className="text-white" />
                      </div>

                      <span className="text-[9px] font-bold text-ink">
                        Business Dashboard
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Bell size={11} className="text-slate" />

                      <div className="w-6 h-6 rounded-full bg-blue-soft flex items-center justify-center">
                        <UserRound size={11} className="text-blue" />
                      </div>
                    </div>
                  </div>

                  {/* Dashboard */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[14px] sm:text-[17px] font-bold text-ink">
                          Overview
                        </div>

                        <div className="text-[7px] text-slate mt-1">
                          Monitor your business in one place
                        </div>
                      </div>

                      <button className="rounded-lg border border-border bg-white px-2.5 py-1.5 text-[6px] text-slate">
                        This Month
                      </button>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-white border border-border rounded-xl p-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[6px] text-slate">Revenue</span>

                          <div className="w-5 h-5 rounded-md bg-blue-soft flex items-center justify-center">
                            <BarChart3 size={9} className="text-blue" />
                          </div>
                        </div>

                        <div className="text-[12px] font-bold text-ink mt-2">
                          ₹2.48L
                        </div>

                        <div className="text-[6px] text-green-600 mt-1">
                          ↑ 12.8% from last month
                        </div>
                      </div>

                      <div className="bg-white border border-border rounded-xl p-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[6px] text-slate">
                            Customers
                          </span>

                          <div className="w-5 h-5 rounded-md bg-blue-soft flex items-center justify-center">
                            <UserRound size={9} className="text-blue" />
                          </div>
                        </div>

                        <div className="text-[12px] font-bold text-ink mt-2">
                          1,248
                        </div>

                        <div className="text-[6px] text-green-600 mt-1">
                          ↑ 8.4% this month
                        </div>
                      </div>

                      <div className="bg-white border border-border rounded-xl p-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[6px] text-slate">Orders</span>

                          <div className="w-5 h-5 rounded-md bg-blue-soft flex items-center justify-center">
                            <ShoppingBag size={9} className="text-blue" />
                          </div>
                        </div>

                        <div className="text-[12px] font-bold text-ink mt-2">
                          856
                        </div>

                        <div className="text-[6px] text-green-600 mt-1">
                          ↑ 16.2% this month
                        </div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="mt-3 bg-white border border-border rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-[7px] font-bold text-ink">
                            Business Performance
                          </div>

                          <div className="text-[6px] text-slate mt-0.5">
                            Monthly overview
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue" />

                          <span className="text-[6px] text-slate">Growth</span>
                        </div>
                      </div>

                      <div className="flex items-end gap-1.5 h-[70px]">
                        <div className="w-full h-[32%] rounded-t bg-blue/15" />
                        <div className="w-full h-[45%] rounded-t bg-blue/20" />
                        <div className="w-full h-[40%] rounded-t bg-blue/25" />
                        <div className="w-full h-[58%] rounded-t bg-blue/35" />
                        <div className="w-full h-[65%] rounded-t bg-blue/45" />
                        <div className="w-full h-[78%] rounded-t bg-blue/65" />
                        <div className="w-full h-[94%] rounded-t bg-blue" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING MOBILE APP
            ================================================== */}

            <div className="absolute z-30 -bottom-4 right-1 sm:right-3 w-[88px] sm:w-[108px] rounded-[22px] bg-white border border-border shadow-2xl p-2 animate-phone-float">
              <div className="rounded-[16px] overflow-hidden bg-[#f8fafc]">
                {/* Mobile header */}
                <div className="h-9 bg-white px-2 flex items-center justify-between border-b border-border">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-blue flex items-center justify-center">
                      <span className="text-white text-[6px] font-bold">A</span>
                    </div>

                    <span className="text-[6px] font-bold text-ink">App</span>
                  </div>

                  <Bell size={9} className="text-slate" />
                </div>

                {/* Mobile app */}
                <div className="p-2">
                  <div className="rounded-xl bg-blue-soft p-2">
                    <div className="text-[6px] text-blue font-semibold">
                      Welcome back
                    </div>

                    <div className="text-[9px] font-bold text-ink mt-1">
                      Grow smarter.
                    </div>

                    <div className="mt-2 w-12 h-4 rounded-full bg-blue" />
                  </div>

                  <div className="text-[7px] font-bold text-ink mt-3 mb-2">
                    Quick Access
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="h-12 bg-white rounded-lg border border-border p-1.5">
                      <div className="w-5 h-5 rounded-md bg-blue-soft" />
                      <div className="w-8 h-1.5 rounded bg-slate/20 mt-2" />
                    </div>

                    <div className="h-12 bg-white rounded-lg border border-border p-1.5">
                      <div className="w-5 h-5 rounded-md bg-blue-soft" />
                      <div className="w-8 h-1.5 rounded bg-slate/20 mt-2" />
                    </div>
                  </div>

                  {/* Mobile bottom navigation */}
                  <div className="mt-3 h-7 bg-white rounded-lg border border-border flex items-center justify-around">
                    <div className="w-3 h-3 rounded bg-blue" />
                    <div className="w-3 h-3 rounded bg-slate/10" />
                    <div className="w-3 h-3 rounded bg-slate/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING PROJECT STATUS
            ================================================== */}

            <div className="absolute z-40 bottom-5 left-3 sm:left-5 bg-white rounded-xl shadow-xl border border-border px-3 py-2 animate-notification">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-soft flex items-center justify-center">
                  <Check size={14} className="text-blue" />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-ink">
                    Digital Experience
                  </p>

                  <p className="text-[8px] text-slate">
                    Designed for your business
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM PRODUCT FLOW
            ================================================== */}

            <div className="absolute z-30 bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur rounded-full px-4 py-2 shadow-lg border border-white">
              <span className="flex items-center gap-1 text-[8px] font-semibold text-ink">
                <Globe2 size={10} className="text-blue" />
                Website
              </span>

              <span className="text-blue text-[10px]">→</span>

              <span className="flex items-center gap-1 text-[8px] font-semibold text-ink">
                <Smartphone size={10} className="text-blue" />
                App
              </span>

              <span className="text-blue text-[10px]">→</span>

              <span className="flex items-center gap-1 text-[8px] font-semibold text-blue">
                <BarChart3 size={10} />
                Business
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
