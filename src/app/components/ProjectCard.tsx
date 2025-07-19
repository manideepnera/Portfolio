type ProjectProps = {
  title: string;
  description: string;
  link?: string;
  isAI?: boolean;
};

export default function ProjectCard({ title, description, link, isAI = false }: ProjectProps) {
  return (
    <div className={`ai-card group relative ${isAI ? 'border-cyan-400/20' : ''}`}>
      {/* AI Badge */}
      {isAI && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          AI
        </div>
      )}
      
      {/* Project Icon */}
      <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
        isAI 
          ? 'bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30' 
          : 'bg-white bg-opacity-5 border border-white border-opacity-10'
      }`}>
        {isAI ? (
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )}
      </div>

      {/* Content */}
      <h3 className={`text-xl font-semibold mb-2 ${isAI ? 'ai-glow' : ''}`}>
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
              isAI 
                ? 'text-cyan-400 hover:text-cyan-300' 
                : 'text-blue-500 hover:text-blue-400'
            }`}
          >
            View Project
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            isAI 
              ? 'bg-cyan-400 animate-pulse' 
              : 'bg-green-400'
          }`}></div>
          <span className="text-xs text-gray-500">
            {isAI ? 'AI-Powered' : 'Complete'}
          </span>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}