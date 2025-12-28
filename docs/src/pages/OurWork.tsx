import { ExternalLink, Mic, Calendar, Building } from 'lucide-react'

interface Project {
  name: string
  description: string
  tags: string[]
  icon: React.ReactNode
  gradient: string
}

const projects: Project[] = [
  {
    name: 'Ansar.AI',
    description: 'Local meeting recording, analysis, and feedback platform with event storage and action item tracking',
    tags: ['AI', 'Meeting Analytics', 'Productivity'],
    icon: <Mic className="w-16 h-16" />,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Lifestyle.AI',
    description: 'Problem-solving calendar application for intelligent task management throughout the day',
    tags: ['AI', 'Calendar', 'Task Management'],
    icon: <Calendar className="w-16 h-16" />,
    gradient: 'from-purple-500 to-blue-600',
  },
  {
    name: 'Baltimore IT Infrastructure',
    description: 'Comprehensive IT solutions for commercial buildings across Baltimore',
    tags: ['IT Services', 'Infrastructure', 'Support'],
    icon: <Building className="w-16 h-16" />,
    gradient: 'from-slate-500 to-blue-600',
  },
]

const OurWork = () => {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Our Work
        </h1>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-blue-500/30 rounded-lg p-8 md:p-12 hover:border-blue-500/60 transition-colors"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div
                  className={`w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                >
                  {project.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold hover:text-blue-500 transition-colors">
                      {project.name}
                    </h2>
                    <ExternalLink className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors flex-shrink-0 ml-4" />
                  </div>

                  <p className="text-gray-300 mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-slate-800 border border-blue-500/30 rounded text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  )
}

export default OurWork

