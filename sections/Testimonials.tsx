"use client";

import { motion } from "framer-motion";
import { img } from "framer-motion/m";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Saurav Jain",
    role: "Creator (20K+ Followers)",
    text: "Working with Rishab completely changed my channel's trajectory. The retention rate on my videos skyrocketed by 40% after he took over the edits.",
    img: "/images/user1.jpeg"
  },
  {
    id: 2,
    name: "Neha Gupta",
    role: "Founder, TechFit",
    text: "Fast, professional, and incredibly creative. He doesn't just edit videos; he understands the psychology of what makes people watch till the end.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Karan Verma",
    role: "Fitness Influencer",
    text: "The best investment I made for my personal brand. The reels he edited for me brought in over 2 million views organically within a week.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Priya Desai",
    role: "Podcast Host",
    text: "He took my 2-hour boring podcasts and turned them into viral micro-content. Absolute genius with pacing and sound design!",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-32 relative bg-[#050505] overflow-hidden flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* 🚀 PERFECTLY CENTERED HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center justify-center w-full text-center px-6"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-white uppercase">
            What Clients Say
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium text-center">
            Don't just take my word for it.
          </p>
        </motion.div>

      </div>

      {/* INFINITE 3D SCROLLING MARQUEE */}
      <div className="relative w-full max-w-[100vw] overflow-hidden pb-10">
        
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        <div 
          className="flex w-fit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{
              x: isHovered ? "0%" : ["0%", "-50%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{ x: isHovered ? undefined : "0%" }}
            className="flex gap-6 px-3 cursor-grab active:cursor-grabbing"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] flex-shrink-0 relative p-8 md:p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 hover:border-purple-500/50 hover:bg-[#111] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] group"
              >
                <div className="absolute top-6 left-6 text-8xl font-serif text-white/5 group-hover:text-purple-500/10 transition-colors duration-500 pointer-events-none leading-none select-none">
                  "
                </div>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed relative z-10 mb-8 font-light">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-white/10">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-purple-500 transition-colors duration-500"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}