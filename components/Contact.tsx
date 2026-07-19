"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/Button";
import { contactMethods } from "@/lib/data";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-body text-sm text-ink placeholder:text-ink-faint transition-colors duration-200 focus:border-accent/50 focus:bg-white/[0.05] focus-visible:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      projectType: data.get("projectType"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-radial-fade"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Tell me what you're building."
          description="A short message is enough to start. I'll reply personally, usually within one business day."
          align="center"
          className="mx-auto mb-16"
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact methods */}
          <div className="flex flex-col gap-4">
            {contactMethods.map((method) => {
              const Icon = method.label === "Email" ? Mail : MessageCircle;
              return (
                <a
                  key={method.value}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-4 rounded-xl2 p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-glow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-accent-soft transition-transform duration-300 group-hover:scale-110">
                    <Icon size={18} />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted">
                      {method.label}
                    </span>
                    <span className="font-body text-sm font-medium text-ink">
                      {method.value}
                    </span>
                  </span>
                </a>
              );
            })}

            <div className="glass rounded-xl2 p-5">
              <p className="font-body text-sm leading-relaxed text-ink-muted">
                Prefer a quick chat over a form? WhatsApp is the fastest way to
                reach me directly for time-sensitive projects.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="glass relative overflow-hidden rounded-xl2 p-7 sm:p-9">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent-soft"
                  >
                    <CheckCircle2 size={30} />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Message sent
                  </h3>
                  <p className="max-w-xs font-body text-sm text-ink-muted">
                    Thanks for reaching out. I&apos;ll get back to you personally,
                    usually within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className={buttonClasses("ghost", "mt-2")}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-body text-xs text-ink-muted">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputClasses}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-body text-xs text-ink-muted">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="font-body text-xs text-ink-muted">
                      Project type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue="AI Website"
                      className={cn(inputClasses, "appearance-none")}
                    >
                      <option>AI Website</option>
                      <option>AI Application</option>
                      <option>AI Automation</option>
                      <option>AI Chatbot</option>
                      <option>SaaS Development</option>
                      <option>UI/UX Design</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-body text-xs text-ink-muted">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you trying to build, and what does success look like?"
                      className={cn(inputClasses, "resize-none")}
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="font-body text-sm text-red-400">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={buttonClasses("primary", "mt-1 w-full")}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send message
                        <Send
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
