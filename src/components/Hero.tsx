"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  Drill,
  Zap,
  ConstructionIcon,
  Wrench,
} from "lucide-react";

const capabilities = [
  {
    icon: Drill,
    num: "01",
    title: "Drilling & Wells",
    desc: "Oil, water & mining well drilling with 550HP–2000HP fleet",
  },
  {
    icon: ConstructionIcon,
    num: "02",
    title: "Pipeline Construction",
    desc: "End-to-end pipeline build from survey to commissioning",
  },
  {
    icon: Zap,
    num: "03",
    title: "E&I Infrastructure",
    desc: "11kV to 132kV substations & overhead line construction",
  },
  {
    icon: Wrench,
    num: "04",
    title: "Equipment & Maintenance",
    desc: "Rig components trading and 24/7 preventive servicing",
  },
];

const stats = [
  { value: "500+", label: "Wells Drilled" },
  { value: "25+", label: "Years Experience" },
  { value: "2000HP", label: "Max Rig Capacity" },
  { value: "50+", label: "Active Clients" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.85]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh overflow-hidden bg-primary"
    >
      {/* ── Background Video ── */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://placehold.co/720x480/E8E4E0/3D3D3D?text=Video+Unavailable"
          className="h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Overlays ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-1 bg-linear-to-b from-primary/85 via-primary/45 to-primary/90"
      />

      {/* ── Main Grid Content ── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-3 mx-auto grid min-h-svh max-w-7xl grid-rows-[1fr_auto] px-6 lg:px-8"
      >
        {/* ── Top: Two-column hero content ── */}
        <div className="grid items-center gap-12 pt-32 pb-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-24 lg:pb-0">
          {/* Left — Tagline & CTAs */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="h-px w-10 bg-accent" />
              <span className="text-[10px] font-semibold tracking-[0.4em] text-accent uppercase">
                Sultanate of Oman
              </span>
            </motion.div>

            {/* Tagline */}
            <div className="space-y-1">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h1 className="text-[clamp(2.6rem,6.5vw,5.5rem)] font-extralight tracking-[-0.03em] text-white leading-[1.2]">
                    Powering Oman&apos;s
                  </h1>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h1 className="text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.2] tracking-[-0.03em]">
                    <span className="font-light text-accent-light">
                      Energy Frontier
                    </span>
                    <span className="ml-3 inline-block h-2.5 w-2.5 rounded-full bg-accent" />
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="flex gap-0.75">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span
                    key={i}
                    className="block h-0.75 w-0.75 rounded-full bg-accent/60"
                  />
                ))}
              </div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-white/40 uppercase">
                Seven Star Petroleum Services
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 max-w-md text-[15px] leading-[1.75] font-light text-white/55"
            >
              Full-spectrum oilfield services — drilling, well interventions,
              pipeline construction, and high-voltage infrastructure. One
              partner for every stage of energy development.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="#services"
                className="group flex items-center gap-3 border border-accent bg-accent px-8 py-4 text-[11px] font-semibold tracking-[0.15em] text-white uppercase transition-all duration-300 hover:bg-accent-light"
              >
                Explore Services
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#contact"
                className="border border-white/20 bg-white/5 px-8 py-4 text-[11px] font-semibold tracking-[0.15em] text-white/80 uppercase backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>

          {/* Right — Capability cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="hidden lg:block"
          >
            <div className="divide-y divide-white/10 border-t border-white/10">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.num}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 1.2 + i * 0.1 }}
                  className="group flex items-start gap-5 py-5 transition-all duration-300 hover:pl-2"
                >
                  <span className="w-10 shrink-0 font-mono text-2xl font-light leading-none text-accent/40 pt-0.5">
                    {cap.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-[15px] font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-accent-light">
                        {cap.title}
                      </h3>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-accent/30 bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                        <cap.icon size={16} />
                      </div>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="border-t border-white/10 py-8"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <div className="text-[1.75rem] font-light tracking-tight text-accent">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-medium tracking-[0.2em] text-white/35 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Mobile capability cards (below main content on small screens) ── */}
      <div className="relative z-3 mx-auto max-w-7xl px-6 pb-8 lg:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="grid grid-cols-2 gap-3"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center border border-accent/30 bg-accent/10 text-accent">
                  <cap.icon size={17} />
                </div>
                <span className="font-mono text-xl font-light text-accent/30">{cap.num}</span>
              </div>
              <h3 className="text-sm font-semibold text-white/90">
                {cap.title}
              </h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/55">
                {cap.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
