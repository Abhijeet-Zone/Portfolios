"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex-1 relative perspective-[1000px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY
        }}
        className="relative w-full max-w-lg mx-auto"
      >
        <div 
          className="absolute inset-0 bg-linear-to-r from-[#3a86ff]/20 to-[#06ffa5]/20 blur-3xl rounded-full"
          style={{ transform: "translateZ(-50px)" }}
        ></div>
        <motion.img
          src="/resume-illustration.svg"
          alt="Resume Illustration"
          className="relative w-full drop-shadow-2xl animate-[levitate_3s_ease-in-out_infinite]"
          style={{ transform: "translateZ(50px)" }}
        />
      </motion.div>
    </div>
  );
}

export default function Resume() {
  const highlights = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "1+ Year",
      subtitle: "Experience"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "5+ Projects",
      subtitle: "AI & Full Stack"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "20+ Skills",
      subtitle: "Technologies"
    }
  ];

  const skills = [
    "Python", "LangChain", "PyTorch", "FastAPI",
    "React.js", "Next.js", "Node.js", "MongoDB",
    "NLP", "LLMs", "REST APIs", "Docker"
  ];

  return (
    <section
      id="resume"
      className="relative min-h-screen px-6 py-20 flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl w-full">
        
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight pb-2 bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent mb-4 animate-[gradient_3s_ease_infinite] bg-size-[200%_auto]">
                Curriculum Vitae
              </h2>
              <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Here's a glimpse of my journey as a Full Stack AI Engineer.
              Download my resume to explore how I can contribute to your next project or team.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/Abhijeet_Acharya_Resume.docx"
                download
                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#3a86ff]/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#00202f] border-2 border-[#3a86ff] text-[#3a86ff] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#3a86ff] hover:text-white hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: ILLUSTRATION */}
          <TiltIllustration />
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#3a86ff]/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-[#3a86ff] to-[#06ffa5] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#ffe6c7] group-hover:text-[#3a86ff] transition-colors duration-300">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SKILLS PREVIEW */}
        <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-8 rounded-2xl border border-[#3a86ff]/20">
          <h3 className="text-2xl font-bold text-[#ffe6c7] mb-6 text-center">
            Core Technologies & Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-[#3a86ff]/10 text-[#3a86ff] rounded-full border border-[#3a86ff]/30 font-medium hover:bg-[#3a86ff]/20 hover:scale-110 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
