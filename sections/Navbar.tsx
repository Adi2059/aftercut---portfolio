"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          AFTER<span className="text-purple-500">CUT.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#work" className="hover:text-purple-400 transition-colors">Work</Link>
          <Link href="#services" className="hover:text-purple-400 transition-colors">Services</Link>
          <Link href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</Link>
        </div>

        <Link href="#contact" className="px-6 py-2.5 bg-white text-black hover:bg-purple-500 hover:text-white rounded-full font-bold transition-all">
          Book a Call
        </Link>
      </div>
    </motion.nav>
  );
}