import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0A0C",
          deep: "#050506",
        },
        graphite: {
          DEFAULT: "#131317",
          light: "#1B1B20",
          border: "#242429",
        },
        accent: {
          DEFAULT: "#3D7FFF",
          soft: "#5B9DFF",
          dim: "#2C5FCC",
        },
        silver: {
          DEFAULT: "#B8BEC7",
          bright: "#DDE1E6",
        },
        ink: {
          DEFAULT: "#F5F6F7",
          muted: "#8B909A",
          faint: "#5C616B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.75rem, 6vw + 1rem, 6.5rem)",
        "fluid-h1": "clamp(2.25rem, 4vw + 1rem, 4rem)",
        "fluid-h2": "clamp(1.75rem, 2.5vw + 1rem, 2.75rem)",
        "fluid-h3": "clamp(1.25rem, 1.2vw + 1rem, 1.6rem)",
        "fluid-body": "clamp(1rem, 0.4vw + 0.9rem, 1.125rem)",
      },
      maxWidth: {
        content: "1280px",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(61,127,255,0.14) 0%, rgba(10,10,12,0) 70%)",
        "grain": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44NSIgbnVtT2N0YXZlcz0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')",
      },
      boxShadow: {
        glow: "0 0 40px rgba(61,127,255,0.25)",
        "glow-sm": "0 0 20px rgba(61,127,255,0.18)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-16px) translateX(6px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
