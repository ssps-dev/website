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
    unit: "kV",
    label: "Distribution",
    scope: "Local industrial loads, drilling site power, community networks",
  },
  {
    voltage: "33",
    unit: "kV",
    label: "Medium Voltage",
    scope:
      "Regional interconnection, substation step-down feeds, plant distribution",
  },
  {
    voltage: "132",
    unit: "kV",
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
      <div className="py-10 bg-bg lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {voltageTiers.map((tier) => (
              <div
                key={tier.voltage}
                className="group border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40 lg:p-8"
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
                <p className="mt-3 text-justify text-[13px] leading-relaxed text-muted">
                  {tier.scope}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 2 — Overhead Lines + Substation (cards with image on top)
         ═══════════════════════════════════════ */}
      <div id="overhead-lines" className="scroll-mt-20 bg-bg py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Card A — Overhead Line Construction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col border border-border bg-surface transition-colors duration-300 hover:border-accent/40"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                <Image
                  src="/img/overhead.webp"
                  alt="Overhead power line construction"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 bg-primary px-5 py-3">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-light uppercase">
                    Transmission & Distribution
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col px-6 pt-6 pb-8">
                <span className="mb-3 font-mono text-[11px] text-accent/40">
                  04.01
                </span>
                <h3 className="text-xl font-light tracking-tight text-heading">
                  Overhead Line Construction
                </h3>
                <p className="mt-3 text-justify text-[14px] leading-[1.85] text-body">
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
              </div>
            </motion.div>

            {/* Card B — Substation Construction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col border border-border bg-surface transition-colors duration-300 hover:border-accent/40"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                <Image
                  src="/img/substation.webp"
                  alt="Electrical substation with transformer yard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 bg-primary px-5 py-3">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-light uppercase">
                    Complete Substation Delivery
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col px-6 pt-6 pb-8">
                <span className="mb-3 font-mono text-[11px] text-accent/40">
                  04.02
                </span>
                <h3 className="text-xl font-light tracking-tight text-heading">
                  Substation Construction & Integration
                </h3>
                <p className="mt-3 text-justify text-[14px] leading-[1.85] text-body">
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 3 — Capabilities Grid (6-cell)
         ═══════════════════════════════════════ */}
      <div id="switchgear-protection" className="scroll-mt-20 section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                Technical Capabilities
              </span>
              <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
                End-to-end E&I competencies
              </h3>
            </div>
            <p className="max-w-sm text-justify text-[13px] leading-relaxed text-muted">
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
                className="bg-surface p-5 lg:p-7"
              >
                <span className="mb-3 block font-mono text-[10px] text-accent/40">
                  0{i + 1}
                </span>
                <h4 className="text-[16px] font-medium tracking-tight text-heading">
                  {cap.title}
                </h4>
                <p className="mt-2 text-justify text-[13px] leading-relaxed text-muted">
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

        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 text-center lg:mb-10"
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
            className="mt-10 flex flex-col items-start gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between"
          >
            <p className="max-w-lg text-justify text-[14px] leading-relaxed text-white/40">
              From 11kV distribution to 132kV high-voltage substations — we
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

      {/* ═══════════════════════════════════════
          ZONE 5 — Piping Materials
         ═══════════════════════════════════════ */}
      <div id="industrial-piping" className="scroll-mt-20 bg-bg py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              Piping Materials
            </span>
            <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
              Supply & installation of industrial piping
            </h3>
            <p className="mt-3 text-justify max-w-xl text-[13px] leading-relaxed text-muted">
              We work across a range of pipe materials suited to varying
              pressure, chemical, and burial requirements.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
            {[
              {
                code: "DI",
                name: "Ductile Iron",
                notes: [
                  "High tensile strength",
                  "Pressure & water mains",
                  "Corrosion-lined variants",
                ],
              },
              {
                code: "HDPE",
                name: "High-Density Polyethylene",
                notes: [
                  "Flexible & lightweight",
                  "Chemical resistance",
                  "Butt & electrofusion welding",
                ],
              },
              {
                code: "LDPE",
                name: "Low-Density Polyethylene",
                notes: [
                  "Low-pressure applications",
                  "High flexibility",
                  "Agricultural & utility runs",
                ],
              },
            ].map((mat, i) => (
              <motion.div
                key={mat.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-surface p-5 lg:p-7"
              >
                <span className="font-mono text-[10px] text-accent/40">
                  {mat.code}
                </span>
                <h4 className="mt-2 text-[16px] font-medium tracking-tight text-heading">
                  {mat.name}
                </h4>
                <ul className="mt-4 space-y-2">
                  {mat.notes.map((note) => (
                    <li key={note} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-[12px] text-muted">{note}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 6 — Installations
         ═══════════════════════════════════════ */}
      <div id="electrical-installations" className="scroll-mt-20 bg-surface py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-10"
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              Installations
            </span>
            <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
              Comprehensive electrical installations
            </h3>
            <p className="mt-3 text-justify max-w-xl text-[13px] leading-relaxed text-muted">
              Full-scope installation services covering electrification,
              instrumentation, automation, and specialised systems for industrial
              and oilfield facilities.
            </p>
          </motion.div>

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Internal / External Electrification", desc: "Complete wiring, lighting, and power distribution for buildings, plants, and outdoor facilities." },
              { title: "Earthing", desc: "Grounding grid installation, earth pit construction, and resistance testing for safe fault-current dissipation." },
              { title: "Instrumentation Works", desc: "Installation and calibration of field instruments, transmitters, control valves, and process sensors." },
              { title: "HT / LT Work", desc: "High-tension and low-tension switchgear assembly, bus-bar fitting, and panel termination across voltage levels." },
              { title: "HT and LT Cable Laying & Jointing", desc: "Underground and surface cable routing, stress-cone jointing, termination kits, and insulation testing." },
              { title: "Transformer Oil Filtration", desc: "Degassing, dehydration, and filtration of transformer oil to restore dielectric strength and extend service life." },
              { title: "PCC / MCC / Automation (PLC) Panels", desc: "Fabrication, wiring, and integration of power control, motor control, and PLC-based automation panels." },
              { title: "Fire Alarm / Detection", desc: "Conventional and addressable fire alarm systems — smoke detectors, heat sensors, hooters, and control panels." },
              { title: "Telephone / EPABX", desc: "Private branch exchange systems, structured cabling, and internal telephone network installation." },
              { title: "Security / CCTV / Access Control", desc: "IP and analogue camera systems, NVR/DVR setup, biometric access, and perimeter intrusion detection." },
              { title: "Diesel Generator Sets", desc: "Supply, installation, load-bank testing, and commissioning of DG sets for standby and prime power applications." },
              { title: "Audio–Video & Projection Systems", desc: "Conference room AV integration, PA systems, projector installation, and multi-display setups." },
              { title: "High-Mast Lighting", desc: "Design, foundation, pole erection, and luminaire mounting for large-area outdoor illumination." },
              { title: "Power Factor Correction", desc: "Capacitor bank installation, automatic PF controllers, and harmonic filter integration to optimise energy usage." },
              { title: "Energy Conservation / Management", desc: "Energy audits, smart metering, load management systems, and efficiency improvement solutions." },
              { title: "Motor Control & Power Control Centers", desc: "MCC and PCC panel erection, VFD integration, soft-starter wiring, and bus-coupler configuration." },
              { title: "Industrial Automation", desc: "PLC/SCADA programming, HMI configuration, DCS integration, and automated process control systems." },
              { title: "DG Sets & Machinery — Supply to Commissioning", desc: "End-to-end supply, installation, testing, and commissioning of various-rated diesel generator sets and rotating machinery." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                viewport={{ once: true }}
                className="bg-bg p-4 lg:p-6"
              >
                <span className="mb-2 block font-mono text-[10px] text-accent/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[14px] font-medium tracking-tight text-heading">
                  {item.title}
                </h4>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          ZONE 7 — Erection & Commissioning
         ═══════════════════════════════════════ */}
      <div id="panel-erection" className="scroll-mt-20 bg-bg py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-10"
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              Erection & Commissioning
            </span>
            <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
              Panel erection & system commissioning
            </h3>
            <p className="mt-3 text-justify max-w-xl text-[13px] leading-relaxed text-muted">
              End-to-end erection and commissioning of electrical panels, poles,
              distribution boards, and all instrumentation works.
            </p>
          </motion.div>

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "MCC Panels", desc: "Motor control center panel erection, starter wiring, VFD mounting, and load-run verification." },
              { title: "PCC Panels", desc: "Power control center installation including bus-bar assembly, breaker fitting, and protection relay setup." },
              { title: "Automation Panels", desc: "PLC / SCADA panel mounting, I/O termination, communication wiring, and loop-check testing." },
              { title: "Distribution Boards", desc: "Main and sub-distribution board installation, MCB/MCCB fitting, and load-balancing configuration." },
              { title: "M.S Poles and G.I Poles", desc: "Foundation casting, pole erection, cross-arm fitting, and conductor stringing for overhead distribution." },
              { title: "ATS, AMF, Synchronizing Panels", desc: "Automatic transfer switch, auto mains failure, and generator synchronizing panel installation and testing." },
              { title: "Full E&I Erection & Commissioning", desc: "Comprehensive erection and commissioning of all electrical and instrumentation systems — from cable laying to final energization." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-surface p-4 lg:p-6"
              >
                <span className="mb-2 block font-mono text-[10px] text-accent/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[14px] font-medium tracking-tight text-heading">
                  {item.title}
                </h4>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
