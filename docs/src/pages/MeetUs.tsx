import { Linkedin, Mail } from 'lucide-react'

interface TeamMember {
  name: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Kallen Selby',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Siraj Ahmed',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Tyler Major',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

const MeetUs = () => {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Meet Us
        </h1>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-500/60 transition-colors"
            >
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-4">Co-Founder</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Baltimore Section */}
        <section className="bg-gradient-to-br from-blue-600/20 to-blue-800/30 rounded-lg p-12 border border-blue-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Based in Baltimore</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-3xl">
            Our team brings together expertise from across the tech industry to deliver
            exceptional software solutions. We combine local knowledge with global best
            practices to help businesses in Baltimore and beyond achieve their goals.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                10+
              </div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                100%
              </div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                24/7
              </div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MeetUs

