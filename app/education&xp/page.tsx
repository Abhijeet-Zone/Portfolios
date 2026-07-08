"use client";

import { useState } from 'react';

export default function EducationExperience() {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "University Institute of Technology (RGPV), Shivpuri (Gwalior)",
      location: "Madhya Pradesh, India",
      period: "2023 – Expected 2027",
      grade: "Pursuing",
      description: "Pursuing B.Tech in Computer Science and Engineering with focus on AI/ML, NLP, and full-stack development.",
      highlights: [
        "Machine Learning, NLP, MERN Stack coursework",
        "Data Structures, Database Management Systems",
        "Computer Networking, Internet of Things",
        "International Runner-Up at NASA Space Apps Challenge",
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    }
  ];

  const experiences = [
    {
      title: "AI Software Engineering Intern",
      company: "HJ Infotech Innovations Private Limited",
      location: "Remote (Client: Jaipur-based AI Product Development)",
      period: "Nov 2025 – Dec 2025",
      type: "Internship",
      description: "Developed AI-driven web applications using Python, FastAPI, Next.js, and React.js, enabling end-to-end model-to-UI pipelines.",
      responsibilities: [
        "Developed AI-driven web applications using Python, FastAPI, Next.js, and React.js",
        "Integrated LLM-based conversational systems using LangChain, improving automation response accuracy",
        "Designed and deployed REST APIs for ML model inference with input validation and optimized latency",
        "Optimized backend performance and MongoDB/SQL database queries for production workloads",
        "Collaborated in Agile sprints, contributed to code reviews on GitHub, and maintained CI/CD best practices"
      ],
      skills: ["Python", "FastAPI", "Next.js", "React.js", "LangChain", "MongoDB", "REST APIs", "CI/CD", "Agile"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
            Education & Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional experience in AI engineering and software development.
          </p>
          <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { key: 'education', label: '🎓 Education' },
            { key: 'experience', label: '💼 Experience' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-[#3a86ff] to-[#06ffa5] text-white shadow-lg shadow-[#3a86ff]/30'
                  : 'bg-[#00202f] border border-[#3a86ff]/30 text-gray-400 hover:text-[#ffe6c7] hover:border-[#3a86ff]/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-[#00202f] to-[#001a28] rounded-2xl border border-[#3a86ff]/30 hover:border-[#3a86ff]/60 transition-all duration-500 p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#ffe6c7]">{edu.degree}</h3>
                        <p className="text-[#3a86ff] font-medium">{edu.institution}</p>
                        <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                          <span>📍 {edu.location}</span>
                          <span className="text-[#3a86ff]">•</span>
                          <span>📅 {edu.period}</span>
                        </p>
                      </div>
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#3a86ff]/20 to-[#06ffa5]/20 border border-[#3a86ff]/30 rounded-xl text-[#06ffa5] font-bold text-sm whitespace-nowrap">
                        {edu.grade}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{edu.description}</p>
                    <ul className="space-y-2">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-[#3a86ff] mt-0.5">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-[#00202f] to-[#001a28] rounded-2xl border border-[#3a86ff]/30 hover:border-[#3a86ff]/60 transition-all duration-500 p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#ffe6c7]">{exp.title}</h3>
                        <p className="text-[#3a86ff] font-medium">{exp.company}</p>
                        <p className="text-gray-400 text-sm flex flex-wrap items-center gap-2 mt-1">
                          <span>📍 {exp.location}</span>
                          <span className="text-[#3a86ff]">•</span>
                          <span>📅 {exp.period}</span>
                        </p>
                      </div>
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#3a86ff]/20 to-[#06ffa5]/20 border border-[#3a86ff]/30 rounded-xl text-[#06ffa5] font-bold text-sm whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-[#3a86ff] mt-0.5">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-[#3a86ff]/10 text-[#3a86ff] rounded-full border border-[#3a86ff]/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
