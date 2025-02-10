export default function Header({ onTryDemo , showDemoButton}) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-purple-900 py-12 text-center shadow-xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 animate-pulse-slow" />
      
      <div className="relative z-10 space-y-3">
        <h1 className="text-5xl font-poppins font-bold bg-gradient-to-r from-purple-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
          Face Analysis Pro
        </h1>
        <p className="text-lg text-purple-100/90 max-w-2xl mx-auto leading-relaxed">
          Enhance your natural beauty with AI-powered facial insights
        </p>
        
        {/* Animated CTA */}
        {showDemoButton && (
        <div className="mt-6">
          <button onClick={onTryDemo} className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-purple-50 hover:bg-white/20 transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5">
            Try Free Demo
            <svg 
              className="w-5 h-5 ml-2 -mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        )}
      </div>
    </header>
  );
}