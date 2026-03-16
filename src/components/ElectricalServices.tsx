"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   Voltage tiers
   ───────────────────────────────────────────── */

const voltageTiers = [
  {
    voltage: "11",
    unit: "kVA",
    label: "Distribution",
    scope: "Local industrial loads, drilling site power, community networks",
  },
  {
    voltage: "33",
    unit: "kVA",
    label: "Medium Voltage",
    scope:
      "Regional interconnection, substation step-down feeds, plant distribution",
  },
  {
    voltage: "132",
    unit: "kVA",
    label: "High Voltage",
    scope: "Major energy assets, industrial complexes, grid-level transmission",
  },
];

/* ─────────────────────────────────────────────
   Capabilities grid
   ───────────────────────────────────────────── */

const capabilities = [
  {
    title: "Switchgear & Protection",
    description:
      "Medium and high-voltage switchgear installation, protection relay programming, and arc-flash coordination studies.",
  },
  {
    title: "Cable Routing & Termination",
    description:
      "Underground and surface cable laying, tray installation, HV/MV cable jointing, stress cone terminations, and insulation testing.",
  },
  {
    title: "Transformer Installation",
    description:
      "Power transformer positioning, oil filling, winding ratio testing, tap-changer calibration, and thermal monitoring hookup.",
  },
  {
    title: "SCADA & Control Systems",
    description:
      "Supervisory control integration, RTU programming, fibre-optic communication networks, and remote monitoring dashboards.",
  },
  {
    title: "Earthing & Lightning",
    description:
      "Grounding grid design, earth resistance testing, lightning protection systems, and equipotential bonding for hazardous areas.",
  },
  {
    title: "Testing & Commissioning",
    description:
      "Primary & secondary injection, relay trip testing, insulation resistance, hi-pot testing, and full energization protocols.",
  },
];

/* ─────────────────────────────────────────────
   Delivery process
   ───────────────────────────────────────────── */

const process = [
  {
    step: "01",
    label: "Site Survey & Design",
    detail: "Load analysis, single-line diagrams, protection coordination",
  },
  {
    step: "02",
    label: "Civil & Structural",
    detail: "Foundations, cable trenching, control room construction",
  },
  {
    step: "03",
    label: "Installation",
    detail: "Equipment mounting, cable pulling, bus-bar assembly",
  },
  {
    step: "04",
    label: "Wiring & Termination",
    detail: "Control wiring, CT/VT connections, marshalling",
  },
  {
    step: "05",
    label: "Testing",
    detail: "Primary injection, relay testing, insulation verification",
  },
  {
    step: "06",
    label: "Commissioning",
    detail: "Energization, load testing, handover documentation",
  },
];

/* ═════════════════════════════════════════════
   COMPONENT
   ═════════════════════════════════════════════ */

