import { Container } from "@/components/ui/Container";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-graphite-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <Container className="py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <span className="font-display text-2xl font-semibold text-ink">
              Zain<span className="text-accent">.</span>
            </span>
            <p className="mt-4 font-body text-fluid-h3 font-medium leading-snug text-ink text-balance">
              Building AI That Solves Real Problems
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline font-body text-sm text-ink-muted hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-graphite-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-ink-faint">
            &copy; {year} Muhammad Zain. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ink-faint">
            Designed &amp; engineered from the ground up.
          </p>
        </div>
      </Container>
    </footer>
  );
}
