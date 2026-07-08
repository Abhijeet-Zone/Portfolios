"use client";

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const interests = [
    { icon: "🤖", label: "AI/ML Engineering", color: "from-blue-500 to-cyan-500" },
    { icon: "🧠", label: "NLP & LLMs", color: "from-purple-500 to-pink-500" },
    { icon: "🌐", label: "Full Stack Dev", color: "from-orange-500 to-red-500" },
    { icon: "🎨", label: "UI/UX Design", color: "from-green-500 to-emerald-500" },
    { icon: "🔧", label: "MLOps & APIs", color: "from-yellow-500 to-amber-500" },
    { icon: "🚀", label: "Innovation", color: "from-teal-500 to-cyan-500" }
  ];

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation",
      description: "Always exploring cutting-edge AI techniques and creative engineering solutions"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Learning",
      description: "Committed to continuous growth across ML, backend systems, and product engineering"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "Thriving in Agile teams with open-source contribution and code review culture"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Quality",
      description: "Delivering production-ready, optimized, and reliable AI solutions"
    }
  ];

  const funFacts = [
    "🏆 International Runner-Up at NASA Space Apps Challenge",
    "🥇 National Winner at Innovation Hackathon, SKIT Jaipur",
    "🎯 Winner (2×) at Code Manthan 2024",
    "🌍 Located in Jabalpur, Madhya Pradesh, India",
    "🧠 Passionate about LLMs and Prompt Engineering",
    "⚙️ Love building end-to-end AI pipelines",
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight pb-2 bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Analytical and detail-oriented Full Stack AI Engineer passionate about building intelligent automation solutions and predictive analytics platforms.
          </p>
          <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Left Column - Profile Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] rounded-2xl border border-[#3a86ff]/30 p-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-[#3a86ff] bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] flex items-center justify-center overflow-hidden shadow-lg mb-4">
                  <img src="/avatar.jpg?v=2" alt="Abhijeet Acharya" className="w-full h-full object-cover object-top scale-110 mt-1" />
                </div>
                <h3 className="text-2xl font-bold text-[#ffe6c7]">Abhijeet Acharya</h3>
                <p className="text-[#3a86ff] font-medium mt-1">Full Stack AI Engineer</p>
                <p className="text-gray-400 text-sm mt-2">Jabalpur, Madhya Pradesh, India</p>
                <div className="flex justify-center gap-3 mt-4">
                  <a href="https://github.com/Abhijeet-Zone" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3a86ff] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/abhijeet-acharya-89756b358/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3a86ff] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="mailto:abhijeetacharya02@gmail.com" className="text-gray-400 hover:text-[#3a86ff] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </a>
                </div>
              </div>

              {/* Contact Quick Info */}
              <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] rounded-2xl border border-[#3a86ff]/30 p-6 space-y-3">
                <h4 className="text-[#ffe6c7] font-semibold mb-4">Quick Info</h4>
                {[
                  { label: "Phone", value: "+91 79992 73675" },
                  { label: "Email", value: "abhijeetacharya02@gmail.com" },
                  { label: "Degree", value: "B.Tech CSE (Expected 2027)" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xs text-[#3a86ff] font-semibold uppercase tracking-wider">{item.label}</span>
                    <span className="text-sm text-gray-300 break-all">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tabbed Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tab Navigation */}
            <div className="flex gap-2 bg-[#00202f] p-1 rounded-xl border border-[#3a86ff]/20">
              {['story', 'interests', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#3a86ff] to-[#06ffa5] text-white shadow-lg'
                      : 'text-gray-400 hover:text-[#ffe6c7]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Story Tab */}
            {activeTab === 'story' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-6 md:p-8 rounded-2xl border border-[#3a86ff]/30">
                  <h3 className="text-2xl font-bold text-[#ffe6c7] mb-4">My Journey</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      I'm <span className="text-[#3a86ff] font-semibold">Abhijeet Acharya</span>, a Full Stack AI Engineer pursuing B.Tech in Computer Science Engineering at UIT RGPV, Shivpuri. My journey began with a curiosity for solving real-world problems through intelligent automation.
                    </p>
                    <p>
                      I specialize in <span className="text-[#06ffa5] font-semibold">Machine Learning, NLP, and LLM-based AI systems</span>, and have hands-on experience building scalable backend services with <span className="text-[#3a86ff] font-semibold">Python, FastAPI, Express.js, and modern full-stack technologies</span>.
                    </p>
                    <p>
                      My proudest achievement is being an <span className="text-[#06ffa5] font-semibold">International Runner-Up at the NASA Space Apps Challenge</span>, where I built an AI-driven astronaut fatigue and health monitoring system using IoT, predictive analytics, and ML models.
                    </p>
                    <p>
                      I've also won at Innovation Hackathon (SKIT Jaipur), Smart India Hackathon (Internal), and Code Manthan 2024 (2×). I'm passionate about designing reliable, production-ready AI solutions that solve industrial-level problems.
                    </p>
                  </div>
                </div>

                {/* Fun Facts */}
                <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-6 rounded-2xl border border-[#3a86ff]/30">
                  <h3 className="text-xl font-bold text-[#ffe6c7] mb-4">Fun Facts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {funFacts.map((fact, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <span>{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Interests Tab */}
            {activeTab === 'interests' && (
              <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-6 md:p-8 rounded-2xl border border-[#3a86ff]/30">
                <h3 className="text-2xl font-bold text-[#ffe6c7] mb-6">Interests & Passions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="relative group p-4 rounded-xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/60 bg-[#001a28] transition-all duration-300 hover:scale-105 cursor-default text-center"
                    >
                      <div className="text-3xl mb-2">{interest.icon}</div>
                      <div className="text-sm font-medium text-[#ffe6c7]">{interest.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Values Tab */}
            {activeTab === 'values' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-6 rounded-2xl border border-[#3a86ff]/30 hover:border-[#3a86ff]/60 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[#ffe6c7] mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
