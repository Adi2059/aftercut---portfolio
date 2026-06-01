import Navbar from "@/sections/Navbar";
import HeroSection from "@/sections/HeroSection";
import FeaturedWork from "@/sections/FeaturedWork";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}