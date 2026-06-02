"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

// 🎬 Timeline Card Component
const ProjectTimelineCard = ({ project, index }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isLeft = index % 2 === 0;

  // 🚀 THE FIX: Jab user play karega, toh aawaz apne aap ON ho jayegi
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Video play hote hi unmute kar do
        videoRef.current.muted = false; 
        setIsMuted(false);
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative flex flex-col md:flex-row w-full items-center mb-16 md:mb-32 group ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
      
      {/* 🟣 Center Timeline Dot */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#050505] border-[4px] border-purple-500 rounded-full hidden md:flex items-center justify-center z-20 shadow-[0_0_20px_rgba(124,58,237,0.6)] group-hover:scale-125 transition-transform duration-300"
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </motion.div>

      {/* Card Wrapper */}
      <div className="w-full md:w-[45%] relative z-10">
        <CardContent 
          project={project} 
          isLeft={isLeft} 
          isPlaying={isPlaying} 
          isMuted={isMuted} 
          togglePlay={togglePlay} 
          toggleMute={toggleMute} 
          videoRef={videoRef} 
        />
      </div>

    </div>
  );
};

// 📦 Main Card Design
const CardContent = ({ project, isLeft, isPlaying, isMuted, togglePlay, toggleMute, videoRef }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-[#0a0a0a] rounded-[2rem] border border-white/10 hover:border-purple-500/50 hover:bg-[#111] transition-all duration-500 overflow-hidden shadow-2xl p-4 flex flex-col group/card w-full"
    >
      {/* 📺 Video Container */}
      <div 
        onClick={togglePlay}
        className="relative w-full aspect-video rounded-xl overflow-hidden bg-black cursor-pointer"
      >
        <video
          ref={videoRef}
          src={project.videoSrc}
          loop
          playsInline
          muted={isMuted} // React State se linked
          className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? "scale-100 opacity-100" : "scale-105 opacity-70 group-hover/card:opacity-100 group-hover/card:scale-100"}`}
        />
        
        {/* Play Button Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/card:bg-purple-600 group-hover/card:scale-110 transition-all duration-300 shadow-2xl">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>
        )}

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all z-20 ${isMuted ? 'bg-red-500/80 hover:bg-red-500' : 'bg-black/60 hover:bg-purple-600'}`}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* 📝 Text Details */}
      <div className="pt-6 pb-2 px-3">
        <div className="flex justify-between items-center mb-3">
          <span className="text-purple-400 text-xs font-bold uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            {project.category}
          </span>
          <span className="text-gray-400 text-xs font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
            {project.views}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white leading-snug group-hover/card:text-purple-300 transition-colors">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default function FeaturedWork() {
  const projects = [
    { 
      id: 1, 
      title: "TypoGraphy Videos", 
      category: "Text Editing", 
      views: "1.2m+", 
      videoSrc: "https://res.cloudinary.com/dnhr41qfc/video/upload/v1780337815/Video-876_ykopvt.mp4" 
    },
    { 
      id: 2, 
      title: "YouTube Documentary", 
      category: "LongForm Content", 
      views: "500K+ Views", 
      videoSrc: "https://res.cloudinary.com/dnhr41qfc/video/upload/v1780337828/Lahore_s_Most_Brutal_Gang_War_Documentary_720P_HD_q9dd3y.mp4" 
    },
    { 
      id: 3, 
      title: "Advertisement Videos", 
      category: "Commercial & Performance Marketing", 
      views: "1M Views", 
      videoSrc: "https://res.cloudinary.com/dnhr41qfc/video/upload/v1780387425/project3_xmm8wg.mp4" 
    },
    { 
      id: 4, 
      title: "Digital Marketing", 
      category: "Social Media", 
      views: "650k+ Views", 
      videoSrc: "https://res.cloudinary.com/dnhr41qfc/video/upload/v1780387409/project4_jhukuo.mp4" 
    },
  ];

  return (
    <section id="work" className="py-32 relative bg-[#050505] overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Selected Projects</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Edits designed to increase engagement, retention and conversions.
          </p>
        </motion.div>

        {/* 🚀 TIMELINE CONTAINER */}
        <div className="relative w-full">
          {/* Vertical Center Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent hidden md:block -translate-x-1/2 z-0" />

          {/* Cards Loop */}
          {projects.map((project, index) => (
            <ProjectTimelineCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}