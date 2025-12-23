import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Built with performance in mind. Sub-100ms load times and optimized for speed.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🎨",
      title: "Modern Design",
      description: "Beautiful, responsive interfaces that adapt seamlessly to any device size.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚡",
      title: "Developer Friendly",
      description: "Clean code, comprehensive documentation, and intuitive APIs.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level encryption and security best practices built into every layer.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: "📊",
      title: "Analytics Ready",
      description: "Real-time insights and comprehensive tracking for data-driven decisions.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🌍",
      title: "Global Scale",
      description: "Auto-scaling infrastructure that grows with your business needs.",
      color: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-gray-300">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to <span className="text-gradient">succeed</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful features designed to help you build, deploy, and scale your applications with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of developers who are already building amazing products with DevLaunch.
            </p>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 text-white font-semibold btn-glow">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
