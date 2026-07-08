import React from 'react';

type ServiceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  isFirst?: boolean;
};

export default function ServiceCard({ title, subtitle, description, isFirst = false }: ServiceCardProps) {
  return (
    <div className={`relative p-8 md:p-10 group overflow-hidden transition-all duration-500 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/10 ${isFirst ? 'mb-4' : ''}`}>
      {/* Background Subtle Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06ffa5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full text-left">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-1 w-8 bg-gradient-to-r from-[#06ffa5] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wide group-hover:text-[#06ffa5] transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-400 text-sm font-medium mb-6 ml-0 group-hover:ml-12 transition-all duration-500">
          {subtitle}
        </p>
        
        <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex justify-start mt-8">
          <div className="w-10 h-10 rounded-full border border-gray-600/50 flex items-center justify-center group-hover:bg-[#06ffa5] group-hover:border-[#06ffa5] group-hover:text-[#0a0a0c] transition-all duration-300 cursor-pointer shadow-lg group-hover:shadow-[#06ffa5]/20 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
