"use client";

import { useMemo, useState } from "react";

export function AiRobotViewer() {
  const [look, setLook] = useState({ x: 0, y: 0, rx: 0, ry: 0 });

  const robotTransform = useMemo(
    () => ({
      transform: `translate(${look.x}px, ${look.y}px) rotateX(${look.rx}deg) rotateY(${look.ry}deg)`,
    }),
    [look.x, look.y, look.rx, look.ry],
  );

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);
    const moveLimit = 5;
    const rotateLimit = 6;

    setLook({
      x: Math.max(-moveLimit, Math.min(moveLimit, dx * moveLimit)),
      y: Math.max(-moveLimit, Math.min(moveLimit, dy * moveLimit)),
      rx: Math.max(-rotateLimit, Math.min(rotateLimit, -dy * rotateLimit)),
      ry: Math.max(-rotateLimit, Math.min(rotateLimit, dx * rotateLimit)),
    });
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border bg-background/30 p-4"
      onMouseMove={onMove}
      onMouseLeave={() => setLook({ x: 0, y: 0, rx: 0, ry: 0 })}
    >
      <div className="relative mx-auto aspect-square w-full max-w-[340px]" style={{ perspective: "1000px" }}>
        <img
          src="https://png.pngtree.com/png-vector/20250523/ourmid/pngtree-cute-robot-png-image_16364091.png"
          alt="AI robot"
          className="h-full w-full select-none object-contain transition-transform duration-150 ease-out"
          style={robotTransform}
          draggable={false}
        />
      </div>
    </div>
  );
}
