"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  // 📝 Form ka data store karne ke liye state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // 🔄 Button ki state (loading, success, error) manage karne ke liye
  const [status, setStatus] = useState("idle"); 

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading"); // Button par "Sending..." dikhane ke liye

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // 🔑 TUMHARI WEB3FORMS ACCESS KEY YAHAN HAI
          access_key: "d3961059-8e67-437f-bfe8-4e8c8ba299cb", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "🔥 New Lead from AfterCut Website!", // Email ka subject
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Form clear kar do
        
        // 3 second baad button wapas normal kar do
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-[#050505] overflow-hidden flex flex-col items-center">
      
      {/* Background Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header & Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center justify-center w-full text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white uppercase">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium text-center max-w-2xl">
            Let's create videos that people actually watch. Drop me a message below.
          </p>
        </motion.div>

        {/* 🎨 ANIMATED WORKING FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm w-full relative group"
        >
          {/* Form Hover Border Glow */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-purple-500/0 group-hover:border-purple-500/30 transition-colors duration-700 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Name Input */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col relative"
            >
              <label className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 shadow-inner"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col relative"
            >
              <label className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 shadow-inner"
              />
            </motion.div>
          </div>

          {/* Textarea */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col mb-10 relative"
          >
            <label className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Project Details</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your vision, timeline, and goals..."
              className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none shadow-inner"
            />
          </motion.div>

          {/* Dynamic Submit Button */}
          <motion.button
            type="submit"
            disabled={status === "loading" || status === "success"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={status === "idle" ? { scale: 1.02 } : {}}
            whileTap={status === "idle" ? { scale: 0.98 } : {}}
            className={`w-full font-bold text-lg py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative group/btn
              ${status === "success" ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]" : ""}
              ${status === "error" ? "bg-red-500 text-white" : ""}
              ${status === "idle" || status === "loading" ? "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]" : ""}
            `}
          >
            {/* Button ke andar ka shine effect (Sirf jab idle ho) */}
            {status === "idle" && (
              <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}
            
            {status === "idle" && (
              <>
                Send Message
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
            {status === "loading" && "Sending..."}
            {status === "success" && "Message Sent Successfully! 🎉"}
            {status === "error" && "Oops! Something went wrong."}
          </motion.button>

        </motion.form>
      </div>
    </section>
  );
}