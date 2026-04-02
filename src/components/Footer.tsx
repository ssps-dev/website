"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Drilling & Wells", href: "/services/drilling" },
    { label: "Equipment Trading", href: "/services/equipment-trading" },
    { label: "Maintenance & Support", href: "/services/rig-maintenance" },
    { label: "E&I Services", href: "/services/electrical" },
    { label: "Pipeline Construction", href: "/services/pipeline-construction" },
  ],
  Expertise: [
    { label: "Oil Well Drilling", href: "/services/drilling" },
    { label: "Water Well Drilling", href: "/services/drilling" },
    { label: "Mining Well Drilling", href: "/services/drilling" },
    { label: "Rig Fleet (550–2000HP)", href: "/services/drilling" },
    { label: "Well Interventions", href: "/services/drilling" },
  ],
  Company: [
    { label: "About SSPS", href: "/#about" },
    { label: "Why SSPS", href: "/#why-us" },
    { label: "Contact", href: "/#contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const contactItems = [
  { icon: MapPin, value: "Muscat, Sultanate of Oman" },
  { icon: Mail, value: "info@ssps.om", href: "mailto:info@ssps.om" },
  { icon: Phone, value: "+968 XXXX XXXX", href: "tel:+968XXXXXXXX" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary px-6 pb-8 pt-16 text-white lg:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Top accent line */}
        <div className="mb-12 h-[2px] w-16 bg-accent" />

        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
          {/* Brand + Contact */}
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
              Full-spectrum oilfield services — drilling, equipment supply,
              maintenance, electrical infrastructure, and pipeline construction
              across the Sultanate of Oman.
            </p>

            {/* Contact details */}
            <ul className="mb-6 space-y-2.5">
              {contactItems.map((item) => {
                const content = (
                  <span className="flex items-start gap-2.5 text-[12px] text-white/40 transition-colors duration-200 hover:text-white/70">
                    <item.icon size={13} className="mt-px shrink-0 text-accent/60" />
                    {item.value}
                  </span>
                );
                return (
                  <li key={item.value}>
                    {item.href ? (
                      <a href={item.href}>{content}</a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

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

        {/* Legal strip */}
        <div className="mt-12 border-t border-white/8 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {/* Left — copyright + registration */}
            <div className="space-y-1.5">
              <p className="text-[11px] text-white/30">
                © {new Date().getFullYear()} Seven Star Petroleum Services LLC. All rights reserved.
              </p>
              <p className="text-[10px] text-white/20">
                Registered in the Sultanate of Oman · Commercial Registration No. XXXXXXXX ·
                Operating under the laws of the Sultanate of Oman
              </p>
            </div>

            {/* Right — legal links + back to top */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/privacy-policy"
                className="text-[10px] text-white/30 transition-colors duration-200 hover:text-white/60"
              >
                Privacy Policy
              </Link>
              <span className="h-3 w-px bg-white/15" />
              <Link
                href="/terms-of-service"
                className="text-[10px] text-white/30 transition-colors duration-200 hover:text-white/60"
              >
                Terms of Service
              </Link>
              <span className="h-3 w-px bg-white/15" />
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
        </div>
      </div>
    </footer>
  );
}

