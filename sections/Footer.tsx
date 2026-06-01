"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  // 🔗 YAHAN APNE CLIENT KE ACTUAL LINKS DAAL DENA (href ke andar)
  const socials = [
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/afterrcut?igsh=MXU2dXc1czIzOGl1MA%3D%3D&utm_source=qr", // <-- Apna Link Yahan Dalo
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ) 
    },
    { 
      name: "YouTube", 
      href: "https://youtube.com/@yourclient", // <-- Apna Link Yahan Dalo
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ) 
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/yourclient", // <-- Apna Link Yahan Dalo
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ) 
    },
  ];

  return (
    <footer className="relative bg-[#050505] pt-24 pb-8 overflow-hidden border-t border-white/10 flex flex-col items-center">
      
      {/* 🟣 Bottom Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Left: Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 max-w-sm"
          >
            <Link href="/" className="text-4xl font-black tracking-tighter text-white">
              AFTER<span className="text-purple-500">CUT</span><span className="text-purple-400">.</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed">
              Premium video editing for creators and brands looking to scale.
            </p>
            {/* The circular 'N' or Logo icon from your screenshot */}
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-purple-400 hover:border-purple-500/50 transition-all cursor-pointer">
              <span className="font-bold font-mono">N</span>
            </div>
          </motion.div>

          {/* Right: Social Links (AB ICONS HAIN) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-5 min-w-[200px]"
          >
            <h3 className="text-white font-black text-xl tracking-wide uppercase">Connect With Me</h3>
            
            {/* Icons Container */}
            <div className="flex gap-4 mt-2">
              {socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  target="_blank" // Ye link ko naye tab me kholne ke liye hai
                  rel="noopener noreferrer" // Security purpose ke liye zaroori hota hai jab target="_blank" ho
                  aria-label={social.name}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 🚀 THE MEGA TEXT WATERMARK */}
        <div className="w-full flex justify-center mb-8 overflow-hidden select-none pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[16vw] md:text-[14vw] font-black leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/10 to-transparent"
          >
            AFTERCUT
          </motion.h1>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-gray-500 text-sm font-medium"
        >
          <p>© 2026 AfterCut by Rishab Thakur. All rights reserved.</p>
          
          <p className="flex items-center gap-2">
            Designed & Developed with 
            <motion.span 
              animate={{ scale: [1, 1.3, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block text-red-500 text-lg"
            >
              💖
            </motion.span>
          </p>
        </motion.div>

      </div>
    </footer>
  );
}