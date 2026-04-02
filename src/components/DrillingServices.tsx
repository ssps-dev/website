"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   Stats
   ───────────────────────────────────────────── */

const stats = [
  { value: "500+", label: "Wells Drilled" },
  { value: "550–2000", label: "HP Fleet Range" },
  { value: "24/7", label: "Field Operations" },
  { value: "25+", label: "Years Experience" },
];

/* ─────────────────────────────────────────────
   Well Types
   ───────────────────────────────────────────── */

const wellTypes = [
  {
    title: "Oil Well Drilling",
    description:
      "Precision directional and vertical drilling across proven hydrocarbon basins. Formation evaluation, optimized drill plans, and experienced crews delivering safe, efficient well completion.",
    stat: "Primary",
    statLabel: "Revenue Wells",
    image:
      "/img/drilling/derrick.webp",
  },
  {
    title: "Water Well Drilling",
    description:
      "Reliable water well drilling for industrial and community applications — aquifer identification, bore completion, pump installation, and sustainable yield optimization.",
    stat: "Essential",
    statLabel: "Infrastructure",
    image:
      "/img/drilling/water.webp",
  },
  {
    title: "Mining Well Drilling",
    description:
      "Specialized drilling for mineral exploration and extraction — core sampling, geological mapping, and bore placement tailored to complex geological formations.",
    stat: "Specialized",
    statLabel: "Exploration",
    image:
      "/img/drilling/mining.webp",
  },
];

/* ─────────────────────────────────────────────
   Rig Fleet
   ───────────────────────────────────────────── */

const rigs = [
  {
    hp: "550",
    unit: "HP",
    type: "Rig Services",
    tagline: "Rapid Deployment",
    description:
      "Compact, truck-mounted units for shallow drilling, light well servicing, and fast mobilization to remote locations.",
    specs: [
      { label: "Depth", value: "1,500m" },
      { label: "Mast", value: "Single telescope" },
      { label: "Mobility", value: "Truck-mounted" },
    ],
  },
  {
    hp: "1000",
    unit: "HP",
    type: "Rig Services",
    tagline: "Intermediate Power",
    description:
      "Medium-capacity rigs with enhanced mud handling and double-section masts for intermediate-depth operations.",
    specs: [
      { label: "Depth", value: "3,000m" },
      { label: "Mast", value: "Double section" },
      { label: "Mud System", value: "400 BBL" },
    ],
  },
  {
    hp: "1500",
    unit: "HP",
    type: "Workover Rig",
    tagline: "Heavy Intervention",
    description:
      "Heavy-duty workover rig for well re-entry, plug & abandonment, and medium-to-deep operations with full BOP stack.",
    specs: [
      { label: "Depth", value: "4,500m" },
      { label: "Mast", value: "Hydraulic double" },
      { label: "Control", value: "Full BOP stack" },
    ],
  },
  {
    hp: "2000",
    unit: "HP",
    type: "Workover Rig",
    tagline: "Maximum Capability",
    description:
      "Flagship rig for deep completions, multi-string workovers, and the most demanding wellbore operations.",
    specs: [
      { label: "Depth", value: "6,000m+" },
      { label: "Mast", value: "142ft cantilever" },
      { label: "Drive", value: "750HP AC top-drive" },
    ],
  },
];

/* ─────────────────────────────────────────────
   Interventions
   ───────────────────────────────────────────── */

