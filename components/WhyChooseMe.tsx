"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseMe } from "@/lib/data";

const easing = [0.22, 1, 0.36, 1] as const;

export default function WhyChooseMe() {
  return (
    <section className="relative py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-graphite-border to-transparent"
      />
      <Container>
        <SectionHeading
          eyebrow="Why This Studio"
          title="What you're actually paying for."
          description="Not just design, and not just code — the judgment to know where AI belongs in your product, and the discipline to execute it cleanly."
          align="left"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-graphite-border bg-graphite-border sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseMe.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: easing, delay: (i % 3) * 0.06 }}
                className="group relative flex flex-col gap-4 bg-graphite p-7 transition-colors duration-300 hover:bg-graphite-light"
              >
                <Icon
                  size={22}
                  strokeWidth={1.6}
                  className="text-accent-soft transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="font-display text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
