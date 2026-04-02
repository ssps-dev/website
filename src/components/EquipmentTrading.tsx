"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   Product catalog
   ───────────────────────────────────────────── */

interface CatalogItem {
  name: string;
  subtitle: string;
  description: string;
}

interface CatalogCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  overview: string;
  image: string;
  imageAlt: string;
  items: CatalogItem[];
}

const catalog: CatalogCategory[] = [
  {
    id: "rig-components",
    number: "01",
    title: "Rig Component Trading & Supply",
    tagline: "Complete Rig Infrastructure",
    overview:
      "Active drilling operations depend on a continuous supply of reliable, heavy-duty components. We maintain established sourcing relationships with OEM manufacturers and certified aftermarket suppliers worldwide — ensuring every critical part reaches your rig site when it's needed.",
    image:
      "/img/eqp-testing/rig.webp",
    imageAlt: "Rig components organized in supply warehouse",
    items: [
      {
        name: "Draw-Works Assemblies",
        subtitle: "Hoisting Systems",
        description:
          "Complete draw-works, brake systems, and auxiliary brake units for all rig classes.",
      },
      {
        name: "Rotary Equipment",
        subtitle: "Rotary Tables & Top Drives",
        description:
          "Rotary tables, master bushings, top-drive systems, and associated power transmission components.",
      },
      {
        name: "Block & Tackle",
        subtitle: "Crown & Travelling Blocks",
        description:
          "Crown blocks, travelling blocks, swivel assemblies, hooks, and wire rope sheaves.",
      },
      {
        name: "Pressure Control",
        subtitle: "BOP Stacks & Wellheads",
        description:
          "Annular & ram BOPs, choke manifolds, kill manifolds, and wellhead assemblies — rated to API 16A.",
      },
    ],
  },
  {
    id: "mud-systems",
    number: "02",
    title: "Mud Pumps & Fluid Circulation",
    tagline: "Fluid Handling Equipment",
    overview:
      "The mud system is the circulatory system of any drilling operation — pump failure means everything stops. We supply industrial-grade mud pumps, complete fluid circulation packages, and solids control equipment built for abrasive, high-pressure demands.",
    image:
      "/img/eqp-testing/mud-pump.webp",
    imageAlt: "Industrial mud pumps and fluid circulation equipment",
    items: [
      {
        name: "Mud Pumps",
        subtitle: "Triplex & Duplex",
        description:
          "Complete pump assemblies and exchange units for continuous high-pressure drilling fluid circulation.",
      },
      {
        name: "Expendable Parts",
        subtitle: "Liners, Pistons & Valves",
        description:
          "Pump liners, pistons, valve seats, and module assemblies — the high-turnover wear items that keep pumps running.",
      },
      {
        name: "Solids Control",
        subtitle: "Shakers, Desanders & Degassers",
        description:
          "Shale shakers, hydrocyclones, desanders, desilters, centrifuges, and degassing units for drill fluid treatment.",
      },
      {
        name: "Mixing & Storage",
        subtitle: "Mud System Packages",
        description:
          "Mud mixing hoppers, agitators, mud tanks, and trip-tank systems — complete surface fluid handling.",
      },
    ],
  },
  {
    id: "accessories",
    number: "03",
    title: "Drilling Accessories & Replacement Parts",
    tagline: "Specialized Components",
    overview:
      "Drilling sites consume accessories and wear parts at a relentless pace. A missing crossover or worn set of slips can idle an entire rig spread. Our procurement team specializes in rapid sourcing with minimal lead times.",
    image:
      "/img/eqp-testing/drilling.webp",
    imageAlt: "Drilling accessories and replacement parts",
    items: [
      {
        name: "Drill String",
        subtitle: "Pipe, Collars & Stabilizers",
        description:
          "Drill pipe, heavy-weight drill pipe, drill collars, stabilizers, and reamers in all API sizes and connections.",
      },
      {
        name: "Handling Tools",
        subtitle: "Slips, Elevators & Tongs",
        description:
          "Manual & power tongs, rotary slips, elevators, safety clamps, and spider assemblies for pipe handling.",
      },
      {
        name: "Specialty Connections",
        subtitle: "Subs, Crossovers & Adapters",
        description:
          "Bit subs, crossover subs, float subs, kelly savers, and custom thread adaptors for any connection combination.",
      },
      {
        name: "Consumables",
        subtitle: "Bits, Bearings & Seals",
        description:
          "Drill bits (PDC & roller cone), bearings, O-rings, seals, gaskets, and general rig consumables.",
      },
    ],
  },
];

/* ═════════════════════════════════════════════
   COMPONENT
   ═════════════════════════════════════════════ */

export default function EquipmentTrading() {
  return (
    <section id="equipment" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════
          ZONE 1 — Categories listed sequentially
         ═══════════════════════════════════════ */}
      {catalog.map((cat, catIndex) => {
        const isEven = catIndex % 2 === 0;
        return (
          <div
            key={cat.id}
            className={catIndex % 2 === 0 ? "bg-surface-2" : "bg-bg"}
          >
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
              {/* ── Editorial row: image + text ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-5%" }}
                className={`grid items-center gap-10 lg:gap-16 ${
                  isEven
                    ? "lg:grid-cols-[1.1fr_1fr]"
                    : "lg:grid-cols-[1fr_1.1fr]"
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-bg ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary px-5 py-3">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-light uppercase">
                      {cat.tagline}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`flex flex-col justify-center ${
                    !isEven ? "lg:order-1" : ""
                  }`}
                >
                  <span className="mb-2 font-mono text-[11px] text-accent/40">
                    02.{cat.number}
                  </span>
                  <h3 className="text-[1.5rem] font-light tracking-tight text-heading md:text-[1.75rem]">
                    {cat.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.85] text-body">
                    {cat.overview}
                  </p>
                </div>
              </motion.div>

              {/* ── Product items — clean list ── */}
              <div className="mt-14 lg:mt-16">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className={`grid items-baseline gap-4 border-t border-border px-2 py-6 sm:grid-cols-[140px_1fr_1.5fr] lg:gap-8 lg:px-4 lg:py-7 ${
                      i === cat.items.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[15px] font-medium tracking-tight text-heading">
                      {item.name}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* ═══════════════════════════════════════
          ZONE 2 — Full-Width Sourcing Promise
         ═══════════════════════════════════════ */}
      <div className="relative bg-primary">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="hatch-pattern h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
          >
            {/* Left — promise text */}
            <div>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                Our Sourcing Promise
              </span>
              <h3 className="mt-3 text-[1.5rem] font-light tracking-tight text-white md:text-[1.85rem]">
                Inspected. Certified. Documented. Delivered.
              </h3>
              <p className="mt-5 text-[15px] leading-[1.85] text-white/55">
                Every component we supply is inspected against OEM
                specifications, certified to API or equivalent industry
                standards, and accompanied by full traceability documentation
                for your quality management system. We act as your reliable
                supply chain partner — sourcing equipment designed to withstand
                demanding drilling environments, with rapid delivery to active
                rig sites wherever you operate.
              </p>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col items-start gap-6 lg:items-end">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Inspection", detail: "Third-party & in-house QC" },
                  {
                    label: "Certification",
                    detail: "API, ISO & OEM standards",
                  },
                  {
                    label: "Traceability",
                    detail: "Full material test reports",
                  },
                  { label: "Warranty", detail: "Backed by supplier & SSPS" },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="text-[13px] font-medium text-accent-light">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-[12px] text-white/40">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="group mt-4 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-accent-light transition-colors hover:text-white"
              >
                Discuss Your Equipment Requirements
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
