"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 500, damping: 38, mass: 0.25 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 38, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = !!target.closest(
        "a, button, [role='button'], input, textarea, select",
      );
      setActive(isInteractive);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="custom-cursor-dot"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: active ? 1.9 : 1 }}
      />
      <motion.div
        aria-hidden
        className="custom-cursor-ring"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: active ? 1.25 : 1 }}
      />
    </>
  );
}

