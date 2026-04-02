"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   Pillars
   ───────────────────────────────────────────── */

const pillars = [
  { word: "Uptime", desc: "Zero unplanned downtime through embedded crews" },
  { word: "Precision", desc: "OEM-spec restoration in controlled workshops" },
  { word: "Longevity", desc: "Data-driven PM programs that extend asset life" },
];

/* ─────────────────────────────────────────────
   Active Rig Support — capabilities
   ───────────────────────────────────────────── */

const fieldCapabilities = [
  { icon: "24/7", label: "On-site crews", detail: "Round-the-clock field maintenance for active rigs" },
  { icon: "< 2h", label: "Response time", detail: "Emergency breakdown response with rapid repair" },
  { icon: "100%", label: "Logged", detail: "Every intervention tracked & fed into predictive models" },
  { icon: "365", label: "Days coverage", detail: "Continuous support regardless of season or schedule" },
];

/* ─────────────────────────────────────────────
   Component Overhaul — parts catalog
   ───────────────────────────────────────────── */

const components = [
  {
    name: "Mud Pumps",
    scope: "Fluid End & Power End",
    tasks: [
      "Complete teardown & inspection",
      "Crankshaft & crosshead evaluation",
      "Bearing & seal replacement",
      "Full-pressure testing",
    ],
    image:
      "/img/rig-mn/mud.webp",
  },
  {
    name: "Draw-Works",
    scope: "Gearbox & Brake Systems",
    tasks: [
      "Gear train disassembly & measurement",
      "Bearing & clutch pack replacement",
      "Brake band inspection & resurfacing",
      "Load-test before return to service",
    ],
    image:
      "/img/rig-mn/draw.webp",
  },
  {
    name: "Rotary Tables",
    scope: "Drive Assembly & Bearings",
    tasks: [
      "Master bushing & pin-drive inspection",
      "Main bearing replacement",
      "Sprocket & chain drive overhaul",
      "Run-out & torque verification",
    ],
    image:
      "/img/rig-mn/rotary.webp",
  },
  {
    name: "Engines & Aux",
    scope: "Power Packs & Generators",
    tasks: [
      "Engine teardown & cylinder honing",
      "Turbocharger rebuild & balancing",
      "Generator winding inspection",
      "Performance dyno testing",
    ],
    image:
      "/img/rig-mn/engine.webp",
  },
];

/* ─────────────────────────────────────────────
   Preventative Maintenance — schedule tiers
   ───────────────────────────────────────────── */

const pmTiers = [
  {
    interval: "Daily",
    color: "bg-accent/20",
    items: ["Visual walk-around inspection", "Fluid level checks", "Pressure & temperature logging"],
  },
  {
    interval: "Weekly",
    color: "bg-accent/35",
    items: ["Lubrication schedule execution", "Belt & hose inspection", "Safety device function test"],
  },
  {
    interval: "Monthly",
    color: "bg-accent/50",
    items: ["Vibration analysis on rotating equipment", "Oil sampling & lab analysis", "Calibration verification"],
  },
  {
    interval: "Quarterly",
    color: "bg-accent/70",
    items: ["Major component condition assessment", "Structural NDT inspection", "PM compliance audit & trend report"],
  },
];

/* ═════════════════════════════════════════════
   COMPONENT
   ═════════════════════════════════════════════ */

