"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "Muscat, Sultanate of Oman",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+968 XXXX XXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ssps.om",
  },
  {
    icon: Clock,
    label: "Operations",
    value: "24/7 Field Support",
  },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          product: form.product,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm(initialForm);
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding relative bg-surface-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.35em] text-accent-dark uppercase">
            </span>
          </div>
          <h2 className="text-3xl font-extralight tracking-tight text-heading md:text-4xl lg:text-[3.2rem]">
            Let&apos;s Discuss Your{" "}
            <span className="font-normal text-primary">Project</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
          {/* ── Left — Info Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-justify text-[14px] leading-relaxed text-body">
              Whether you need drilling services, equipment supply, pipeline
              construction, or electrical infrastructure — our team is ready to
              provide solutions tailored to your requirements.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-border bg-bg p-4 transition-colors duration-300 hover:border-accent/30"
                >
                  <div className="mb-2 flex h-9 w-9 items-center justify-center bg-accent-subtle text-accent">
                    <item.icon size={16} />
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-heading">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Operational areas */}
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                Operating Across
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-body">
                Muscat · Interior Oman · Fahud · Nimr · Mukhaizna · Lekhwair ·
                Yibal · Daleel · Amal
              </p>
            </div>
          </motion.div>

          {/* ── Right — Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-border bg-bg p-6 lg:p-8"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-border bg-transparent px-4 py-3 text-[14px] text-heading outline-none transition-colors placeholder:text-light focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border border-border bg-transparent px-4 py-3 text-[14px] text-heading outline-none transition-colors placeholder:text-light focus:border-accent"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-border bg-transparent px-4 py-3 text-[14px] text-heading outline-none transition-colors placeholder:text-light focus:border-accent"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-border bg-transparent px-4 py-3 text-[14px] text-heading outline-none transition-colors placeholder:text-light focus:border-accent"
                    placeholder="+968 XXXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-service" className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                  Service Required
                </label>
                <select
                  id="contact-service"
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent px-4 py-3 text-[14px] text-heading outline-none transition-colors focus:border-accent"
                >
                  <option value="">Select a service</option>
                  <option value="Drilling & Well Services">Drilling &amp; Well Services</option>
                  <option value="Equipment & Rig Trading">Equipment &amp; Rig Trading</option>
                  <option value="Maintenance & Support">Maintenance &amp; Support</option>
                  <option value="Electrical & Instrumentation">Electrical &amp; Instrumentation</option>
                  <option value="Pipeline Construction">Pipeline Construction</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-details" className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                  Project Details
                </label>
                <textarea
                  id="contact-details"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-border bg-transparent px-4 py-3 text-[14px] text-heading outline-none transition-colors placeholder:text-light focus:border-accent"
                  placeholder="Tell us about your project requirements, location, and timeline..."
                />
              </div>

              {status === "error" && (
                <p className="text-[13px] text-red-500">{errorMsg}</p>
              )}
              {status === "success" && (
                <p className="text-[13px] text-accent">
                  Your inquiry has been received. We&apos;ll be in touch shortly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full border border-accent bg-accent py-4 text-[12px] font-semibold tracking-[0.15em] uppercase text-white transition-all duration-300 hover:bg-accent-light disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
