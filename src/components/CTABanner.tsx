"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-primary">
      {/* Full edge-to-edge background image */}
      <div className="absolute inset-0">
        <Image
          src="/img/cta.webp"
          alt="SSPS energy services landscape"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        {/* Text content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-semibold tracking-[0.3em] text-white/40 uppercase">
                Partner With Us
              </span>
            </div>
            <h2 className="max-w-lg text-3xl font-extralight tracking-tight text-white md:text-4xl lg:text-[3.2rem] lg:leading-[1.12]">
              Ready to Power Your
              <br />
              <span className="relative font-normal">
                Next Operation?
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left bg-accent"
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-md text-justify text-[15px] leading-relaxed text-white/55"
          >
            From drilling programs and well interventions to pipeline
            infrastructure and HV installations — get a tailored proposal for
            your project requirements.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-5 flex flex-wrap gap-3"
          >
            <Link
              href="#contact"
              className="group flex items-center gap-3 border border-accent bg-accent px-8 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-white transition-all duration-300 hover:bg-accent-light"
            >
              Request a Quote
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#services"
              className="border border-white/25 px-8 py-4 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/70 transition-all duration-300 hover:border-white hover:text-white"
            >
              View Services
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap gap-6 sm:gap-8 border-t border-white/10 pt-4"
          >
            {[
              { val: "500+", lbl: "Wells" },
              { val: "5", lbl: "Service Lines" },
              { val: "24/7", lbl: "Support" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="text-xl font-light text-accent">{s.val}</div>
                <div className="text-[10px] font-medium tracking-wider text-white/30 uppercase">
                  {s.lbl}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
