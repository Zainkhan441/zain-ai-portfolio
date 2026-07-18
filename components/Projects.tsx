"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const easing = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Products built to run a real business, not just to demo well."
          description="Three examples of what happens when an interface, a workflow, and an AI capability are designed together from the start."
          align="left"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: easing, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl2 border border-graphite-border bg-graphite transition-all duration-500 ease-premium hover:border-white/15 hover:shadow-card"
            >
              <div
                className={cn(
                  "relative h-52 overflow-hidden bg-gradient-to-br",
                  project.accent
                )}
              >
                <div className="absolute inset-0 bg-graphite-light/40" />
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full opacity-40 transition-transform duration-700 ease-premium group-hover:scale-110"
                  viewBox="0 0 400 208"
                  fill="none"
                >
                  <defs>
                    <pattern
                      id={`grid-${i}`}
                      width="28"
                      height="28"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M28 0H0V28"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                        fill="none"
                      />
                    </pattern>
                  </defs>
                  <rect width="400" height="208" fill={`url(#grid-${i})`} />
                  <circle cx="330" cy="40" r="70" fill="rgba(61,127,255,0.18)" />
                  <circle cx="60" cy="170" r="50" fill="rgba(184,190,199,0.10)" />
                </svg>
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                    {project.tagline}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-silver"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 border-t border-graphite-border pt-5">
                  <a
                    href="#contact"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white/[0.04] px-4 py-2.5 font-body text-sm text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/10 px-4 py-2.5 font-body text-sm text-ink-muted transition-colors duration-300 hover:border-white/25 hover:text-ink"
                  >
                    Source <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
