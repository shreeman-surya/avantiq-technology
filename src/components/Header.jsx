import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { buildWhatsAppLink, buildGeneralMessage } from "../utils/contact";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur border-b transition-all ${
        scrolled ? "border-border shadow-soft" : "border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all ${
            scrolled ? "h-14" : "h-16 sm:h-20"
          }`}
        >
          <a href="#home" aria-label="AVANTIQ TECHNOLOGY home">
            <Logo />
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink/70 hover:text-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={buildWhatsAppLink(buildGeneralMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-full bg-blue text-white text-sm font-semibold px-5 py-2.5 hover:bg-navy transition"
            >
              Let's Talk
            </a>
            <button
              className="md:hidden p-2 -mr-2 text-ink"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-paper">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink/80 border-b border-border last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink(buildGeneralMessage())}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-blue text-white text-sm font-semibold px-4 py-2.5"
            >
              Let's Talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
