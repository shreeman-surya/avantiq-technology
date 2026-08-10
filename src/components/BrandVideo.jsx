import { Sparkles } from "lucide-react";

export default function BrandVideo() {
  return (
    <section className="bg-paper border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft text-blue text-xs font-semibold px-3.5 py-1.5">
            <Sparkles size={14} />
            AVANTIQ TECHNOLOGY
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-4">
            Technology Built for Business Growth.
          </h2>

          <p className="text-slate leading-relaxed mt-3">
            Discover how we create modern digital solutions that help businesses
            build, operate and grow.
          </p>
        </div>

        {/* Video */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-mist shadow-soft">
            <video
              src="/avantiq-solutions.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
            />

            {/* AVANTIQ Logo Overlay */}
            <div className="absolute bottom-6 right-2 sm:bottom-16 sm:right-8 pointer-events-none">
              <div className="flex items-center gap-1.5 sm:gap-3 rounded-md sm:rounded-xl bg-white/95 px-2 py-1.5 sm:px-3.5 sm:py-2.5 shadow-lg border border-white/80 backdrop-blur-sm">
                {/* AVANTIQ Icon */}
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-[6px] sm:rounded-[9px] bg-[#0b2b63] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 40 40"
                    className="w-4 h-4 sm:w-7 sm:h-7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Main A */}
                    <path
                      d="M20 6L8 32H13L20 17L27 32H32L20 6Z"
                      fill="#3167D8"
                    />

                    {/* Inner cut */}
                    <path
                      d="M14.8 27.2L20 16.2L25.2 27.2H20.8L20 25.2L19.2 27.2H14.8Z"
                      fill="#0B2B63"
                    />

                    {/* White diagonal accent */}
                    <path
                      d="M8.5 30.5L31.5 18.5"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Wordmark */}
                <div className="flex items-center leading-none">
                  <span className="text-[#142541] font-bold text-[11px] sm:text-[20px] tracking-[-0.045em]">
                    AVANTIQ
                  </span>

                  <span className="text-[#2F65D9] font-bold text-[11px] sm:text-[20px] ml-[1px]">
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
