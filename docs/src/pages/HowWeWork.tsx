import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const HowWeWork = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Listen & Understand the Real Problem',
      description: 'We start by understanding what you\'re actually trying to accomplish, not just what you think you need. This means asking questions, understanding constraints, and identifying the core challenge before proposing solutions.',
      details: [
        'Initial discovery conversations',
        'Understanding business context and goals',
        'Identifying technical and operational constraints',
        'Defining success metrics'
      ]
    },
    {
      number: '02',
      title: 'Design Systems, Not Just Code',
      description: 'We think in terms of architecture, maintainability, and long-term viability. Every system we build is designed to evolve, scale, and integrate with your existing operations.',
      details: [
        'System architecture design',
        'Technology stack selection',
        'Integration planning',
        'Scalability and performance considerations'
      ]
    },
    {
      number: '03',
      title: 'Build with Clarity and Documentation',
      description: 'Code that\'s clear, documented, and maintainable. We write systems that your team can understand, modify, and extend. No black boxes, no mystery code.',
      details: [
        'Clean, readable code',
        'Comprehensive documentation',
        'Code reviews and quality assurance',
        'Knowledge transfer sessions'
      ]
    },
    {
      number: '04',
      title: 'Stay Accountable After Launch',
      description: 'We build long-term relationships, not one-off projects. We\'re here to support, maintain, and evolve systems after they go live. Your success is our success.',
      details: [
        'Post-launch support and monitoring',
        'Iterative improvements based on feedback',
        'Ongoing maintenance and updates',
        'Long-term partnership development'
      ]
    }
  ]

  const principles = [
    {
      title: 'Clarity Over Complexity',
      description: 'We prefer simple solutions that work over complex ones that impress. Every decision is made with maintainability in mind.'
    },
    {
      title: 'Long-Term Thinking',
      description: 'We design systems for the long haul. Every decision considers maintainability, scalability, and the reality of evolving business needs.'
    },
    {
      title: 'Relationship-First',
      description: 'We build partnerships, not transactions. Your success is our success, and we\'re invested in your long-term outcomes.'
    },
    {
      title: 'Production-Ready',
      description: 'We don\'t build demos. Everything we deliver is built to handle real workloads, real users, and real business requirements.'
    }
  ]

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            How We Work
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our process is designed around clarity, reliability, and long-term partnerships. 
            We build systems that work in production, not just in demos.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-blue-600/30">{step.number}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {step.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-slate-800/50 border border-slate-700 rounded-lg p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Process Visualization</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Principles */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            Core Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {principle.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start a Project?
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Let's discuss your project and see if our approach aligns with your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-700 text-white font-medium rounded hover:border-slate-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork

