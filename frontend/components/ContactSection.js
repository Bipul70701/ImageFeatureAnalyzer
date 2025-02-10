export default function ContactSection() {
  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced neural networks provide precise facial assessments",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: "Smart Rating System",
      description: "Real-time scoring with detailed feature breakdown",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
        </svg>
      )
    },
    {
      title: "Personalized Tips",
      description: "Customized beauty recommendations for optimal results",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
      )
    }
  ];

  return (
    <div className="contact-section relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('/noise.png')]" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/20 to-transparent" />

      <div className="container mx-auto px-4 py-20 relative">
        {/* Key Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Why Choose FaceRate?
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card p-8 text-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 rounded-xl border border-gray-200/50 group-hover:border-purple-300/30 transition-colors" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Showcase */}
        <div className="demo-showcase py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                See It in Action
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover how our AI-powered analysis transforms your beauty routine with precision insights
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 1, path: "/images/_- visual selection.png" },
            { id: 2, path: "/images/_- visual selection.png" },
            { id: 3, path: "/images/_- visual selection.png" }
          ].map((item) => (
            <div 
              key={item.id}
              className="card overflow-hidden group relative h-[400px] transition-all duration-300 hover:-translate-y-2"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              
              {/* Image */}
              <img 
                src={item.path}
                alt="Demo showcase"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                <h4 className="font-bold text-xl mb-2">
                  {item.id === 1 && "Smart Upload"}
                  {item.id === 2 && "Deep Analysis"}
                  {item.id === 3 && "Premium Insights"}
                </h4>
                <p className="text-sm opacity-90">
                  {item.id === 1 && "Drag & drop or click to upload your photo"}
                  {item.id === 2 && "Instant feature breakdown with scores"}
                  {item.id === 3 && "Unlock full report with expert recommendations"}
                </p>
              </div>
            </div>
          ))}
        </div>

        </div>

        {/* Contact Support Section */}
        <div className="mt-20 text-center relative">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-12 rounded-3xl shadow-inner border border-gray-200/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Personalized Assistance?
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Our beauty experts are ready to help you get the most out of your facial analysis
            </p>
            <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <svg 
                className="w-6 h-6 text-purple-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a 
                href="mailto:support@facerate.co" 
                className="text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
              >
                support@facerate.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}