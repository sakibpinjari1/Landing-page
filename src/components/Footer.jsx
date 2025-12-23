export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: ['Features', 'Pricing', 'Documentation', 'API'],
    company: ['About', 'Blog', 'Careers', 'Press'],
    resources: ['Community', 'Support', 'Status', 'Partners'],
    legal: ['Privacy', 'Terms', 'Cookie Policy', 'License']
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'GitHub', icon: '⚡', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'Discord', icon: '💬', href: '#' }
  ];

  return (
    <footer className="relative border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Main content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
                D
              </div>
              <h3 className="text-xl font-bold text-gradient">DevLaunch</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Building the future of web development with powerful tools and exceptional experiences.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 capitalize">
                {category === 'product' ? 'Product' : category === 'company' ? 'Company' : category === 'resources' ? 'Resources' : 'Legal'}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} DevLaunch. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Built with</span>
              <span className="text-red-500">❤️</span>
              <span className="text-gray-400">using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
