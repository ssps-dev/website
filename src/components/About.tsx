"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const milestones = [
  { year: "1998", event: "Founded in Muscat, Sultanate of Oman" },
  { year: "2005", event: "First major drilling contract with national operator" },
  { year: "2012", event: "Expanded into pipeline & E&I infrastructure" },
  { year: "2018", event: "Fleet grown to 2000HP workover rigs" },
  { year: "2024", event: "500+ wells drilled, 200+ projects delivered" },
];

const pillars = [
  {
    title: "Upstream Drilling",
    desc: "Oil, water, and mining well drilling with advanced rig fleet and experienced field crews.",
  },
  {
    title: "Infrastructure",
    desc: "Pipeline construction and high-voltage electrical installations powering Oman's energy grid.",
  },
  {
    title: "Equipment Supply",
    desc: "Comprehensive trading of drilling rig components, mud pumps, and heavy machinery parts.",
  },
  {
    title: "Maintenance",
    desc: "24/7 rig maintenance, component repair, and preventive servicing to maximize uptime.",
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const illustrationY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" className="relative pt-28 pb-28 lg:pt-36">
      <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.35em] text-accent uppercase">
              About SSPS
            </span>
          </div>

          <h2 className="text-3xl font-extralight leading-[1.12] tracking-tight text-heading md:text-4xl lg:text-[3.2rem]">
            Built for Oman&apos;s Energy{" "}
            <span className="font-normal text-primary">Frontier</span>
          </h2>
        </motion.div>

        {/* ── Main content: Tall image + text side by side ── */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left — Tall illustration panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-3/4 overflow-hidden lg:aspect-2/3">
              <motion.div
                style={{ y: illustrationY }}
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1540743527709-032f806b207c?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="SSPS operations — drilling, pipeline, and infrastructure"
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
              {/* Subtle gradient overlay at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-bg/60 to-transparent" />
            </div>

            {/* Stats overlaid at bottom of image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="-mt-20 relative z-10 mx-4 grid grid-cols-2 gap-px border border-border bg-border"
            >
              {[
                { value: "25+", label: "Years in Energy" },
                { value: "500+", label: "Wells Drilled" },
                { value: "200+", label: "Projects Delivered" },
                { value: "50+", label: "Active Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-bg/95 backdrop-blur-sm p-5 text-center lg:p-6"
                >
                  <div className="text-2xl font-light text-primary lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium tracking-wide text-muted uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Content column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:pt-4"
          >
            <div className="space-y-5 text-[15px] leading-[1.8] text-body">
              <p>
                Seven Star Petroleum Services LLC (SSPS) is a comprehensive
                oilfield services provider headquartered in Muscat, Oman. For
                over 25 years, we have delivered end-to-end solutions across the
                entire petroleum value chain — from upstream drilling and
                specialized well interventions to pipeline construction and
                high-voltage electrical infrastructure.
              </p>
              <p>
                Our fleet of advanced rigs spanning 550HP to 2000HP, combined
                with specialized intervention tooling and experienced field
                crews, enables us to serve national oil companies and
                international operators with precision, safety, and reliability
                that meets the demanding standards of Oman&apos;s energy sector.
              </p>
              <p>
                We don&apos;t just drill wells — we build the infrastructure
                that powers communities. From 11kVA overhead lines to 132kVA
                substations, from slick line interventions to full pipeline
                commissioning, SSPS is the single partner for every stage of
                energy development.
              </p>
            </div>

            {/* ── Timeline ── */}
            <div className="mt-14 border-t border-border pt-10">
              <h3 className="mb-8 text-[10px] font-semibold tracking-[0.3em] text-muted uppercase">
                Our Journey
              </h3>
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="group flex items-baseline gap-6 border-b border-border/60 py-4 transition-colors duration-300 hover:border-accent/30"
                  >
                    <span className="font-mono text-[13px] font-semibold text-accent">
                      {m.year}
                    </span>
                    <span className="text-[14px] text-body">{m.event}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
