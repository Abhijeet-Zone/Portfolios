"use client";

import { useState } from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      shortTitle: "Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      accentColor: "#3a86ff",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "⚡" },
        { name: "C++", icon: "⚙️" },
        { name: "Java", icon: "☕" },
        { name: "SQL", icon: "💾" },
      ],
    },
    {
      title: "AI & Machine Learning",
      shortTitle: "AI / ML",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      accentColor: "#a855f7",
      skills: [
        { name: "PyTorch", icon: "🔥" },
        { name: "Scikit-learn", icon: "📊" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Matplotlib", icon: "📈" },
        { name: "LangChain", icon: "🧠" },
        { name: "LangGraph", icon: "🕸️" },
        { name: "NLP Pipelines", icon: "💬" },
      ],
    },
    {
      title: "Backend & APIs",
      shortTitle: "Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      accentColor: "#06ffa5",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "FastAPI", icon: "⚡" },
        { name: "REST APIs", icon: "🔌" },
        { name: "N8N", icon: "🔄" },
      ],
    },
    {
      title: "Frontend & UI",
      shortTitle: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      accentColor: "#f97316",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "JavaScript", icon: "📜" },
        { name: "UI/UX Design", icon: "🎨" },
      ],
    },
    {
      title: "Databases",
      shortTitle: "Databases",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      color: "from-yellow-500 to-amber-500",
      accentColor: "#f59e0b",
      skills: [
        { name: "MongoDB", icon: "🌿" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "SQL", icon: "🗃️" },
        { name: "Pinecone", icon: "🌲" },
      ],
    },
    {
      title: "DevOps & Tools",
      shortTitle: "DevOps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-teal-500 to-cyan-500",
      accentColor: "#14b8a6",
      skills: [
        { name: "Git & GitHub", icon: "🐙" },
        { name: "Docker", icon: "🐋" },
        { name: "Vercel", icon: "▲" },
        { name: "Netlify", icon: "🌐" },
        { name: "Azure", icon: "☁️" },
        { name: "CI/CD", icon: "🔁" },
        { name: "Agile/Scrum", icon: "📋" },
        { name: "Prompt Engineering", icon: "✍️" },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
            Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical toolkit spanning AI/ML, full-stack engineering, and cloud infrastructure.
          </p>
          <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Category Sidebar */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 whitespace-nowrap flex-shrink-0 lg:flex-shrink lg:whitespace-normal ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-[#3a86ff]/20 to-[#06ffa5]/20 border border-[#3a86ff]/60 text-[#ffe6c7]'
                    : 'border border-[#3a86ff]/10 text-gray-400 hover:text-[#ffe6c7] hover:border-[#3a86ff]/30'
                }`}
              >
                <span style={{ color: activeCategory === index ? cat.accentColor : undefined }}>
                  {cat.icon}
                </span>
                <span className="text-sm font-medium">{cat.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            {skillCategories.map((category, catIndex) => (
              catIndex === activeCategory && (
                <div key={catIndex} className="bg-gradient-to-br from-[#00202f] to-[#001a28] rounded-2xl border border-[#3a86ff]/30 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#ffe6c7]">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.skills.length} skills</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group relative bg-[#001a28] border border-[#3a86ff]/20 rounded-xl p-4 text-center hover:border-[#3a86ff]/60 hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <div className="text-sm font-medium text-[#ffe6c7] group-hover:text-[#3a86ff] transition-colors">{skill.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* All Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#ffe6c7] mb-8">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap(cat => cat.skills).map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium bg-[#00202f] border border-[#3a86ff]/20 text-gray-300 hover:border-[#3a86ff]/60 hover:text-[#3a86ff] hover:scale-110 transition-all duration-300 cursor-default"
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
