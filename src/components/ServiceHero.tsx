"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  Drill,
  Cog,
  Wrench,
  Zap,
  ConstructionIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconName } from "@/lib/services";

const iconMap: Record<IconName, LucideIcon> = {
  Drill,
  Cog,
  Wrench,
  Zap,
  ConstructionIcon,
};

interface ServiceHeroProps {
  number: string;
  subtitle: string;
  titleLine1: string;
  titleAccent: string;
  description: string;
  stats: { value: string; label: string }[];
  iconName: IconName;
  image?: string;
}

export default function ServiceHero({
  number,
  subtitle,
  titleLine1,
  titleAccent,
  description,
  stats,
  iconName,
  image,
}: ServiceHeroProps) {
  const Icon = iconMap[iconName];
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.5], [0.04, 0]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[65vh] overflow-hidden bg-primary"
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
      )}

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="hatch-pattern h-full w-full" />
      </div>

      {/* Giant background number */}
      <motion.div
        style={{ opacity: numberOpacity }}
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none"
      >
        <span className="text-[20rem] font-extralight leading-none tracking-tighter text-white md:text-[28rem] lg:text-[36rem]">
          {number}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 lg:px-8"
      >
        <div className="w-full py-20 lg:py-24">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 flex items-center gap-2 text-[11px] text-white/30"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white/60"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#services"
              className="transition-colors hover:text-white/60"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-accent/70">
              {titleLine1} {titleAccent}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center border border-accent/30 text-accent">
              <Icon size={16} />
            </div>
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.35em] text-accent uppercase">
              Service {number} — {subtitle}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl text-4xl font-extralight tracking-tight text-white md:text-5xl lg:text-[4rem] lg:leading-[1.08]"
          >
            {titleLine1}{" "}
            <span className="relative font-normal text-accent-light">
              {titleAccent}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-accent"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 max-w-xl text-justify text-[15px] leading-[1.85] text-white/55"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link
              href="#contact"
              className="group flex items-center gap-3 border border-accent bg-accent px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-white transition-all duration-300 hover:bg-accent-light"
            >
              Get a Quote
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/#services"
              className="border border-white/20 px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/60 transition-all duration-300 hover:border-white/50 hover:text-white"
            >
              All Services
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-primary px-5 py-4 text-center lg:px-6 lg:py-5"
              >
                <div className="text-2xl font-light tracking-tight text-accent-light lg:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] font-medium tracking-[0.15em] text-white/35 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </div>
  );
}
