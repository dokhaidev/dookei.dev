"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";
import { cx } from "./ui";

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 220,
    damping: 20,
    mass: 0.8,
  });
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 220,
    damping: 20,
    mass: 0.8,
  });

  return (
    <motion.div
      className={cx("tilt-wrap", className)}
      style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const pctX = offsetX / rect.width - 0.5;
        const pctY = offsetY / rect.height - 0.5;
        rotateX.set(-(pctY * 10));
        rotateY.set(pctX * 12);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

