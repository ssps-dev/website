"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Drill,
  Cog,
  Wrench,
  Zap,
  ConstructionIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services, type IconName } from "@/lib/services";

const iconMap: Record<IconName, LucideIcon> = {
  Drill,
  Cog,
  Wrench,
  Zap,
  ConstructionIcon,
};

interface OtherServicesProps {
  currentServiceId: string;
}

export default function OtherServices({
  currentServiceId,
}: OtherServicesProps) {
  const otherServices = services.filter((s) => s.id !== currentServiceId);

  return (
    <section className="section-padding bg-surface-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-10"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
              More From SSPS
            </span>
          </div>
          <h2 className="text-2xl font-extralight tracking-tight text-heading md:text-3xl lg:text-[3.2rem]">
            Explore Our Other Services
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-sm lg:p-6"
                >
                  {/* Number + Icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[2rem] font-extralight leading-none tracking-tighter text-border-strong transition-colors duration-300 group-hover:text-accent/30">
                      {service.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center bg-accent-subtle text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[18px] font-semibold tracking-tight text-heading">
                      {service.title}
                    </h3>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold tracking-wide text-accent transition-colors duration-300 group-hover:text-accent-light">
                    Learn More<span className="sr-only"> — {service.title}</span>
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center gap-3 border-t border-border pt-6 text-center sm:flex-row sm:justify-center"
        >
          <p className="text-[14px] text-muted">
            Need a tailored solution across multiple disciplines?
          </p>
          <Link
            href="#contact"
            className="group flex items-center gap-2 text-[12px] font-semibold tracking-wide text-accent transition-colors hover:text-accent-light"
          >
            Contact Our Team
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
