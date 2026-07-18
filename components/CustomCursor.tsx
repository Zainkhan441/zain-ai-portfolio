"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || reducedMotion) return;

    setEnabled(true);
    document.body.classList.add("cursor-none-desktop");

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let raf = 0;

    const move = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 3}px, ${targetY - 3}px, 0)`;
      }
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, input, textarea, [role='button']"
      );
      ringRef.current?.classList.toggle("scale-150", !!interactive);
      ringRef.current?.classList.toggle("opacity-60", !!interactive);
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-none-desktop");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[999] hidden md:block">
      <div
        ref={dotRef}
        className="absolute h-1.5 w-1.5 rounded-full bg-accent-soft will-change-transform"
      />
      <div
        ref={ringRef}
        className="absolute h-8 w-8 rounded-full border border-accent/50 transition-[transform,opacity] duration-150 ease-out will-change-transform"
      />
    </div>
  );
}
