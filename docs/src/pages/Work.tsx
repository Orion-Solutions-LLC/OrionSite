import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Project {
  name: string
  problem: string
  solution: string
  impact: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Ansar AI',
    problem: 'Teams needed a way to capture, analyze, and act on meeting insights without manual note-taking.',
    solution: 'A complete meeting recording and analysis platform with event storage, action item tracking, and intelligent feedback systems.',
    impact: 'Real-time meeting intelligence that helps teams make decisions faster and follow through on commitments.',
    tags: ['AI', 'Meeting Analytics', 'Productivity', 'Real-time Processing']
  },
  {
    name: 'Lifestyle AI',
    problem: 'Calendar apps manage time but don\'t solve the problems that fill that time.',
    solution: 'A problem-solving calendar application that integrates intelligent task management with daily workflow optimization.',
    impact: 'A system that helps people accomplish more by focusing on outcomes, not just scheduling.',
    tags: ['AI', 'Calendar', 'Task Management', 'Workflow Optimization']
  },
  {
    name: 'Selected Websites',
    problem: 'Businesses need web platforms that represent their brand accurately and perform reliably.',
    solution: 'Custom web platforms built with modern architecture, clear code, and production-ready infrastructure.',
    impact: 'Websites that work consistently, load quickly, and serve as reliable foundations for business growth.',
    tags: ['Web Development', 'Custom Platforms', 'Production Systems']
  },
  {
    name: 'IT & Systems Solutions',
    problem: 'Baltimore-area businesses need IT infrastructure that supports operations without constant intervention.',
    solution: 'Comprehensive IT solutions including infrastructure setup, maintenance, and ongoing support for commercial operations.',
    impact: 'Reliable infrastructure that lets businesses focus on their work, not their technology.',
    tags: ['IT Services', 'Infrastructure', 'Support', 'Baltimore']
  }
]

const Work = () => {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Our Work
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Real systems built for real businesses. These are production systems handling real workloads, 
            not demos or prototypes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 md:p-12 hover:border-slate-600 transition-colors"
            >
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  {project.name}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Problem
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    What We Built
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Why It Mattered
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-700">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Let's discuss your project and see how we can help build something that actually works.
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

export default Work

