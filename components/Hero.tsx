"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import NeuralBackground from "@/components/NeuralBackground";

const easing = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 bg-radial-fade" />
      <NeuralBackground />
      <div className="grain-overlay" />

      {/* Ambient floating elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-silver/5 blur-[110px] animate-float-slow [animation-delay:-3s]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[18%] hidden h-24 w-24 rounded-2xl border border-white/10 lg:block animate-float-slow [animation-delay:-1.5s]"
        style={{ transform: "rotate(18deg)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] bottom-[22%] hidden h-16 w-16 rounded-full border border-accent/25 lg:block animate-float-slow [animation-delay:-4.5s]"
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.1 }}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2"
          >
            <Sparkles size={14} className="text-accent-soft" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              AI Product Studio &mdash; Muhammad Zain
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easing, delay: 0.2 }}
            className="font-display text-fluid-hero font-semibold leading-[1.03] tracking-tight text-balance"
          >
            Building AI That
            <br />
            <span className="bg-gradient-to-r from-white via-accent-soft to-white bg-clip-text text-transparent">
              Solves Real Problems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.35 }}
            className="mt-7 max-w-xl font-body text-fluid-body leading-relaxed text-ink-muted"
          >
            I design and engineer premium AI websites, applications, and automation
            for founders and businesses who need outcomes &mdash; not experiments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a href="#projects" className={buttonClasses("primary", "min-w-[190px]")}>
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href="#contact" className={buttonClasses("secondary", "min-w-[190px]")}>
              Let&apos;s Build Together
            </a>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
        aria-hidden="true"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent-soft"
          />
        </div>
      </motion.div>
    </section>
  );
}
