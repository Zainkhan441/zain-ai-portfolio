"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/lib/data";

const easing = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A defined path from idea to something live."
          description="Five stages, in order, each one de-risking the next — so nothing gets built twice and nothing ships as a guess."
          align="center"
          className="mx-auto mb-20"
        />

        {/* Desktop / tablet horizontal timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-graphite-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: easing }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-accent via-accent-soft to-accent/40"
          />

          <div className="grid grid-cols-5 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: easing, delay: i * 0.12 }}
                className="relative flex flex-col items-start"
              >
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-base font-mono text-sm text-accent-soft shadow-glow-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative flex flex-col gap-10 lg:hidden">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-graphite-border" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: easing }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-accent via-accent-soft to-accent/40"
          />
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: easing, delay: i * 0.1 }}
              className="relative flex gap-5 pl-0"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-base font-mono text-sm text-accent-soft shadow-glow-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="pt-1.5">
                <h3 className="font-display text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
