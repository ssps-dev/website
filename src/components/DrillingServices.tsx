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
  { value: "100–750", label: "HP Fleet Range" },
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
      "https://placehold.co/640x480/E8E4E0/3D3D3D?text=ILLUSTRATION%0AOil+well+drilling+rig%0Awith+derrick+%26+crew%0A(charcoal+pencil+sketch)",
  },
  {
    title: "Water Well Drilling",
    description:
      "Reliable water well drilling for industrial and community applications — aquifer identification, bore completion, pump installation, and sustainable yield optimization.",
    stat: "Essential",
    statLabel: "Infrastructure",
    image:
      "https://placehold.co/640x480/E8E4E0/3D3D3D?text=ILLUSTRATION%0AWater+well+drilling%0Abore+rig+in+arid+terrain%0A(pencil+sketch+style)",
  },
  {
    title: "Mining Well Drilling",
    description:
      "Specialized drilling for mineral exploration and extraction — core sampling, geological mapping, and bore placement tailored to complex geological formations.",
    stat: "Specialized",
    statLabel: "Exploration",
    image:
      "https://placehold.co/640x480/E8E4E0/3D3D3D?text=ILLUSTRATION%0AMining+exploration+drill%0Ain+rocky+terrain%0A(pencil+sketch+style)",
  },
];

/* ─────────────────────────────────────────────
   Rig Fleet
   ───────────────────────────────────────────── */

const rigs = [
  {
    hp: "1000",
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
    hp: "2000",
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
    hp: "550",
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
    hp: "750",
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
    name: "Slick Line",
    description:
      "Single-strand wire for downhole gauge operations, plug setting & retrieval, and flow control device manipulation.",
    detail: "Fastest, most cost-effective routine intervention",
  },
  {
    name: "Wire Line",
    description:
      "Multi-conductor braided cable for well logging, perforating, casing inspection, and cement bond evaluation.",
    detail: "Real-time electrical data for formation evaluation",
  },
  {
    name: "Coiled Tubing",
    description:
      "Continuous tubing for well cleanout, acid stimulation, nitrogen lifts, and milling operations.",
    detail: "Through-tubing without pulling completions",
  },
  {
    name: "Nitrogen Packaging",
    description:
      "High-pressure nitrogen for well unloading, foam cleanout, gas-lift kickoff, and wellbore displacement.",
    detail: "Continuous flow & slug applications on-site",
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
                  src="https://placehold.co/640x800/E8E4E0/3D3D3D?text=ILLUSTRATION%0AWell+testing+spread%0Aseparator+%26+burner%0Adata+monitoring+crew%0A(warm+pencil+sketch)"
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
              Specialized Interventions
            </span>
            <h3 className="mt-3 text-2xl font-extralight tracking-tight text-white md:text-3xl">
              Four techniques. Every downhole challenge covered.
            </h3>
          </motion.div>

          {/* Bento grid — 1 large + 3 stacked */}
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            {/* Large card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between border border-white/10 bg-white/[0.04] p-8 lg:p-12"
            >
              <div>
                <span className="font-mono text-[10px] text-accent/50">
                  05.01
                </span>
                <h4 className="mt-3 text-xl font-light tracking-tight text-white md:text-2xl">
                  {interventions[0].name}
                </h4>
                <p className="mt-5 text-[15px] leading-[1.85] text-white/55">
                  {interventions[0].description}
                </p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-5">
                <span className="text-[12px] font-medium text-accent-light">
                  {interventions[0].detail}
                </span>
              </div>
            </motion.div>

            {/* 3 stacked cards */}
            <div className="flex flex-col gap-4">
              {interventions.slice(1).map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i + 1) * 0.08 }}
                  viewport={{ once: true }}
                  className="flex-1 border border-white/10 bg-white/[0.04] p-6 lg:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[10px] text-accent/50">
                        05.0{i + 2}
                      </span>
                      <h4 className="mt-2 text-[16px] font-medium tracking-tight text-white">
                        {item.name}
                      </h4>
                      <p className="mt-3 text-[13px] leading-relaxed text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-white/10 pt-3">
                    <span className="text-[11px] font-medium text-accent-light">
                      {item.detail}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
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
