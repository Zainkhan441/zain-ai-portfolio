"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

const easing = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="One studio. Every layer of a modern AI product."
          description="From the first line of copy on your homepage to the model calls running in production — handled as one coherent system, not a patchwork of vendors."
          align="left"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: easing, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-xl2 border border-graphite-border bg-graphite p-7 transition-all duration-400 ease-premium hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-glow-sm"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15"
                />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-soft transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent-soft">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft group-hover:opacity-100"
                  />
                </div>

                <h3 className="relative mt-6 font-display text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="relative mt-2.5 font-body text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
