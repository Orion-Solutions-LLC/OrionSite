import { Link } from 'react-router-dom'
import { Code, Brain, Globe, Server, ArrowRight } from 'lucide-react'

const WhatWeDo = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Software Systems',
      description: 'Production-grade applications built to handle real workloads. We design systems that scale, maintain, and evolve with your business needs.',
      details: [
        'Full-stack application development',
        'API design and integration',
        'Database architecture and optimization',
        'System architecture and scalability planning'
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Automation Platforms',
      description: 'Intelligent systems that solve concrete business problems. From meeting analysis to workflow automation, we build AI that delivers measurable outcomes.',
      details: [
        'AI-powered analytics and insights',
        'Workflow automation systems',
        'Natural language processing applications',
        'Machine learning model integration'
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web & Platform Development',
      description: 'Modern web platforms and digital infrastructure. Clean architecture, clear documentation, and systems that work reliably in production.',
      details: [
        'Custom web applications',
        'E-commerce platforms',
        'Content management systems',
        'Progressive web applications'
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'IT & Infrastructure Solutions',
      description: 'Baltimore and Mid-Atlantic focused IT services. We understand local business needs and deliver infrastructure solutions that support long-term growth.',
      details: [
        'Cloud infrastructure setup and migration',
        'Network architecture and security',
        'System monitoring and maintenance',
        'IT consulting and support'
      ]
    }
  ]

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            What We Do
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We build production-grade software systems, AI platforms, and digital infrastructure. 
            Our focus is on clarity, reliability, and long-term partnerships.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-slate-800/50 border border-slate-700 rounded-lg p-8 h-full ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded flex items-center justify-center">
                  <div className="text-gray-400 text-sm">System Architecture</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Let's have a conversation about what you're building and whether we're the right fit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo

