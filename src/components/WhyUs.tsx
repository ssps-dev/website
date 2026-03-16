"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Clock,
  Users,
  Award,
  Gauge,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "HSE First Culture",
    description:
      "Zero-compromise safety standards with rigorous HSE protocols embedded into every operation — from initial risk assessment and toolbox talks through execution, monitoring, and post-job review.",
    stat: "0 LTIs",
    statLabel: "Lost-time incidents on record",
  },
  {
    icon: Clock,
    title: "24/7 Operational Support",
    description:
      "Round-the-clock field support, emergency response, and logistics coordination ensuring your wells, rigs, and sites never experience unnecessary downtime.",
    stat: "24/7",
    statLabel: "Field support availability",
  },
  {
    icon: Users,
    title: "Experienced Field Crews",
    description:
      "Skilled engineers, technicians, and operators with decades of combined oilfield experience across Oman's diverse terrain — from the Empty Quarter to the Al Hajar Mountains.",
    stat: "25+",
    statLabel: "Years combined experience",
  },
  {
    icon: Award,
    title: "Quality Certifications",
    description:
      "Fully compliant with international industry standards. Certified equipment, audited processes, and continuous improvement programs that exceed operator expectations.",
    stat: "ISO",
    statLabel: "Certified operations",
  },
  {
    icon: Gauge,
    title: "Advanced Equipment Fleet",
    description:
      "Modern rigs from 550HP to 2000HP, specialized intervention tools including slick line and coiled tubing units, and a comprehensive parts inventory for rapid mobilization.",
    stat: "2000HP",
    statLabel: "Max rig capacity",
  },
  {
    icon: Handshake,
    title: "Trusted by Operators",
    description:
      "Long-standing partnerships with national oil companies and international operators across the Sultanate, built on consistent delivery and transparent communication.",
    stat: "50+",
    statLabel: "Active client relationships",
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  return (
    <section id="why-us" className="section-padding relative">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl lg:mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.35em] text-accent uppercase">
              Why SSPS
            </span>
          </div>
          <h2 className="text-3xl font-extralight tracking-tight text-heading md:text-4xl lg:text-[3.2rem]">
            Operate with{" "}
            <span className="relative font-normal text-primary">
              Confidence
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
          <p className="mt-6 text-[15px] leading-relaxed text-body">
            Safety, reliability, and long-term partnership — the pillars that
            make SSPS the trusted choice for oilfield services in Oman.
          </p>
        </motion.div>

        {/* ── Reason rows — horizontal card layout ── */}
        <div className="space-y-0 border-t border-border">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group grid items-center gap-6 border-b border-border py-8 md:grid-cols-[auto_1fr_auto] md:gap-10 lg:py-10"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-accent-subtle text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <reason.icon size={20} />
                </div>
                <div className="min-w-[180px]">
                  <h3 className="text-[16px] font-semibold tracking-tight text-heading">
                    {reason.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] leading-relaxed text-body">
                {reason.description}
              </p>

              {/* Stat */}
              <div className="flex flex-shrink-0 flex-col items-end text-right">
                <span className="text-2xl font-light tracking-tight text-primary">
                  {reason.stat}
                </span>
                <span className="text-[10px] font-medium tracking-wider text-muted uppercase">
                  {reason.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
