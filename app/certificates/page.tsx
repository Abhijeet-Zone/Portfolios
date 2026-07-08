"use client";

export default function Certificates() {
  const certificates = [
    {
      title: "Dev Club Certification",
      issuer: "Dev Club IIT Delhi",
      platform: "IIT Delhi",
      date: "2024",
      skills: ["Web Development", "Programming", "Open Source", "Community"],
      link: "#"
    },
    {
      title: "AI/ML Internship Certificate",
      issuer: "Cognifyz Technologies",
      platform: "Cognifyz Intern",
      date: "2024",
      skills: ["Machine Learning", "Python", "Data Science", "AI Applications"],
      link: "#"
    },
    {
      title: "Software Engineering Internship",
      issuer: "Intern Studio",
      platform: "Intern Studio",
      date: "2024",
      skills: ["Software Engineering", "Full Stack", "REST APIs", "Agile"],
      link: "#"
    },
    {
      title: "Neo4j Graph Database Certification",
      issuer: "Neo4j",
      platform: "Neo4j GraphAcademy",
      date: "2024",
      skills: ["Graph Databases", "Cypher Query", "Neo4j", "Data Modeling"],
      link: "#"
    },
    {
      title: "Oracle Cloud Foundations",
      issuer: "Oracle",
      platform: "Oracle University",
      date: "2024",
      skills: ["Cloud Computing", "Oracle Cloud", "Infrastructure", "DevOps"],
      link: "#"
    },
    {
      title: "AI Software Engineering Internship",
      issuer: "HJ Infotech Innovations Pvt Ltd",
      platform: "Industry Internship",
      date: "Nov–Dec 2025",
      skills: ["FastAPI", "LangChain", "Next.js", "MongoDB", "CI/CD", "LLMs"],
      link: "#"
    }
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen text-[#ffe6c7] py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#3a86ff] to-[#06ffa5] bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Continuous learning and hands-on experience through recognized programs and industry internships
          </p>
        </div>

        {/* Achievements Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { emoji: "🏆", title: "International Runner-Up", detail: "NASA Space Apps Challenge – AI astronaut fatigue & health monitoring system", color: "from-yellow-500 to-amber-500" },
            { emoji: "🥇", title: "National Winner", detail: "Innovation Hackathon, SKIT Jaipur – Real-time AI problem-solving prototype", color: "from-[#3a86ff] to-[#06ffa5]" },
            { emoji: "🎖️", title: "Internal Winner", detail: "Smart India Hackathon (SIH) – ML-based astronaut recovery & communication system", color: "from-purple-500 to-pink-500" },
            { emoji: "🏅", title: "Winner (2×) Code Manthan 2024", detail: "Study Processor – AI-based learning assistant using NLP and LLMs", color: "from-[#06ffa5] to-teal-500" },
          ].map((ach, i) => (
            <div key={i} className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-5 rounded-xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-[1.02] flex items-start gap-4">
              <span className="text-3xl">{ach.emoji}</span>
              <div>
                <h4 className={`font-bold text-lg bg-gradient-to-r ${ach.color} bg-clip-text text-transparent`}>{ach.title}</h4>
                <p className="text-gray-300 text-sm mt-1">{ach.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-105 group"
            >
              <div>
                <div className="w-12 h-12 bg-linear-to-br from-[#3a86ff] to-[#06ffa5] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m-7.165-7.303a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-[#3a86ff] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-300 font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {cert.platform} • {cert.date}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-[#3a86ff]/10 text-[#3a86ff] rounded-full border border-[#3a86ff]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full block text-center py-2 rounded-lg text-sm font-semibold bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white hover:scale-105 transition-all duration-300"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
