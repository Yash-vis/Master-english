"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
    {
      title: "Personalized Learning Experience",
      description:
        "We believe in a learner-centric approach. Whether you're a beginner or looking to advance your skills, our tailored resources and one-on-one mentorship ensure you achieve your goals.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Personalized Learning Experience
        </div>
      ),
    },
    {
      title: "Global Community & Networking",
      description:
        "Join a thriving community of learners and professionals from around the world. Collaborate, share ideas, and build connections that can propel your career to the next level",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          Global Reach
        </div>
      ),
    },
    {
      title: "Expert-Led Curriculum",
      description:
        "Our courses are designed and taught by industry professionals with years of hands-on experience. You’ll gain practical knowledge and insights that prepare you for real-world challenges",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Expert Curriculam 👨‍🏫
        </div>
      ),
    },
    
  ];
const WhyChoose = () => {
  return (
    <div>
      <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChoose
