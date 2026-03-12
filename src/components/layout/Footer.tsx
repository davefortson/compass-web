"use client";

import { CompassLogo } from "../ui/CompassLogo";

const footerLinks = [
  { label: "Platform", href: "#how-it-works" },
  { label: "Regen Network", href: "https://regen.network" },
  { label: "Privacy", href: "#" },
  { label: "Contact", href: "#lead-capture" },
];

const socialLinks = [
  { label: "Twitter/X", href: "https://twitter.com/raborygen" },
  { label: "LinkedIn", href: "https://linkedin.com/company/regen-network" },
  { label: "GitHub", href: "https://github.com/regen-network" },
];

export default function Footer() {
  return (
    <footer className="bg-[#202020] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <CompassLogo size={32} light />
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-white/60 hover:text-white transition-colors"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Tagline */}
        <p className="font-body text-sm text-white/50 mt-8">
          Impact intelligence for every domain.
        </p>
        <p className="font-body text-base text-white/40 mt-1">
          Intelligence built for impact that lasts.
        </p>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/30">
            &copy; 2026 Regen Network Development, PBC
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-white/40 hover:text-brand-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
