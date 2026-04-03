"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, Drill, Cog, Wrench, Zap, ConstructionIcon } from "lucide-react";
import { services } from "@/lib/services";
import type { IconName } from "@/lib/services";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<IconName, LucideIcon> = {
  Drill,
  Cog,
  Wrench,
  Zap,
  ConstructionIcon,
};

const navLinks = [
  // { href: "/#expertise", label: "Expertise" },
  { href: "/#why-us", label: "Why SSPS" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveService(0);
    setServicesOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      {/* Top accent bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-accent" />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo — wider mark with seven stars motif */}
          <Link href="/" className="group flex items-center gap-3">
            <div
              className={`relative flex h-9 w-14 items-center justify-center border transition-all duration-300 ${
                scrolled
                  ? "border-primary bg-primary"
                  : "border-white/20 bg-white/5"
              }`}
            >
              {/* Seven dots (stars) arranged in a row */}
              <div className="flex gap-[3px]">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span
                    key={i}
                    className={`block h-[3px] w-[3px] rounded-full transition-colors duration-300 ${
                      scrolled ? "bg-accent-light" : "bg-accent"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-[15px] font-semibold tracking-[0.12em] transition-colors duration-300 ${
                  scrolled ? "text-heading" : "text-white"
                }`}
              >
                SSPS
              </span>
              <span
                className={`hidden text-[8px] font-medium tracking-[0.15em] uppercase sm:block transition-colors duration-300 ${
                  scrolled ? "text-muted" : "text-white/50"
                }`}
              >
                Seven Star Petroleum LLC
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-0.5 md:flex">
            {/* About link (before Services) */}
            <Link
              href="/#about"
              className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-body hover:text-heading"
                  : "text-white/70 hover:text-white"
              }`}
            >
              About
            </Link>

            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link
                href="/#services"
                className={`relative flex items-center gap-1 px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-body hover:text-heading"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Services
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full mt-2 w-[260px] border border-border bg-surface shadow-xl"
                  >
                    {/* Arrow */}
                    <div className="absolute -top-[5px] left-8 h-2.5 w-2.5 rotate-45 border-l border-t border-border bg-surface" />

                    <div className="relative py-1.5">
                      {services.map((service, i) => {
                        const Icon = iconMap[service.iconName];
                        const isActive = activeService === i;
                        return (
                          <div
                            key={service.slug}
                            className="relative"
                            onMouseEnter={() => setActiveService(i)}
                          >
                            <Link
                              href={`/services/${service.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className={`group/item flex items-center gap-2.5 px-4 py-2 transition-colors duration-100 ${
                                isActive ? "bg-bg" : "hover:bg-bg"
                              }`}
                            >
                              <div className={`flex h-6 w-6 shrink-0 items-center justify-center border transition-colors ${
                                isActive
                                  ? "border-accent/40 bg-accent-subtle"
                                  : "border-border group-hover/item:border-accent/30"
                              }`}>
                                <Icon size={12} className={`transition-colors ${isActive ? "text-accent" : "text-muted group-hover/item:text-accent"}`} />
                              </div>
                              <span className={`flex-1 text-[12px] font-medium transition-colors ${
                                isActive ? "text-accent" : "text-heading"
                              }`}>
                                {service.title}
                              </span>
                              <ChevronRight size={11} className={`shrink-0 transition-colors ${
                                isActive ? "text-accent" : "text-muted/50"
                              }`} />
                            </Link>

                            {/* Sub-dropdown on hover */}
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, x: -4 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.12 }}
                                className="absolute left-full top-0 -ml-px w-[240px] border border-border bg-surface shadow-lg"
                              >
                                <div className="border-b border-border px-4 py-2.5">
                                  <span className="text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">
                                    {service.subtitle}
                                  </span>
                                </div>
                                <div className="py-1.5">
                                  {service.capabilities.map((cap) => (
                                    <Link
                                      key={cap.label}
                                      href={`/services/${service.slug}${cap.anchor ? `#${cap.anchor}` : ""}`}
                                      onClick={() => setServicesOpen(false)}
                                      className="flex items-center gap-2 px-4 py-1.5 text-[11px] text-body transition-colors hover:bg-bg hover:text-accent"
                                    >
                                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent/40" />
                                      {cap.label}
                                    </Link>
                                  ))}
                                </div>
                                <div className="border-t border-border px-4 py-2">
                                  <Link
                                    href={`/services/${service.slug}`}
                                    onClick={() => setServicesOpen(false)}
                                    className="inline-flex items-center gap-1 text-[11px] font-medium text-accent transition-colors hover:text-accent-light"
                                  >
                                    View Details <ArrowRight size={10} />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}

                      <div className="mx-3 mt-1 border-t border-border pt-1.5 pb-0.5">
                        <Link
                          href="/#services"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-2 px-1 py-1.5 text-[11px] font-medium text-accent transition-colors hover:text-accent-light"
                        >
                          All Services Overview <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-body hover:text-heading"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div
              className={`mx-4 h-5 w-px ${
                scrolled ? "bg-border" : "bg-white/15"
              }`}
            />
            <Link
              href="/#contact"
              className={`border px-7 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                scrolled
                  ? "border-accent bg-accent text-white hover:bg-accent-light"
                  : "border-accent/60 text-accent-light hover:border-accent hover:bg-accent hover:text-white"
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`p-3 md:hidden ${
              scrolled ? "text-heading" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border bg-bg/98 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col px-6 py-6">
                {/* About link */}
                <Link
                  href="/#about"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border/50 py-4 text-[14px] font-medium text-heading"
                >
                  About
                </Link>

                {/* Services accordion */}
                <div className="border-b border-border/50">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex w-full items-center justify-between py-4 text-[14px] font-medium text-heading"
                  >
                    Services
                    <ChevronDown
                      size={14}
                      className={`text-muted transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-0.5 pb-4 pl-2">
                          {services.map((service) => {
                            const Icon = iconMap[service.iconName];
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                                className="flex items-center gap-3 rounded px-3 py-2.5 transition-colors hover:bg-surface"
                              >
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-border">
                                  <Icon size={13} className="text-accent" />
                                </div>
                                <div>
                                  <span className="block text-[13px] font-medium text-body">
                                    {service.title}
                                  </span>
                                  <span className="block text-[10px] tracking-wide text-muted uppercase">
                                    {service.subtitle}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-border/50 py-4 text-[14px] font-medium text-heading"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 border border-accent bg-accent px-6 py-3.5 text-center text-[12px] font-semibold tracking-[0.1em] uppercase text-white"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
