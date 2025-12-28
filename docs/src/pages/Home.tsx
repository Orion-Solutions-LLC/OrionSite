import { Link } from 'react-router-dom'
import { Globe, Brain, Server } from 'lucide-react'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Starfield Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 100 }).map((_, i) => (
              <circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={Math.random() * 2 + 0.5}
                fill="white"
                opacity={Math.random() * 0.8 + 0.2}
              />
            ))}
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6">
            Let's build{' '}
            <span className="text-blue-500">your dream</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Baltimore-based software contracting for websites, AI apps, and IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
            >
              Start a Project
            </Link>
            <Link
              to="/our-work"
              className="px-8 py-4 bg-slate-900 border-2 border-blue-500 text-white font-semibold rounded hover:bg-slate-800 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 border border-blue-500/30 rounded-lg p-8 hover:border-blue-500/60 transition-colors">
              <div className="w-16 h-16 bg-blue-600/30 rounded-md flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-400">
                Custom websites and web applications built with modern technologies
              </p>
            </div>

            <div className="bg-slate-900/80 border border-blue-500/30 rounded-lg p-8 hover:border-blue-500/60 transition-colors">
              <div className="w-16 h-16 bg-blue-600/30 rounded-md flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">AI Applications</h3>
              <p className="text-gray-400">
                Intelligent solutions using AI to solve complex business problems
              </p>
            </div>

            <div className="bg-slate-900/80 border border-blue-500/30 rounded-lg p-8 hover:border-blue-500/60 transition-colors">
              <div className="w-16 h-16 bg-blue-600/30 rounded-md flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">IT Solutions</h3>
              <p className="text-gray-400">
                Infrastructure and support services for businesses of all sizes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

