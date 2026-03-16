"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Drilling & Wells", href: "/#services" },
    { label: "Equipment Trading", href: "/#services" },
    { label: "Maintenance & Support", href: "/#services" },
    { label: "E&I Services", href: "/#services" },
    { label: "Pipeline Construction", href: "/#services" },
  ],
  Expertise: [
    { label: "Oil Well Drilling", href: "/#expertise" },
    { label: "Water Well Drilling", href: "/#expertise" },
    { label: "Mining Well Drilling", href: "/#expertise" },
    { label: "Rig Fleet (550–2000HP)", href: "/#expertise" },
    { label: "Well Interventions", href: "/#expertise" },
  ],
  Company: [
    { label: "About SSPS", href: "/#about" },
    { label: "Why SSPS", href: "/#why-us" },
    { label: "Contact", href: "/#contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary px-6 pb-8 pt-16 text-white lg:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Top accent line */}
        <div className="mb-12 h-[2px] w-16 bg-accent" />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-14 items-center justify-center border border-white/15">
                <div className="flex gap-[3px]">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className="block h-[3px] w-[3px] rounded-full bg-accent"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold tracking-[0.12em] text-white">
                  SSPS
                </span>
                <span className="text-[8px] font-medium tracking-[0.15em] uppercase text-white/40">
                  Seven Star Petroleum Services
                </span>
              </div>
            </Link>
            <p className="mb-6 max-w-xs text-[13px] leading-relaxed text-white/45">
              Full-spectrum petroleum services — drilling, equipment supply,
              maintenance, electrical infrastructure, and pipeline construction
              across the Sultanate of Oman.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-medium tracking-[0.15em] text-white/25 uppercase">
              <span>Safety</span>
              <span className="h-px w-3 bg-accent/40" />
              <span>Reliability</span>
              <span className="h-px w-3 bg-accent/40" />
              <span>Excellence</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-5 text-[10px] font-semibold tracking-[0.3em] uppercase text-white/35">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} Seven Star Petroleum Services LLC. All
            rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 border border-white/15 px-4 py-2 text-[10px] font-medium tracking-[0.15em] uppercase text-white/40 transition-all duration-300 hover:border-white/30 hover:text-white"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
