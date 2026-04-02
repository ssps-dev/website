"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Construction phases — horizontal timeline
   ───────────────────────────────────────────── */

const phases = [
  { step: "01", label: "Route Survey", detail: "Terrain mapping, soil analysis, environmental clearance" },
  { step: "02", label: "Right-of-Way", detail: "Land clearing, grading, access road construction" },
  { step: "03", label: "Trenching", detail: "Mechanised excavation to engineered depth & profile" },
  { step: "04", label: "Stringing & Welding", detail: "Pipe layout, alignment, multi-pass welding" },
  { step: "05", label: "NDT & Coating", detail: "X-ray / ultrasonic inspection, joint coating" },
  { step: "06", label: "Lowering-In", detail: "Side-boom placement, padding, backfill" },
  { step: "07", label: "Testing", detail: "Hydrostatic pressure test & leak verification" },
  { step: "08", label: "Commissioning", detail: "Pigging, drying, handover documentation" },
];

/* ─────────────────────────────────────────────
   Pipeline types
   ───────────────────────────────────────────── */

const pipelineTypes = [
  {
    type: "Oil & Gas",
    subtitle: "Hydrocarbon Flow Lines",
    description:
      "Steel flow lines, gathering systems, and trunk lines for crude oil, natural gas, and condensate transport — welded to API 1104, coated, and cathodically protected for decades of service.",
    specs: [
      { label: "Diameters", value: '4"–48"' },
      { label: "Standard", value: "API 5L / 1104" },
      { label: "Protection", value: "CP + FBE/3LPE" },
    ],
  },
  {
    type: "Water",
    subtitle: "Industrial & Utility Lines",
    description:
      "Potable water transmission, industrial cooling water, injection water lines, and produced water disposal pipelines — in carbon steel, ductile iron, or HDPE depending on application.",
    specs: [
      { label: "Diameters", value: '2"–36"' },
      { label: "Materials", value: "CS / DI / HDPE" },
      { label: "Testing", value: "Hydrotest + chlorination" },
    ],
  },
  {
    type: "Multi-Phase",
    subtitle: "Complex Fluid Systems",
    description:
      "Engineered for mixed oil-gas-water flows — slug catchers, manifold stations, pig launchers / receivers, and thermal-insulated lines for viscous crude and high-pour-point fluids.",
    specs: [
      { label: "Flow", value: "Gas-liquid mixed" },
      { label: "Insulation", value: "PUF / mineral wool" },
      { label: "Facilities", value: "Slug catcher / pig trap" },
    ],
  },
];

/* ─────────────────────────────────────────────
   Integrity & commissioning capabilities
   ───────────────────────────────────────────── */

const integrityServices = [
  {
    title: "Hydrostatic Testing",
    description: "Full-line pressure testing with calibrated recorders, temperature compensation, and hold-period verification per ASME B31.4 / B31.8.",
  },
  {
    title: "Cathodic Protection",
    description: "Impressed current & sacrificial anode systems — design, installation, commissioning, and ongoing CP survey monitoring.",
  },
  {
    title: "Pipeline Pigging",
    description: "Gauging, cleaning, and intelligent pigging for new lines and operational maintenance. Launcher and receiver installation included.",
  },
  {
    title: "NDT & Weld Inspection",
    description: "Radiographic, ultrasonic, MPI, and visual weld inspection by certified technicians — 100% coverage on critical joints.",
  },
];

/* ═════════════════════════════════════════════
   COMPONENT
   ═════════════════════════════════════════════ */

export default function PipelineConstruction() {
  return (
    <section id="pipeline" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════
          ZONE 3 — Pipeline Types (3 columns)
         ═══════════════════════════════════════ */}
      <div className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col gap-5 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                What We Build
              </span>
              <h3 className="mt-3 text-2xl font-extralight tracking-tight text-heading md:text-3xl">
                Three pipeline disciplines
              </h3>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-muted">
              Hydrocarbon, water, and multi-phase — each engineered to the
              standards and materials its service demands.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pipelineTypes.map((pl, i) => (
              <motion.div
                key={pl.type}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex flex-col border border-border bg-surface transition-colors duration-300 hover:border-accent/40"
              >
                {/* Type header */}
                <div className="border-b border-border px-7 pt-8 pb-6">
                  <span className="text-[2.5rem] font-extralight leading-none tracking-tighter text-heading transition-colors duration-300 group-hover:text-accent lg:text-[3rem]">
                    {pl.type}
                  </span>
                  <span className="mt-2 block text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                    {pl.subtitle}
                  </span>
                </div>

                {/* Description */}
                <div className="flex-1 px-7 pt-6 pb-4">
                  <p className="text-[13px] leading-relaxed text-body">
                    {pl.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="mt-auto border-t border-border px-7 py-5">
                  {pl.specs.map((spec) => (
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
          ZONE 4 — Integrity & Commissioning (split with image)
         ═══════════════════════════════════════ */}
      <div className="bg-bg py-4">
        <div className="mx-auto max-w-7xl lg:px-0">
          <div className="grid items-stretch lg:grid-cols-2">
            {/* Left — image */}
            <div className="relative min-h-72 bg-bg lg:min-h-0">
              <Image
                src="/img/pipeline-testing.webp"
                alt="Pipeline hydrostatic testing and inspection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right — integrity services */}
            <div className="px-8 py-16 lg:px-16 lg:py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                  Testing, Protection & Commissioning
                </span>
                <h3 className="mt-3 text-[1.5rem] font-light tracking-tight text-heading md:text-[1.75rem]">
                  Pipeline Integrity Services
                </h3>
                <p className="mt-5 text-[15px] leading-[1.85] text-body">
                  Beyond laying pipe, we deliver the complete infrastructure
                  package — every pipeline leaves our care pressure-tested,
                  integrity-verified, and ready for continuous service.
                </p>
              </motion.div>

              <div className="mt-10 space-y-0">
                {integrityServices.map((svc, i) => (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className={`py-6 ${
                      i < integrityServices.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 font-mono text-[11px] text-accent/40">
                        0{i + 1}
                      </span>
                      <div>
                        <h4 className="text-[14px] font-medium tracking-tight text-heading">
                          {svc.title}
                        </h4>
                        <p className="mt-2 text-[13px] leading-relaxed text-muted">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
