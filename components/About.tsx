"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    stat: "01",
    title: "The problem",
    copy: "Most businesses don't need more software. They need the manual, repetitive parts of their work to disappear, and the parts that matter to feel effortless for their customers.",
  },
  {
    stat: "02",
    title: "The belief",
    copy: "AI should be invisible in the interface and undeniable in the result — quietly doing the reasoning, scheduling, and personalizing that used to take a team.",
  },
  {
    stat: "03",
    title: "The approach",
    copy: "Every product is designed with the same discipline as a luxury brand and engineered with the same rigor as enterprise software. Nothing ships half-considered.",
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeading
            eyebrow="Mission"
            title="Intelligence should feel like relief, not machinery."
            description="I build AI products for businesses that are done experimenting and ready to ship something that actually changes how they operate — and how their customers experience them."
          />

          <div className="flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: easing, delay: i * 0.1 }}
                className="glass group relative flex gap-5 rounded-xl2 p-6 transition-colors duration-300 hover:border-white/15 sm:p-7"
              >
                <span className="font-mono text-sm text-accent-soft/80">
                  {pillar.stat}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted sm:text-base">
                    {pillar.copy}
                  </p>
                </div>
                <span className="pointer-events-none absolute inset-0 rounded-xl2 opacity-0 shadow-glow-sm transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
