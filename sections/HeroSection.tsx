"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";

// 🎬 NAYA: Premium Video Player Component
const ReelPlayer = ({ src, pos, rotate, delay }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Ye lagana zaroori hai taaki mute button dabane se video pause na ho jaye
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -15, 0] }}
      transition={{
        opacity: { duration: 1, delay: delay },
        y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: delay }
      }}
      onClick={togglePlay}
      className={`absolute hidden xl:flex flex-col items-center justify-center w-[240px] h-[420px] rounded-[2rem] border-2 border-white/10 backdrop-blur-sm bg-black overflow-hidden ${pos} ${rotate} hover:rotate-0 hover:scale-110 hover:z-50 hover:border-purple-500/80 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] transition-all duration-500 cursor-pointer group z-0`}
    >
      {/* Video File */}
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        muted={isMuted}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Play Overlay (Jab pause ho tabhi dikhega) */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </div>
      )}

      {/* Premium Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-sm hover:bg-purple-600 hover:scale-110 transition-all z-20"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </motion.div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px] -z-10" />

      {/* 🚀 LEFT REEL (Ensure naam reel1.mp4 ho public/videos folder mein) */}
      <ReelPlayer 
        video src="https://res.cloudinary.com/dnhr41qfc/video/upload/v1780338284/IMG_4659_lyz22u.mp4"
        pos="left-[3%] top-[15%]" 
        rotate="-rotate-6" 
        delay={0.2} 
      />

      {/* 🚀 RIGHT REEL (Ensure naam reel2.mp4 ho public/videos folder mein) */}
      <ReelPlayer 
        video src="https://res.cloudinary.com/dnhr41qfc/video/upload/v1780338284/IMG_4659_lyz22u.mp4" 
        pos="right-[3%] top-[25%]" 
        rotate="rotate-6" 
        delay={0.5} 
      />

      {/* Main Center Content */}
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center z-10 relative mt-10 pointer-events-none">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Turning Raw Footage Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 drop-shadow-lg">
              Content That Demands Attention.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 relative z-20 pointer-events-auto"
        >
          Professional video editing for creators, brands, and businesses looking to increase engagement, retention, and reach.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full relative z-20 pointer-events-auto"
        >
          <Link href="#work" className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:-translate-y-1 whitespace-nowrap inline-flex items-center justify-center">
            View My Work
          </Link>
          <Link href="#contact" className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm hover:-translate-y-1 whitespace-nowrap inline-flex items-center justify-center">
            Start a Project
          </Link>
        </motion.div>

        {/* Client Stats Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 border-t border-white/10 pt-12 w-full max-w-4xl relative z-20"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-3">10M+</h3>
            <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-[0.2em]">Views Generated</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-3">15+</h3>
            <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-[0.2em]">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl md:text-6xl font-black text-white mb-3">90+</h3>
            <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-[0.2em]">Videos Edited</p>
          </div>
        </motion.div>

        {/* Trusted by text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex flex-col items-center justify-center relative z-20 pointer-events-auto"
        >
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-[0.15em] mb-6">
            Trusted by top creators & brands
          </p>
          <div className="w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-purple-500 rounded-full"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}