import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import Tutors from "@/components/Tutors";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.89] antialiased bg-grid-white/[0.02]">
     <HeroSection/>
     <Featured/>
     
     <TestimonialCards/>
     <Tutors/>
     <WhyChoose/>
  </main>
  );
}
