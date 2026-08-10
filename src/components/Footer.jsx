import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import Logo from "./Logo";
import { company } from "../data/company";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  "Web Development",
  "Mobile Development",
  "Digital Marketing",
  "Social Media",
  "Advertising",
  "IT Solutions",
];

const socials = [
  { icon: LinkedinIcon, href: company.social.linkedin, label: "LinkedIn" },
  { icon: InstagramIcon, href: company.social.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: company.social.facebook, label: "Facebook" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/70 pb-20 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo light />
            <p className="text-xs font-semibold tracking-wide text-cyan mt-3">
              {company.tagline}
            </p>
            <p className="text-sm text-white/55 leading-relaxed mt-3 max-w-xs">
              Fast, customized and scalable digital solutions for businesses,
              startups and growing brands.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-3">Quick Links</p>
            <div className="flex flex-col gap-2 text-sm">
              {quickLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="hover:text-white transition-colors w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-3">Services</p>
            <div className="flex flex-col gap-2 text-sm">
              {serviceLinks.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-3">Contact</p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="hover:text-white transition-colors w-fit"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="hover:text-white transition-colors w-fit break-all"
              >
                {company.email}
              </a>
            </div>

            <div className="flex items-center gap-3 mt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/40">
          © {year} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
