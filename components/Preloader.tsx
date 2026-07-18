"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    if (mq.matches) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-base"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-12 w-12">
              <motion.span
                className="absolute inset-0 rounded-full border border-accent/30"
                animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-[6px] rounded-full border-2 border-accent border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[11px] uppercase text-ink-muted"
            >
              Muhammad Zain
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
