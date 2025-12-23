import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "10K+", label: "Active Developers" },
    { number: "500+", label: "Projects Deployed" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with modern web technologies."
    },
    {
      title: "Developer Experience",
      description: "Building tools that developers love to use and can't imagine working without."
    },
    {
      title: "Performance Obsessed",
      description: "Every millisecond counts. We optimize for speed at every level of the stack."
    }
  ];

  return (
    <section id="about-section" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-gray-300">About</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Building the future of <span className="text-gradient">web development</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            DevLaunch represents the next generation of development platforms, combining cutting-edge technology 
            with exceptional user experience to empower developers worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`glass rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            To democratize web development by providing powerful, intuitive tools that enable 
            developers to build exceptional products faster, more reliably, and with greater joy than ever before.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 text-white font-semibold btn-glow">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