export default function RigMaintenance() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const overlayY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="maintenance" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════
          ZONE 1 — Three Pillars
         ═══════════════════════════════════════ */}
      <div className="py-16 bg-surface-2 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-px border border-border bg-border sm:grid-cols-3"
          >
            {pillars.map((p) => (
              <div key={p.word} className="bg-surface px-8 py-8 lg:px-10 lg:py-10">
                <span className="text-[1.4rem] font-extralight tracking-tight text-heading lg:text-[1.6rem]">
                  {p.word}
                </span>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {p.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 2 — Active Rig Support (immersive panel)
         ═══════════════════════════════════════ */}
      <div ref={parallaxRef} className="relative">
        {/* Background image */}
        <div className="relative min-h-[520px] lg:min-h-[600px]">
          <Image
            src="/img/rig-mn.webp"
            alt="Maintenance crew servicing an active drilling rig"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

          {/* Content overlay */}
          <motion.div
            style={{ y: overlayY }}
            className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 lg:min-h-[600px] lg:px-8"
          >
            <div className="max-w-2xl py-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="mb-2 block font-mono text-[11px] tracking-[0.3em] text-accent/50">
                  03.01
                </span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                  Active Rig Support
                </span>
                <h3 className="mt-3 text-[1.75rem] font-light tracking-tight text-white md:text-[2.25rem]">
                  O&M of Drilling & Workover Rigs
                </h3>
                <p className="mt-6 text-[15px] leading-[1.85] text-white/60">
                  Our Operations & Maintenance (O&M) services ensure optimal
                  performance and longevity of drilling and workover rigs. We
                  focus on minimizing downtime, improving efficiency, and
                  maintaining the highest safety standards.
                </p>
                <p className="mt-4 text-[14px] leading-[1.85] text-white/45">
                  From daily inspections and fluid analysis to emergency
                  breakdown response, we provide the operational backbone that
                  prevents minor issues from becoming costly shutdowns. Every
                  intervention is logged, tracked, and fed into predictive
                  maintenance models.
                </p>
              </motion.div>

              {/* Capability counters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
              >
                {fieldCapabilities.map((cap) => (
                  <div key={cap.label}>
                    <span className="text-[1.5rem] font-light tracking-tight text-accent-light lg:text-[1.75rem]">
                      {cap.icon}
                    </span>
                    <span className="mt-1 block text-[11px] font-semibold tracking-[0.15em] text-white/40 uppercase">
                      {cap.label}
                    </span>
                    <span className="mt-1.5 block text-[12px] leading-snug text-white/30">
                      {cap.detail}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 3 — Component Overhaul (parts catalog)
         ═══════════════════════════════════════ */}
      <div className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="mb-2 block font-mono text-[11px] tracking-[0.3em] text-accent/40">
                03.02
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                Workshop-Level Restoration
              </span>
              <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
                Component Overhaul & Repair
              </h3>
            </div>
            <p className="max-w-md text-[13px] leading-relaxed text-muted">
              Full disassembly, inspection, machining, reassembly, and testing
              — restoring major rig components to OEM specifications. Every
              rebuilt unit ships with detailed inspection reports and warranty.
            </p>
          </motion.div>

          {/* Parts catalog cards — tall vertical */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {components.map((comp, i) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex flex-col border border-border bg-surface transition-colors duration-300 hover:border-accent/40"
              >
                {/* Component image */}
                <div className="relative aspect-[5/7] overflow-hidden bg-surface-2">
                  <Image
                    src={comp.image}
                    alt={comp.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col px-5 pt-5 pb-6">
                  <h4 className="text-[17px] font-medium tracking-tight text-heading">
                    {comp.name}
                  </h4>
                  <span className="mt-1 text-[11px] font-medium tracking-[0.1em] text-accent uppercase">
                    {comp.scope}
                  </span>

                  <ul className="mt-4 flex-1 space-y-2">
                    {comp.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex items-start gap-2 text-[12px] leading-snug text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 4 — Preventative Maintenance (schedule tiers)
         ═══════════════════════════════════════ */}
      <div className="section-padding bg-surface-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            {/* Left — description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="mb-2 block font-mono text-[11px] tracking-[0.3em] text-accent/40">
                03.03
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                Scheduled Asset Care
              </span>
              <h3 className="mt-3 text-[1.65rem] font-light tracking-tight text-heading md:text-[1.85rem]">
                Preventative Maintenance Programs
              </h3>
              <p className="mt-6 text-[15px] leading-[1.9] text-body">
                The most expensive maintenance is the kind you didn&apos;t plan
                for. Our preventative programs replace reactive firefighting with
                structured, data-driven schedules that catch wear and
                degradation before they cause failures.
              </p>
              <p className="mt-4 text-[15px] leading-[1.9] text-body">
                We design PM programs tailored to each rig&apos;s configuration,
                operating environment, and utilization rate — defining inspection
                intervals, lubrication schedules, component replacement
                timelines, and calibration requirements across every major
                system.
              </p>

              {/* Outcomes */}
              <div className="mt-10 space-y-3">
                {[
                  "Custom schedule per rig configuration",
                  "Digital compliance tracking & trend reports",
                  "Significantly lower total cost of ownership",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-[13px] leading-snug text-muted">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Interval schedule tiers */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-0"
            >
              {pmTiers.map((tier, i) => (
                <div
                  key={tier.interval}
                  className={`border-t border-border px-6 py-7 lg:px-8 lg:py-8 ${
                    i === pmTiers.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${tier.color}`}
                    />
                    <span className="text-[15px] font-medium tracking-tight text-heading">
                      {tier.interval}
                    </span>
                  </div>
                  <div className="grid gap-x-6 gap-y-2 sm:grid-cols-3">
                    {tier.items.map((item) => (
                      <span
                        key={item}
                        className="text-[13px] leading-relaxed text-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Closing CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col items-start gap-8 border-t border-border pt-10 md:flex-row md:items-center md:justify-between"
          >
            <p className="max-w-lg text-[14px] leading-relaxed text-muted">
              Our expert technicians ensure all equipment operates at peak
              performance through comprehensive servicing, routine preventative
              programs, and corrective repairs — keeping your drilling
              operations running without interruption.
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold tracking-wide text-accent transition-colors hover:text-accent-light"
            >
              Discuss Your Maintenance Requirements
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