export default function ElectricalServices() {
  return (
    <section id="electrical" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════
          ZONE 1 — Voltage Tier Cards
         ═══════════════════════════════════════ */}
      <div className="py-16 bg-bg lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {voltageTiers.map((tier) => (
              <div
                key={tier.voltage}
                className="group border border-border bg-surface p-8 transition-colors duration-300 hover:border-accent/40 lg:p-10"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-[3rem] font-extralight leading-none tracking-tighter text-heading transition-colors duration-300 group-hover:text-accent lg:text-[3.5rem]">
                    {tier.voltage}
                  </span>
                  <span className="text-[14px] font-medium text-muted">
                    {tier.unit}
                  </span>
                </div>
                <span className="mt-2 block text-[10px] font-semibold tracking-[0.25em] text-accent uppercase">
                  {tier.label}
                </span>
                <p className="mt-4 text-[13px] leading-relaxed text-muted">
                  {tier.scope}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 2 — Overhead Lines + Substation (split editorial)
         ═══════════════════════════════════════ */}
      <div className="bg-bg py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section A — Overhead Line Construction */}
          <div className="grid items-stretch border-b border-border lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-72 bg-bg lg:min-h-96">
              <Image
                src="https://placehold.co/800x600/E8E4E0/3D3D3D?text=ILLUSTRATION%0AOverhead+power+lines%0Atransmission+towers%0Aacross+terrain%0A(panoramic+pencil+sketch)"
                alt="Overhead power line construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 bg-primary px-5 py-3">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-light uppercase">
                  Transmission & Distribution
                </span>
              </div>
            </div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center px-8 py-14 lg:px-16 lg:py-20"
            >
              <span className="mb-2 font-mono text-[11px] text-accent/40">
                04.01
              </span>
              <h3 className="text-[1.5rem] font-light tracking-tight text-heading md:text-[1.75rem]">
                Overhead Line Construction
              </h3>
              <p className="mt-5 text-[15px] leading-[1.85] text-body">
                Our line construction crews handle the full scope — route
                survey, tower erection, conductor stringing, tensioning, and
                commissioning. We build overhead power lines that connect
                generation sources to substations and substations to end users,
                engineered for harsh climates and challenging terrain.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Route survey",
                  "Tower erection",
                  "Conductor stringing",
                  "Line commissioning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-[12px] text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Section B — Substation Construction */}
          <div className="grid items-stretch lg:grid-cols-2">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center px-8 py-14 lg:px-16 lg:py-20"
            >
              <span className="mb-2 font-mono text-[11px] text-accent/40">
                04.02
              </span>
              <h3 className="text-[1.5rem] font-light tracking-tight text-heading md:text-[1.75rem]">
                Substation Construction & Integration
              </h3>
              <p className="mt-5 text-[15px] leading-[1.85] text-body">
                We deliver substations from foundation to energization — civil
                works, transformer installation, bus-bar assembly, switchgear
                fitting, protection system configuration, and full
                commissioning. Every substation is built to international
                standards with rigorous safety compliance and thorough testing
                before handover.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Civil & structural",
                  "Bus-bar assembly",
                  "Protection config",
                  "Commissioning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-[12px] text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <div className="relative min-h-72 bg-bg lg:min-h-96">
              <Image
                src="https://placehold.co/800x600/E8E4E0/3D3D3D?text=ILLUSTRATION%0AElectrical+substation%0Atransformer+yard+%26%0Acontrol+building%0A(architectural+pencil+sketch)"
                alt="Electrical substation with transformer yard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 right-0 bg-primary px-5 py-3">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-light uppercase">
                  Complete Substation Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 3 — Capabilities Grid (6-cell)
         ═══════════════════════════════════════ */}
      <div className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                Technical Capabilities
              </span>
              <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
                End-to-end E&I competencies
              </h3>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-muted">
              From protection coordination to SCADA integration — the full
              electrical & instrumentation skillset under one roof.
            </p>
          </motion.div>

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-surface p-7 lg:p-9"
              >
                <span className="mb-3 block font-mono text-[10px] text-accent/40">
                  0{i + 1}
                </span>
                <h4 className="text-[15px] font-medium tracking-tight text-heading">
                  {cap.title}
                </h4>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 4 — Delivery Process (horizontal flow)
         ═══════════════════════════════════════ */}
      <div className="relative bg-primary">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="hatch-pattern h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14 text-center lg:mb-16"
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              Project Delivery
            </span>
            <h3 className="mt-3 text-2xl font-extralight tracking-tight text-white md:text-3xl">
              Survey to energization
            </h3>
          </motion.div>

          {/* Process steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-5 right-0 left-0 hidden h-px bg-white/10 lg:block" />

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {process.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-white/15 bg-primary">
                    <span className="font-mono text-[11px] font-medium text-accent">
                      {item.step}
                    </span>
                  </div>
                  <span className="mt-4 text-[12px] font-medium leading-snug text-white">
                    {item.label}
                  </span>
                  <span className="mt-1.5 text-[11px] leading-snug text-white/35">
                    {item.detail}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-start gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between"
          >
            <p className="max-w-lg text-[14px] leading-relaxed text-white/40">
              From 11kVA distribution to 132kVA high-voltage substations — we
              deliver the electrical backbone that powers critical energy
              infrastructure.
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold tracking-wide text-accent-light transition-colors hover:text-white"
            >
              Discuss Your E&I Requirements
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
