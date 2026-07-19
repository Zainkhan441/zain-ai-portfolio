import {
  Globe2,
  Bot,
  Workflow,
  MessageSquare,
  LayoutDashboard,
  PenTool,
  Brain,
  Rocket,
  Code2,
  Smartphone,
  Layers,
  ShieldCheck,
} from "lucide-react";

export const services = [
  {
    icon: Globe2,
    title: "AI Websites",
    description:
      "Marketing sites and web experiences with intelligence built into the interface — not bolted on as a widget.",
  },
  {
    icon: Bot,
    title: "AI Applications",
    description:
      "Full-stack products where AI is the core function: recommendation engines, generation tools, decision support.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Internal workflows re-engineered so your team stops doing manual, repeatable work by hand.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Conversational assistants trained on your business context — support, sales, and onboarding that feels considered.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Development",
    description:
      "End-to-end SaaS builds: architecture, billing, dashboards, and the operational plumbing that keeps it running.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Interfaces designed for clarity and trust first, decoration second — built to convert and to last.",
  },
] as const;

export const projects = [
  {
    title: "AI Bakery Platform",
    tagline: "Ordering that feels handcrafted, powered by automation.",
    description:
      "An ordering and inventory platform for a multi-location bakery brand, with AI-driven demand forecasting and a storefront that adapts to daily stock in real time.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Stripe"],
    accent: "from-accent/30 via-accent/5 to-transparent",
  },
  {
    title: "Smart Restaurant Experience",
    tagline: "From table to kitchen, coordinated by AI.",
    description:
      "A guest-facing ordering experience paired with a kitchen-facing operations layer, using predictive prep timing to cut wait times and reduce food waste.",
    stack: ["React", "Node.js", "AI Scheduling", "WebSockets", "Tailwind"],
    accent: "from-silver/20 via-silver/5 to-transparent",
  },
  {
    title: "AI Gym Management",
    tagline: "Member retention, modeled before it becomes a problem.",
    description:
      "A membership and coaching platform that flags at-risk members before they churn, and automates class scheduling, billing, and progress tracking.",
    stack: ["Next.js", "Python", "ML Pipeline", "Supabase", "Framer Motion"],
    accent: "from-accent/25 via-silver/5 to-transparent",
  },
] as const;

export const process = [
  {
    title: "Discovery",
    description:
      "We define the real business problem, the audience, and what success has to look like before a single pixel is placed.",
  },
  {
    title: "Strategy",
    description:
      "A technical and product plan: architecture, AI capabilities in scope, timeline, and the metrics that will prove it worked.",
  },
  {
    title: "Design",
    description:
      "A visual identity and interface built specifically for your brand — premium, intentional, and never templated.",
  },
  {
    title: "Development",
    description:
      "Clean, scalable code shipped in reviewable milestones, with performance and accessibility treated as requirements, not extras.",
  },
  {
    title: "Launch",
    description:
      "A monitored release, a handover you can actually use, and a plan for what gets improved next.",
  },
] as const;

export const whyChooseMe = [
  {
    icon: Brain,
    title: "AI-First Thinking",
    description:
      "Every product decision starts by asking where intelligence genuinely helps — not where it looks impressive.",
  },
  {
    icon: Rocket,
    title: "Modern Technologies",
    description:
      "A current, production-grade stack chosen for reliability and speed, not novelty for its own sake.",
  },
  {
    icon: Code2,
    title: "Fast Performance",
    description:
      "Sites and products engineered to load quickly and stay responsive under real-world conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Code",
    description:
      "Modular, documented, and built so the next developer — or you — can extend it without untangling it first.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "One experience that holds its composure from a small phone screen to a 4K display.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description:
      "Architecture that assumes growth, so the product you launch with is still the right foundation a year later.",
  },
] as const;

export const faqs = [
  {
    question: "What kind of businesses do you typically work with?",
    answer:
      "Founders, startups, agencies and established businesses who need a serious digital product — not a template site. Most clients come to me because they have a real operational problem AI can solve, or a product idea that needs to be built properly the first time.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A marketing website is usually 2–3 weeks. A full AI application or SaaS product typically runs 6–10 weeks depending on scope. You'll get a clear timeline during the Strategy phase, before any development starts.",
  },
  {
    question: "Do I need to understand AI or technology to work with you?",
    answer:
      "No. My job is to translate your business goals into the right technical decisions. You bring the context on your business and customers; I handle the architecture, the AI implementation, and the engineering.",
  },
  {
    question: "What happens after the project launches?",
    answer:
      "Every project includes a handover with documentation and a walkthrough. Ongoing support and iteration is available on a retainer basis if you want continued improvements after launch.",
  },
  {
    question: "Can you work with my existing website or codebase?",
    answer:
      "Yes. I regularly integrate AI features, automation, or new interfaces into existing products rather than rebuilding from zero, when that's the more sensible path for your budget and timeline.",
  },
  {
    question: "How do revisions and feedback work during the project?",
    answer:
      "You'll see progress at each milestone, not just at the end. Structured feedback rounds are built into the Design and Development phases so changes happen early, when they're cheap, not after launch.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A short discovery call to understand your goals, audience, and constraints. From there I put together a proposal covering scope, timeline, and investment before any work begins.",
  },
] as const;

export const contactMethods = [
  {
    label: "WhatsApp",
    value: "0313 1134962",
    href: "https://wa.me/923131134962",
  },
  {
    label: "WhatsApp",
    value: "0316 2006193",
    href: "https://wa.me/923162006193",
  },
  {
    label: "Email",
    value: "helllo2455@gmail.com",
    href: "mailto:helllo2455@gmail.com",
  },
] as const;
