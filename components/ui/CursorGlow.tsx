"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Mobile pe hide karne ke liye

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Agar button ya link par hover kare toh cursor bada ho jaye
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                          target.tagName.toLowerCase() === 'a' || 
                          target.tagName.toLowerCase() === 'button';
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  // Agar user phone par hai (mouse move nahi kiya), toh cursor mat dikhao
  if (!isVisible) return null;

  return (
    <>
      {/* Chota Purple Dot (Jo ekdum mouse ke sath chalega) */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-purple-500 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          opacity: isHovering ? 0 : 1, // Link par aate hi gayab
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      
      {/* Badi Trailing Ring (Jo thoda delay ke sath follow karegi) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-500/50 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1, // Link par aate hi bada ho jayega
          backgroundColor: isHovering ? "rgba(168, 85, 247, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}