const interventions = [
  {
    name: "Wireline Unit Services",
    description:
      "We offer advanced wireline services for well intervention, logging, and diagnostics. Our solutions help operators gain precise subsurface data and enhance well productivity.",
    detail: "Advanced well intervention, logging & diagnostics",
  },
  {
    name: "Slickline Unit Services",
    description:
      "Our slickline services are designed for efficient well maintenance and intervention. We handle tasks like tool deployment, well cleaning, and minor repairs with precision and reliability.",
    detail: "Efficient well maintenance & tool deployment",
  },
  {
    name: "Nitrogen Pumping Unit",
    description:
      "We provide nitrogen pumping services for well stimulation, purging, pressure testing, and pipeline cleaning. Our systems ensure safe and controlled operations in critical environments.",
    detail: "Well stimulation, purging & pressure testing",
  },
  {
    name: "Hydraulic Workover Units (HWU)",
    description:
      "Specialized services for well intervention and maintenance without removing the wellhead, ensuring faster and safer operations.",
    detail: "Well intervention without wellhead removal",
  },
  {
    name: "Coil Tubing Services",
    description:
      "Efficient solutions for well cleaning, stimulation, and intervention using continuous tubing technology.",
    detail: "Continuous tubing for cleaning & stimulation",
  },
  {
    name: "Cementing Units",
    description:
      "High-performance cementing services for well integrity, zonal isolation, and structural stability.",
    detail: "Well integrity & zonal isolation",
  },
  {
    name: "Mud Logging & Solids Control Systems",
    description:
      "Real-time monitoring of drilling parameters and effective solids control to optimize drilling performance.",
    detail: "Real-time drilling parameter monitoring",
  },
  {
    name: "Well Testing Equipment",
    description:
      "Comprehensive well testing services to evaluate reservoir performance and production potential.",
    detail: "Reservoir performance evaluation",
  },
  {
    name: "Air Compressor & Booster Units",
    description:
      "High-capacity air systems for drilling, cleaning, and pressure applications.",
    detail: "High-capacity air for drilling & pressure applications",
  },
  {
    name: "Diesel Generator (DG) Sets",
    description:
      "Reliable power backup and supply solutions for remote oilfield and industrial operations.",
    detail: "Power supply for remote oilfield operations",
  },
];

/* ─────────────────────────────────────────────
   Well Lifecycle Steps
   ───────────────────────────────────────────── */

const lifecycle = [
  { step: "01", label: "Site Survey & Planning" },
  { step: "02", label: "Rig Mobilization" },
  { step: "03", label: "Spudding & Drilling" },
  { step: "04", label: "Well Completion" },
  { step: "05", label: "Testing & Evaluation" },
  { step: "06", label: "Commissioning & Handover" },
];

/* ═════════════════════════════════════════════
   COMPONENT
   ═════════════════════════════════════════════ */

