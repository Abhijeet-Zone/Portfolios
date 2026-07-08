"use client";

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Astro-Ignis (Home in Space)',
      description: 'AI-powered space mission operations and monitoring system for real-time astronaut health tracking, spacecraft resource management, emergency response, and mission analytics to enhance operational safety and mission efficiency.',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=60',
      tech: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'Python', 'MongoDB', 'Tailwind CSS', 'Chart.js', 'REST APIs'],
      github: 'https://github.com/Abhijeet-Zone',
      live: '#',
      category: 'Full Stack',
      featured: true
    },
    {
      title: 'Tele-medico (GenAI Healthcare Bot)',
      description: 'AI-driven healthcare assistant providing remote consultation and intelligent diagnosis support. Designed contextual conversational pipelines to handle patient queries with medically accurate responses.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=60',
      tech: ['JavaScript', 'NLP', 'FastAPI', 'Node.js', 'LangChain'],
      github: 'https://github.com/Abhijeet-Zone',
      live: '#',
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'Emotion Analysis & Predictive ML Suite',
      description: 'Sentiment analysis system to classify emotional tone in product reviews for actionable business insights, combined with Titanic Survival Prediction and House Price Prediction using supervised ML.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'NumPy', 'Node.js', 'Random Forest', 'XGBoost'],
      github: 'https://github.com/Abhijeet-Zone',
      live: '#',
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'Generative AI Chatbot',
      description: 'Multi-turn conversational agent with memory and context-aware response generation using LLMs. Implemented conversation memory and context management to support long-form dialogue without loss of context.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=60',
      tech: ['Python', 'LangChain', 'LLMs', 'FastAPI'],
      github: 'https://github.com/Abhijeet-Zone',
      live: '#',
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'AI Authentication System',
      description: 'Secure authentication and workflow automation system for AI-enabled applications. Implemented JWT-based stateless authentication with bcrypt password hashing and n8n automation workflows.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&auto=format&fit=crop&q=60',
      tech: ['Express.js', 'Node.js', 'MongoDB', 'JWT', 'bcrypt', 'REST APIs', 'n8n'],
      github: 'https://github.com/Abhijeet-Zone',
      live: '#',
      category: 'Full Stack',
      featured: true
    },
  ];

  const filters = ['All', 'AI/ML', 'Full Stack'];

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my AI, ML, and full-stack engineering work — from space mission dashboards to intelligent chatbots.
          </p>
          <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#3a86ff] to-[#06ffa5] text-white shadow-lg'
                  : 'bg-[#00202f] border border-[#3a86ff]/30 text-gray-400 hover:text-[#ffe6c7] hover:border-[#3a86ff]/60'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#00202f] to-[#001a28] rounded-2xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/60 transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3a86ff]/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00202f] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.category === 'AI/ML' ? 'bg-[#06ffa5]/20 text-[#06ffa5] border border-[#06ffa5]/30' : 'bg-[#3a86ff]/20 text-[#3a86ff] border border-[#3a86ff]/30'}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#ffe6c7] mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#3a86ff] group-hover:to-[#06ffa5] group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-[#3a86ff]/10 text-[#3a86ff] rounded-full border border-[#3a86ff]/20">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-[#06ffa5]/10 text-[#06ffa5] rounded-full border border-[#06ffa5]/20">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#3a86ff] transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
