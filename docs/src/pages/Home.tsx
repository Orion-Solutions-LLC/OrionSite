import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Section 1 — Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Software Systems Built to Last —<br />Not Just Launch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Orion LLC is a software contracting firm building production-grade platforms, AI systems, and digital infrastructure for teams that value clarity, reliability, and long-term partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors inline-flex items-center justify-center gap-2"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/work"
              className="px-8 py-4 bg-transparent border-2 border-slate-700 text-white font-medium rounded hover:border-slate-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — What Orion Actually Does */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What Orion Actually Does
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Custom Software Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Production-grade applications built to handle real workloads. We design systems that scale, maintain, and evolve with your business.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI & Automation Platforms</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent systems that solve concrete business problems. From meeting analysis to workflow automation, we build AI that delivers measurable outcomes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Web & Platform Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern web platforms and digital infrastructure. Clean architecture, clear documentation, and systems that work reliably in production.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">IT & Infrastructure Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Baltimore and Mid-Atlantic focused IT services. We understand local business needs and deliver infrastructure solutions that support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Proof Through Work */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            Proof Through Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-white">Ansar AI</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">Problem:</strong> Teams needed a way to capture, analyze, and act on meeting insights without manual note-taking.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">What we built:</strong> A complete meeting recording and analysis platform with event storage, action item tracking, and intelligent feedback systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Why it mattered:</strong> Real-time meeting intelligence that helps teams make decisions faster and follow through on commitments.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-white">Lifestyle AI</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">Problem:</strong> Calendar apps manage time but don't solve the problems that fill that time.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">What we built:</strong> A problem-solving calendar application that integrates intelligent task management with daily workflow optimization.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Why it mattered:</strong> A system that helps people accomplish more by focusing on outcomes, not just scheduling.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-white">Selected Websites</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">Problem:</strong> Businesses need web platforms that represent their brand accurately and perform reliably.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">What we built:</strong> Custom web platforms built with modern architecture, clear code, and production-ready infrastructure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Why it mattered:</strong> Websites that work consistently, load quickly, and serve as reliable foundations for business growth.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-white">IT & Systems Solutions</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">Problem:</strong> Baltimore-area businesses need IT infrastructure that supports operations without constant intervention.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">What we built:</strong> Comprehensive IT solutions including infrastructure setup, maintenance, and ongoing support for commercial operations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Why it mattered:</strong> Reliable infrastructure that lets businesses focus on their work, not their technology.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/work"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
            >
              View All Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — How We Work */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            How We Work
          </h2>
          <div className="space-y-12">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">Listen & understand the real problem</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We start by understanding what you're actually trying to accomplish, not just what you think you need. This means asking questions, understanding constraints, and identifying the core challenge before proposing solutions.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">Design systems, not just code</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We think in terms of architecture, maintainability, and long-term viability. Every system we build is designed to evolve, scale, and integrate with your existing operations.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">Build with clarity and documentation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Code that's clear, documented, and maintainable. We write systems that your team can understand, modify, and extend. No black boxes, no mystery code.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">Stay accountable after launch</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We build long-term relationships, not one-off projects. We're here to support, maintain, and evolve systems after they go live. Your success is our success.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/how-we-work"
              className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-2 font-medium"
            >
              Learn More About Our Process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 — Credibility Signals */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Built in Baltimore.<br />Built to Last.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're a Baltimore-based software contracting firm serving local businesses and institutions, with the capability to deliver for national and remote clients.
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Baltimore, Maryland</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Real Products in Production</h3>
                <p className="text-gray-300 leading-relaxed">
                  The systems we build are used daily by real teams. We don't build demos—we build production systems that handle real workloads.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Cross-Disciplinary Capability</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI systems, web platforms, and infrastructure solutions. We bring the full stack of capabilities needed to deliver complete solutions.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Long-Term Thinking</h3>
                <p className="text-gray-300 leading-relaxed">
                  We design systems for the long haul. Every decision considers maintainability, scalability, and the reality of evolving business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Strong Conversion Close */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something That Actually Works
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            We're here to have honest conversations about your project. No sales pitches, no pressure—just clarity about what you need and whether we're the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors inline-flex items-center justify-center gap-2"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-slate-300 text-slate-900 font-medium rounded hover:border-slate-400 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
