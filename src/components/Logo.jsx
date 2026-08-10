export default function Logo({ light = false, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill={light ? "#FFFFFF" : "#0B2A57"} />
        <path
          d="M9 22L16 8L23 22H19.5L16 15L12.5 22H9Z"
          fill={light ? "#0B2A57" : "#3E6FF0"}
        />
      </svg>
      <span
        className={`font-display font-extrabold tracking-tight text-lg leading-none ${
          light ? "text-white" : "text-ink"
        }`}
      >
        AVANTIQ<span className={light ? "text-cyan" : "text-blue"}>.</span>
      </span>
    </div>
  );
}
