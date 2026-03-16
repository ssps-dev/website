"use client";

import { motion } from "framer-motion";

const items = [
  "Oil Well Drilling",
  "Water Well Drilling",
  "Mining Wells",
  "1000HP Rigs",
  "2000HP Rigs",
  "550HP Workover",
  "750HP Workover",
  "Slick Line",
  "Wire Line",
  "Coiled Tubing",
  "Well Testing",
  "Pipeline Construction",
  "HV Substations",
  "Equipment Trading",
  "Rig Maintenance",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-primary-light py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-primary-light to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-primary-light to-transparent" />

      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 text-[11px] font-semibold tracking-[0.25em] text-white/30 uppercase"
          >
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
