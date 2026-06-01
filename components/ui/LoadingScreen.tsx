"use client";
import { motion } from "framer-motion";
import { useMouseGlow } from "../../hooks/useMouseGlow";

export default function CursorGlow() {
  const { x, y } = useMouseGlow();

  return (
    <>
      {/* Large ambient glow */}
      <motion.div
        className="pointer-events-none fixed z-0 rounded-full"
        style={{
          width: 600,
          height: 600,
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)",
        }}
      />
      {/* Sharp cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full"
        style={{
          width: 8,
          height: 8,
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: "var(--accent-light)",
          boxShadow: "0 0 12px var(--accent)",
        }}
      />
    </>
  );
}