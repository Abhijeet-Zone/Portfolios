import TiltCard from './TiltCard'

type Project = {
  title: string
  description: string
  tech: string[]
  link: string
}

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TiltCard>
      <div className="relative h-full flex flex-col bg-gradient-to-br from-[#00202f]/80 to-[#001a28]/80 backdrop-blur-md rounded-2xl border border-[#3a86ff]/30 p-6 md:p-8 hover:border-[#3a86ff]/60 transition-all duration-500 shadow-xl overflow-hidden group">
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a86ff]/10 to-[#06ffa5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-[#ffe6c7] mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#3a86ff] group-hover:to-[#06ffa5] group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-sm md:text-base flex-grow mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 text-xs font-medium bg-[#3a86ff]/10 text-[#3a86ff] rounded-full border border-[#3a86ff]/20">
                {t}
              </span>
            ))}
          </div>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#06ffa5] hover:text-white transition-colors duration-300"
          >
            <span>View on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </TiltCard>
  )
}

