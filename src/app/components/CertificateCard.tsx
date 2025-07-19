type CertificateProps = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  isAI?: boolean;
};

export default function CertificateCard({ title, issuer, date, link, isAI = false }: CertificateProps) {
  return (
    <div className={`ai-card group relative ${isAI ? 'border-purple-400/20' : ''}`}>
      {/* AI Badge */}
      {isAI && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-xs px-2 py-1 rounded-full font-medium">
          AI/ML
        </div>
      )}
      
      {/* Certificate Icon */}
      <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
        isAI 
          ? 'bg-gradient-to-br from-purple-500/20 to-cyan-400/20 border border-purple-400/30' 
          : 'bg-white bg-opacity-5 border border-white border-opacity-10'
      }`}>
        {isAI ? (
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        )}
      </div>

      {/* Content */}
      <h3 className={`text-lg font-semibold mb-1 ${isAI ? 'ai-glow' : ''}`}>
        {title}
      </h3>
      
      <div className="flex items-center gap-2 mb-3">
        <p className="text-gray-400 text-sm font-medium">
          {issuer}
        </p>
        <span className="text-gray-600">•</span>
        <p className="text-gray-500 text-sm">
          {date}
        </p>
      </div>

      {/* Progress indicator for ongoing certifications */}
      {(date.includes('Progress') || date.includes('Learning')) && (
        <div className="mb-4">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className={`h-2 rounded-full ${
              isAI 
                ? 'bg-gradient-to-r from-purple-500 to-cyan-400' 
                : 'bg-blue-500'
            } ${date.includes('Progress') ? 'w-3/4' : 'w-1/2'}`}></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {date.includes('Progress') ? '75% Complete' : 'Just Started'}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
              isAI 
                ? 'text-purple-400 hover:text-purple-300' 
                : 'text-blue-500 hover:text-blue-400'
            }`}
          >
            View Certificate
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        
        {/* Verification badge */}
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            date.includes('Progress') || date.includes('Learning')
              ? (isAI ? 'bg-purple-400 animate-pulse' : 'bg-yellow-400 animate-pulse')
              : (isAI ? 'bg-cyan-400' : 'bg-green-400')
          }`}></div>
          <span className="text-xs text-gray-500">
            {date.includes('Progress') || date.includes('Learning') ? 'In Progress' : 'Verified'}
          </span>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}