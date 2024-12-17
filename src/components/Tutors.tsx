import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from './ui/wavy-background';
const people = [
    {
      id: 1,
      name: "Yashdeep Sir",
      designation: "Training Head",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Alex Cary",
      designation: "Product Manager",
      image:
        "/tutimg/2.jpg",
    },
    {
      id: 3,
      name: "Steve Smith",
      designation: "Data Scientist",
      image:
        "/tutimg/3.jpg",
    },
    {
      id: 4,
      name: "Yash Vishwakarma",
      designation: "UX Designer",
      image:
        "/tutimg/myimage.jpg",
    },
    {
      id: 5,
      name: "Alvaro Morte",
      designation: "Game developer",
      image:
        "/tutimg/1.jpg",
    },
    {
      id: 6,
      name: "Zeius",
      designation: "Vocal Coach",
      image:
        "/tutimg/4.jpg",
    },
  ];
const Tutors = () => {
  return (
    <div className="relative h-[30rem] overflow-hidden items-center justify-center flex">
    <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className='text-6xl text-center mb-8'>Meet our Trainers</h2>
        <p className='mb-4'>Guiding You to Success with Expertise and Care</p>
        <div className='flex flex-row items-center justify-center mb-10 w-full '>
        <AnimatedTooltip items={people} />
        </div>
    </WavyBackground>
  </div>
  )
}

export default Tutors
