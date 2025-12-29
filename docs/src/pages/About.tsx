import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: 'Kallen Selby',
      role: 'Co-Founder',
    },
    {
      name: 'Siraj Ahmed',
      role: 'Co-Founder',
    },
    {
      name: 'Tyler Major',
      role: 'Co-Founder',
    },
  ]

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About Orion
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're a Baltimore-based software contracting firm building production-grade systems 
            for teams that value clarity, reliability, and long-term partnerships.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Approach
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Orion LLC was founded on a simple principle: build software systems that actually work in production, 
                not just in demos. We're senior engineers, not experimental startups. We build long-term relationships, 
                not one-off features.
              </p>
              <p>
                Our work spans custom software systems, AI platforms, web development, and IT infrastructure solutions. 
                What unifies everything we do is a focus on clarity, maintainability, and systems thinking.
              </p>
              <p>
                We're technically sharp but business-grounded. We understand that the best code in the world doesn't matter 
                if it doesn't solve real problems for real businesses. That's why we start every project by understanding 
                what you're actually trying to accomplish.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-slate-600 transition-colors"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-400">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Values */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">Baltimore, Maryland</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We're a Baltimore-based firm serving local businesses and institutions, with the capability 
              to deliver for national and remote clients. Our local presence means we understand regional 
              business needs, while our technical capabilities allow us to serve clients anywhere.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">What We Value</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span><strong className="text-white">Clarity:</strong> Clear communication, clear code, clear systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span><strong className="text-white">Reliability:</strong> Systems that work consistently, day after day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span><strong className="text-white">Long-term thinking:</strong> Building for the future, not just today</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span><strong className="text-white">Partnership:</strong> Your success is our success</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let's Work Together
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            If our approach resonates with you, let's have a conversation about your project.
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

export default About

