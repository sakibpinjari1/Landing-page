import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingTexts = [
    "developers love",
    "users enjoy",
    "businesses need",
    "teams build with"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full glass mb-8 animate-fade-in-up ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm text-gray-300">Now available for early access</span>
        </div>

        {/* Main heading */}
        <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Build products <br />
          <span className="text-gradient gradient-animate">
            {rotatingTexts[currentText]}
          </span>
        </h1>

        {/* Subheading */}
        <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          A modern React-based platform that combines cutting-edge technology with 
          exceptional user experience. Built for performance, scalability, and developer happiness.
        </p>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">{"<100ms"}</div>
            <div className="text-sm text-gray-400">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
            <div className="text-sm text-gray-400">Developers</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 text-white font-semibold text-lg btn-glow transform hover:scale-105">
            Get Started Free
            <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-4 rounded-xl glass border border-white/10 hover:bg-white/10 transition-all duration-300 text-white font-semibold text-lg transform hover:scale-105">
            <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
}