export default function DrillingServices() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="drilling" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════
          ZONE 2 — Well Types — Staggered Editorial
         ═══════════════════════════════════════ */}
      <div className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              What We Drill
            </span>
            <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
              Three disciplines. One crew standard.
            </h3>
          </motion.div>

          {/* Staggered well type cards */}
          <div className="space-y-0">
            {wellTypes.map((well, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={well.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, margin: "-5%" }}
                  className={`grid items-stretch border-t border-border lg:grid-cols-2 ${
                    i === wellTypes.length - 1 ? "border-b" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative min-h-[280px] bg-surface-2 lg:min-h-[360px] ${
                      isEven ? "order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    <Image
                      src={well.image}
                      alt={well.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Stat badge */}
                    <div className="absolute bottom-0 left-0 bg-primary px-5 py-3">
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-light uppercase">
                        {well.stat}
                      </span>
                      <span className="ml-2 text-[10px] tracking-[0.15em] text-white/50 uppercase">
                        {well.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-16 ${
                      isEven ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <span className="mb-3 font-mono text-[11px] text-accent/40">
                      01.0{i + 1}
                    </span>
                    <h4 className="text-[1.5rem] font-light tracking-tight text-heading md:text-[1.75rem]">
                      {well.title}
                    </h4>
                    <p className="mt-5 text-[15px] leading-[1.85] text-body">
                      {well.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 3 — Rig Fleet Showcase
         ═══════════════════════════════════════ */}
      <div ref={parallaxRef} className="section-padding bg-surface-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                Our Fleet
              </span>
              <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
                Four rigs. Every depth range covered.
              </h3>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-muted">
              From shallow water wells to 6,000m+ deep workovers — the right rig
              for every operation.
            </p>
          </motion.div>

          {/* Rig cards — product lineup style */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rigs.map((rig, i) => (
              <motion.div
                key={rig.hp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative flex flex-col border border-border bg-surface transition-colors duration-300 hover:border-accent/40"
              >
                {/* HP hero number */}
                <div className="flex flex-col items-center border-b border-border px-6 pt-10 pb-8">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[3.5rem] font-extralight leading-none tracking-tighter text-heading transition-colors duration-300 group-hover:text-accent">
                      {rig.hp}
                    </span>
                    <span className="text-[14px] font-medium text-muted">
                      {rig.unit}
                    </span>
                  </div>
                  <span className="mt-2 text-[10px] font-semibold tracking-[0.25em] text-accent uppercase">
                    {rig.type}
                  </span>
                  <span className="mt-1 text-[11px] text-muted">
                    {rig.tagline}
                  </span>
                </div>

                {/* Description */}
                <div className="flex-1 px-6 pt-6 pb-4">
                  <p className="text-[13px] leading-relaxed text-body">
                    {rig.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="mt-auto border-t border-border px-6 py-5">
                  {rig.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between py-1.5"
                    >
                      <span className="text-[11px] text-muted">
                        {spec.label}
                      </span>
                      <span className="text-[11px] font-medium text-heading">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 4 — Well Lifecycle Journey
         ═══════════════════════════════════════ */}
      <div className="bg-bg py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center lg:mb-16"
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              The Journey
            </span>
            <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
              From survey to handover
            </h3>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block" />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {lifecycle.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Dot */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-border bg-surface">
                    <span className="font-mono text-[12px] font-medium text-accent">
                      {item.step}
                    </span>
                  </div>
                  <span className="mt-4 text-[12px] font-medium leading-snug tracking-tight text-heading">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 5 — Well Testing & Commissioning
         ═══════════════════════════════════════ */}
      <div className="section-padding bg-surface-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="mb-2 block font-mono text-[11px] tracking-[0.3em] text-accent/40">
                01.04
              </span>
              <span className="mb-3 block text-[10px] font-semibold tracking-[0.25em] text-accent uppercase">
                Production Evaluation to Handover
              </span>
              <h3 className="text-[1.65rem] font-light tracking-tight text-heading md:text-[1.85rem]">
                Well Testing & Commissioning
              </h3>
              <p className="mt-6 text-[15px] leading-[1.9] text-body">
                A well isn&apos;t complete until it&apos;s proven. Our well
                testing division deploys fully equipped surface test packages —
                separators, heaters, burners, and real-time data acquisition
                systems — to evaluate reservoir deliverability, characterize
                production fluids, and determine optimal flow parameters.
              </p>
              <p className="mt-4 text-[15px] leading-[1.9] text-body">
                Commissioning extends beyond testing: we manage the entire
                transition from drilling mode to production mode — surface
                facility tie-in, safety system verification, production tree
                installation, flow optimization, and comprehensive handover
                documentation.
              </p>

              {/* Key deliverables */}
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Full-spread test equipment",
                  "Reservoir characterization",
                  "Surface tie-in & production tree",
                  "Safety verification & handover",
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

            {/* Right — Illustration with parallax */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                style={{ y: imageY }}
                className="relative aspect-[4/5] overflow-hidden bg-bg"
              >
                <Image
                  src="/img/drilling/testing.webp"
                  alt="Well testing and commissioning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 6 — Specialized Interventions — Bento Grid
         ═══════════════════════════════════════ */}
      <div className="section-padding bg-primary">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="hatch-pattern h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl lg:mb-20"
          >
            <span className="mb-2 block font-mono text-[11px] tracking-[0.3em] text-accent/50">
              01.05
            </span>
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              Our Drilling Services
            </span>
            <h3 className="mt-3 text-2xl font-extralight tracking-tight text-white md:text-3xl">
              Comprehensive solutions for every drilling challenge.
            </h3>
          </motion.div>

          {/* Services grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interventions.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between border border-white/10 bg-white/[0.04] p-6 lg:p-8"
              >
                <div>
                  <span className="font-mono text-[10px] text-accent/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 text-[16px] font-medium tracking-tight text-white">
                    {item.name}
                  </h4>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-white/10 pt-3">
                  <span className="text-[11px] font-medium text-accent-light">
                    {item.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-start gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between"
          >
            <p className="max-w-lg text-[14px] leading-relaxed text-white/40">
              Every intervention is planned, executed, and supervised by
              specialized field crews with decades of combined experience —
              ensuring maximum well productivity, operational safety, and
              regulatory compliance.
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold tracking-wide text-accent-light transition-colors hover:text-accent-lighter"
            >
              Discuss Your Drilling Requirements
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
