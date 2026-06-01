"use client";

import { motion } from "framer-motion";

export default function Services() {
  // Yahan images ke links hain. Baad mein tum inhe client ke actual thumbnails se replace kar sakte ho.
  const services = [
    {
      id: "01",
      title: "Short Form Editing",
      description: "High-retention Reels, Shorts & TikToks designed with fast-paced cuts, pop-up captions, and sound effects for maximum virality.",
      bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-2" // Bada horizontal box
    },
    {
      id: "02",
      title: "YouTube Video",
      description: "Long-form storytelling with perfect pacing, b-rolls, and cinematic color grading.",
      bgImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-1" // Lamba vertical box
    },
    {
      id: "03",
      title: "Commercial Ads",
      description: "Persuasive promotional content and ad creatives crafted to boost ROI.",
      bgImage: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-1" // Chota square box
    },
    {
      id: "04",
      title: "Motion Graphics",
      description: "Custom 2D/3D text animations, masking, seamless transitions, and visual effects that make your videos stand out.",
      bgImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-2" // Bada horizontal box
    }
  ];

  return (
    <section id="services" className="py-32 relative bg-[#050505] flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 flex flex-col items-center w-full px-6"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white uppercase">
          My Expertise
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl text-center">
          Delivering high-retention edits that turn viewers into loyal subscribers.
        </p>
      </motion.div>

      {/* 🍱 CINEMATIC BENTO BOX GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-6">
        
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`${service.colSpan} group relative rounded-[2.5rem] overflow-hidden min-h-[350px] flex flex-col justify-end p-8 md:p-10 border border-white/10 hover:border-purple-500/50 transition-all duration-500 cursor-pointer shadow-2xl`}
          >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
              <img 
                src={service.bgImage} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50 grayscale group-hover:grayscale-0"
              />
              {/* Dark Gradient Overlay (Text ko clearly dikhane ke liye) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
            </div>

            {/* Premium Agency Number Tag (Top Right) */}
            <div className="absolute top-8 right-8 text-2xl font-black text-white/20 group-hover:text-purple-500 transition-colors duration-500 z-10 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-white/20 group-hover:bg-purple-500 transition-colors"></span>
              {service.id}
            </div>
            
            {/* Text Content */}
            <div className="relative z-10 w-full md:w-4/5">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors drop-shadow-lg">
                {service.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed drop-shadow-md">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}