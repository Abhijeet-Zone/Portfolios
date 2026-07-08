'use client';

import React from 'react';
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import Hero3DModel from '../components/Hero3DModel';
import ServiceCard from '../components/ServiceCard';
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Resume from "./resume/page";
import EducationExperience from "./education&xp/page";
import Certificates from "./certificates/page";

export default function Home() {
  return (
    <main className="text-[#ffe6c7] scroll-smooth bg-[#0a0a0c] font-sans overflow-hidden">
      {/* 
        HERO SECTION - REDESIGNED 
        Full viewport height, 3-column layout overlaying a 3D canvas
      */}
      <section id="home" className="relative w-full h-screen flex items-center justify-between px-6 md:px-12 py-10 overflow-hidden">
        
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.4} />
            {/* Dramatic Studio Lighting */}
            <directionalLight position={[5, 5, 5]} intensity={2} color="#06ffa5" />
            <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#3a86ff" />
            <directionalLight position={[0, -5, 0]} intensity={1} color="#ff4d88" />
            <Hero3DModel />
          </Canvas>
        </div>

        {/* Left Column: Socials & Main Title */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full max-w-sm pointer-events-none">
          {/* Logo (Top Left) */}
          <div className="text-xl font-bold tracking-widest text-white mt-4 pointer-events-auto">
            AA
          </div>
          
          <div className="flex flex-col justify-center flex-grow pointer-events-auto">
            <h1 className="text-6xl md:text-8xl font-black leading-none text-white tracking-tighter">
              WHAT<br/>
              <span className="text-[#06ffa5]">I DO</span>
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-6 text-gray-400 text-xl pointer-events-auto mb-10">
            <a href="https://github.com/Abhijeet-Zone" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abhijeet-acharya-89756b358/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Column: Cards & Resume Button */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full max-w-md pointer-events-none">
          
          {/* Top URL string */}
          <div className="text-sm font-medium text-gray-400 mt-4 text-center absolute -left-20 top-0 w-full whitespace-nowrap pointer-events-auto hidden lg:block">
            github.com/Abhijeet-Zone
          </div>

          <div className="flex flex-col justify-center flex-grow pointer-events-auto mt-20">
           <ServiceCard 
  title="AI/ML ENGINEER" 
  subtitle="Building Intelligent Systems"
  description="AI/ML engineer specializing in designing, training, and deploying machine learning and deep learning models. Passionate about solving real-world problems using data, computer vision, NLP, and generative AI."
  isFirst={true}
/>
            <ServiceCard 
              title="BUILD & SCALE" 
              subtitle="Shipping AI in Production"
              description="I build the systems behind it: APIs, data, voice/real-time, and full-stack products—production-ready, not slide decks."
            />
          </div>

          <div className="flex justify-start pointer-events-auto mb-10 ml-8">
            <a 
              href="/Abhijeet_Acharya_Resume.docx" 
              className="flex items-center gap-3 text-gray-400 hover:text-[#06ffa5] transition-colors uppercase tracking-[0.2em] font-bold text-sm"
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <About />
      <Skills />
      <EducationExperience />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
    </main>
  );
}
