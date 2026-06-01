"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  onClick?: () => void;
  href?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  onClick,
  href,
  strength = 30,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white shadow-lg",
    outline:
      "border border-[var(--border-light)] text-white hover:border-[var(--accent)] hover:bg-[var(--accent-dim)]",
    ghost: "text-[var(--muted)] hover:text-white",
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={cn(
          "relative inline-flex items-center justify-center gap-2",
          "px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide",
          "cursor-pointer transition-all duration-200",
          "overflow-hidden group",
          variants[variant],
          className
        )}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, var(--accent-light), var(--accent))",
            }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Tag>
    </motion.div>
  );
}