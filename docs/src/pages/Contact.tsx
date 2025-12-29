import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { submitContactForm } from '../utils/database'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await submitContactForm(formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Start a Conversation</h1>
            <p className="text-gray-400 mb-8 text-lg">
              Let's discuss your project. No sales pitches, no pressure—just clarity about what you need and whether we're the right fit.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="(410) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium rounded transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Start a Conversation'}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Thank you! We'll be in touch soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:contact@oriondev.io"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    contact@oriondev.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+14105556746"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    (410) 555-ORION
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Baltimore, Maryland</p>
                </div>
              </div>
            </div>

            {/* Why Choose Orion */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Orion?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Production-grade systems, not demos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Long-term partnerships, not one-off projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Clear code and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Baltimore-based with national capability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

