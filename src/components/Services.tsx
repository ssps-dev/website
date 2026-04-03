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
import { services, type IconName } from "@/lib/services";

const iconMap: Record<IconName, typeof Drill> = {
  Drill,
  Cog,
  Wrench,
  Zap,
  ConstructionIcon,
};

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
          className="mb-6 lg:mb-8"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent-dark uppercase">
            </span>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
            <p className="max-w-md text-justify text-[14px] leading-relaxed text-body">
              From the first drill to the final pipeline weld — integrated
              oilfield services that power energy infrastructure end to end.
            </p>
          </div>
        </motion.div>

        {/* ── Service Cards — consistent grid like Component Overhaul ── */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.iconName];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex flex-col border border-border bg-surface transition-colors duration-300 hover:border-accent/40"
              >
                {/* Service image */}
                <Link href={`/services/${s.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-surface-2">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center bg-primary/80 backdrop-blur-sm">
                    <span className="font-mono text-[12px] font-medium text-accent">
                      {s.number}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col px-4 pt-3 pb-4">
                  <div className="mb-1.5 flex items-center gap-2">
                    <Icon size={14} className="text-accent" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                      {s.subtitle}
                    </span>
                  </div>
                  <Link href={`/services/${s.slug}`}>
                    <h3 className="text-[16px] font-medium tracking-tight text-heading transition-colors duration-200 hover:text-accent">
                      {s.title}
                    </h3>
                  </Link>
                  <p className="mt-1.5 min-h-[4.75rem] text-justify text-[13px] leading-relaxed text-body">
                    {s.shortDescription}
                  </p>

                  {/* Stats grid */}
                  <div className="mt-2 grid grid-cols-2 gap-px border border-border bg-border">
                    {s.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-surface px-2 py-1.5 text-center min-h-[3.75rem]"
                      >
                        <div className="text-[15px] font-light tracking-tight text-primary">
                          {stat.value}
                        </div>
                        <div className="text-[10px] font-medium tracking-[0.15em] text-muted uppercase">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities */}
                  <ul className="mt-2 flex-1 space-y-1">
                    {s.capabilities.map((cap) => (
                      <li
                        key={cap.label}
                        className="flex items-start gap-2 text-[12px] leading-snug text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                        {cap.label}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/services/${s.slug}`}
                    className="group/cta mt-3 inline-flex items-center gap-2 border-t border-border pt-3 text-[12px] font-semibold tracking-wide text-accent transition-colors hover:text-accent-light"
                  >
                    Learn More<span className="sr-only"> — {s.title}</span>
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover/cta:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
