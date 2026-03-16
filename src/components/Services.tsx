"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Drill,
  Cog,
  Wrench,
  Zap,
  ConstructionIcon,
} from "lucide-react";
import { services } from "@/lib/services";

/* ─────────────────────────────────────────────
   01 — Drilling: Cinematic dark hero card
   ───────────────────────────────────────────── */

function DrillingCard() {
  const s = services[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-5%" }}
      className="group relative overflow-hidden bg-primary"
    >
      {/* Background hatch */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="hatch-pattern h-full w-full" />
      </div>

      <div className="relative grid lg:grid-cols-[1.1fr_1fr]">
        {/* Left — Content */}
        <div className="relative z-10 px-8 py-14 lg:px-14 lg:py-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border border-accent/30 text-accent">
              <Drill size={15} />
            </div>
            <div className="h-px w-6 bg-accent/40" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              {s.subtitle}
            </span>
          </div>

          <h3 className="max-w-md text-[1.65rem] font-extralight tracking-tight text-white md:text-[2rem] lg:text-[2.2rem]">
            {s.titleLine1}{" "}
            <span className="font-normal text-accent-light">
              {s.titleAccent}
            </span>
          </h3>

          <p className="mt-5 max-w-lg text-[14px] leading-[1.85] text-white/50">
            {s.description}
          </p>

          {/* Stats grid */}
          <div className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {s.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary px-4 py-5 text-center"
              >
                <div className="text-xl font-light tracking-tight text-accent-light lg:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9px] font-medium tracking-[0.15em] text-white/30 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="mt-8 flex flex-wrap gap-2">
            {s.capabilities.slice(0, 4).map((cap) => (
              <span
                key={cap}
                className="border border-white/10 px-3 py-1.5 text-[11px] text-white/40"
              >
                {cap}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href={`/services/${s.slug}`}
              className="group/cta inline-flex items-center gap-3 border border-accent bg-accent px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-all duration-300 hover:bg-accent-light"
            >
              Explore Drilling Services
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative min-h-[300px] lg:min-h-0">
          <Image
            src={s.image}
            alt={s.imageAlt}
            fill
            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent lg:bg-gradient-to-r" />
          {/* Giant number */}
          <div className="pointer-events-none absolute right-6 bottom-6 select-none">
            <span className="text-[8rem] font-extralight leading-none tracking-tighter text-white/[0.04] lg:text-[12rem]">
              {s.number}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   02 — Equipment Trading: Clean catalog card
   with metric counters
   ───────────────────────────────────────────── */

function EquipmentCard() {
  const s = services[1];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-5%" }}
      className="group border border-border bg-surface transition-colors duration-500 hover:border-accent/30"
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr]">
        {/* Left — Metrics + Info */}
        <div className="flex flex-col px-8 py-12 lg:px-12 lg:py-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[2.5rem] font-extralight leading-none tracking-tighter text-border-strong">
              {s.number}
            </span>
            <div className="ml-2">
              <span className="block text-[10px] font-semibold tracking-[0.25em] text-accent uppercase">
                {s.subtitle}
              </span>
              <div className="mt-0.5 flex items-center gap-2">
                <Cog size={13} className="text-accent/60" />
                <span className="text-[11px] text-muted">
                  Global Procurement
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-[1.4rem] font-light tracking-tight text-heading md:text-[1.6rem]">
            {s.title}
          </h3>
          <p className="mt-4 text-[14px] leading-[1.8] text-body">
            {s.description}
          </p>

          {/* Capabilities list */}
          <div className="mt-6 space-y-2.5">
            {s.capabilities.map((cap, i) => (
              <div key={cap} className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-accent/40">
                  0{i + 1}
                </span>
                <span className="text-[13px] text-muted">{cap}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <Link
              href={`/services/${s.slug}`}
              className="group/cta inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-accent transition-colors hover:text-accent-light"
            >
              View Equipment Catalog
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Right — Metric cards grid */}
        <div className="border-t border-border lg:border-t-0 lg:border-l">
          {/* Top — Image */}
          <div className="relative h-[220px] lg:h-[240px]">
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
          {/* Bottom — Stats */}
          <div className="grid grid-cols-2 gap-px border-t border-border bg-border sm:grid-cols-4">
            {s.stats.map((stat) => (
              <div key={stat.label} className="bg-surface px-4 py-5 text-center">
                <div className="text-lg font-extralight tracking-tight text-heading lg:text-xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9px] font-medium tracking-[0.15em] text-muted uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   03 — Rig Maintenance: Immersive overlay split
   ───────────────────────────────────────────── */

function MaintenanceCard() {
  const s = services[2];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-5%" }}
      className="group relative overflow-hidden"
    >
      {/* Full background image */}
      <div className="relative min-h-[480px] lg:min-h-[420px]">
        <Image
          src={s.image}
          alt={s.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />

        {/* Content overlay */}
        <div className="relative z-10 flex h-full min-h-[480px] items-center lg:min-h-[420px]">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:px-14">
            {/* Left — Text */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center border border-accent/30 text-accent">
                  <Wrench size={15} />
                </div>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
                  {s.subtitle}
                </span>
              </div>

              <h3 className="text-[1.6rem] font-extralight tracking-tight text-white md:text-[2rem]">
                {s.titleLine1}{" "}
                <span className="font-normal text-accent-light">
                  {s.titleAccent}
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-[14px] leading-[1.85] text-white/50">
                {s.description}
              </p>

              <div className="mt-8">
                <Link
                  href={`/services/${s.slug}`}
                  className="group/cta inline-flex items-center gap-3 border border-accent bg-accent px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-all duration-300 hover:bg-accent-light"
                >
                  Explore Maintenance
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Right — Big stats */}
            <div className="grid grid-cols-2 gap-4">
              {s.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center border border-white/10 bg-white/[0.04] px-4 py-7 text-center backdrop-blur-sm"
                >
                  <span className="text-[2rem] font-extralight tracking-tight text-accent-light lg:text-[2.5rem]">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-white/35 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   04 — Electrical: Bold voltage typography card
   ───────────────────────────────────────────── */

function ElectricalCard() {
  const s = services[3];
  const voltages = [
    { kva: "11", label: "Distribution" },
    { kva: "33", label: "Medium Voltage" },
    { kva: "132", label: "High Voltage" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-5%" }}
      className="border border-border bg-surface"
    >
      <div className="grid lg:grid-cols-2">
        {/* Left — Voltage hero numbers */}
        <div className="border-b border-border bg-bg px-8 py-12 lg:border-b-0 lg:border-r lg:px-14 lg:py-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-accent-subtle text-accent">
              <Zap size={15} />
            </div>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-accent uppercase">
              {s.subtitle}
            </span>
          </div>

          {/* Giant voltage numbers */}
          <div className="flex gap-4">
            {voltages.map((v, i) => (
              <div key={v.kva} className="group/v flex-1 text-center">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-[2.8rem] font-extralight leading-none tracking-tighter text-heading transition-colors duration-300 hover:text-accent lg:text-[3.5rem]">
                    {v.kva}
                  </span>
                  <span className="text-[11px] font-medium text-muted">
                    kVA
                  </span>
                </div>
                <span className="mt-2 block text-[9px] font-semibold tracking-[0.2em] text-accent/70 uppercase">
                  {v.label}
                </span>
                {i < voltages.length - 1 && (
                  <div className="mt-4 mx-auto h-px w-full bg-border" />
                )}
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="mt-10 space-y-3">
            {s.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="text-[13px] text-muted">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Content + Image */}
        <div className="flex flex-col">
          {/* Image */}
          <div className="relative min-h-[200px] flex-1 lg:min-h-0">
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text + CTA */}
          <div className="border-t border-border px-8 py-10 lg:px-12">
            <span className="font-mono text-[11px] text-accent/40">
              {s.number}
            </span>
            <h3 className="mt-2 text-[1.35rem] font-light tracking-tight text-heading md:text-[1.5rem]">
              {s.title}
            </h3>
            <p className="mt-3 text-[13px] leading-[1.8] text-body">
              {s.shortDescription}
            </p>
            <div className="mt-6">
              <Link
                href={`/services/${s.slug}`}
                className="group/cta inline-flex items-center gap-2.5 border border-accent/30 bg-accent-subtle px-6 py-3 text-[11px] font-semibold tracking-widest text-accent uppercase transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
              >
                E&I Services
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover/cta:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   05 — Pipeline: Horizontal process flow card
   ───────────────────────────────────────────── */

function PipelineCard() {
  const s = services[4];
  const phases = [
    { step: "01", label: "Route Survey" },
    { step: "02", label: "Trenching" },
    { step: "03", label: "Welding" },
    { step: "04", label: "NDT & Coating" },
    { step: "05", label: "Lowering-In" },
    { step: "06", label: "Testing" },
    { step: "07", label: "Commissioning" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-5%" }}
      className="group border border-border bg-surface transition-colors duration-500 hover:border-accent/30"
    >
      {/* Top — Image banner with overlay content */}
      <div className="relative min-h-[240px] overflow-hidden lg:min-h-[260px]">
        <Image
          src={s.image}
          alt={s.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

        {/* Overlay text */}
        <div className="absolute bottom-0 left-0 right-0 px-8 py-8 lg:px-14">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border border-accent/30 text-accent">
              <ConstructionIcon size={15} />
            </div>
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              {s.subtitle}
            </span>
          </div>
          <h3 className="mt-3 text-[1.6rem] font-extralight tracking-tight text-white md:text-[2rem]">
            {s.titleLine1}{" "}
            <span className="font-normal text-accent-light">
              {s.titleAccent}
            </span>
          </h3>
        </div>
      </div>

      {/* Middle — Construction phases flow */}
      <div className="border-t border-border bg-bg px-8 py-8 lg:px-14">
        <span className="mb-5 block text-[9px] font-semibold tracking-[0.3em] text-muted uppercase">
          Construction Phases
        </span>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-4 right-0 left-0 hidden h-px bg-border lg:block" />
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
            {phases.map((phase) => (
              <div
                key={phase.step}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-8 w-8 items-center justify-center border border-border bg-surface">
                  <span className="font-mono text-[10px] font-medium text-accent">
                    {phase.step}
                  </span>
                </div>
                <span className="mt-2 text-[10px] font-medium leading-snug tracking-tight text-muted">
                  {phase.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom — Stats + CTA */}
      <div className="grid border-t border-border sm:grid-cols-[1fr_auto]">
        <div className="grid grid-cols-4 gap-px bg-border">
          {s.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface px-4 py-5 text-center"
            >
              <div className="text-lg font-extralight tracking-tight text-heading">
                {stat.value}
              </div>
              <div className="mt-1 text-[9px] font-medium tracking-[0.15em] text-muted uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center border-t border-border px-8 py-5 sm:border-t-0 sm:border-l">
          <Link
            href={`/services/${s.slug}`}
            className="group/cta inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-accent transition-colors hover:text-accent-light"
          >
            Pipeline Services
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="services" className="section-padding relative bg-surface-2">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl lg:mb-24"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.35em] text-accent uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl font-extralight tracking-tight text-heading md:text-4xl lg:text-[3.2rem]">
            Five Verticals.{" "}
            <span className="relative font-normal text-primary">
              One Partner.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-accent"
              />
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-body">
            From the first drill to the final pipeline weld — SSPS delivers
            integrated oilfield services that power energy infrastructure end to
            end.
          </p>
        </motion.div>

        {/* ── Service Cards — each uniquely designed ── */}
        <div className="space-y-6">
          <DrillingCard />
          <EquipmentCard />
          <MaintenanceCard />
          <ElectricalCard />
          <PipelineCard />
        </div>
      </div>
    </section>
  );
}
