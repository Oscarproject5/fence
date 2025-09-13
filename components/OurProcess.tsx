'use client'

import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaClipboardCheck, 
  FaRulerCombined, 
  FaHammer, 
  FaCheckCircle,
  FaHandshake
} from 'react-icons/fa'

const processSteps = [
  {
    id: 1,
    title: 'Free Consultation',
    icon: FaPhone,
    description: 'Call us or fill out our form for a free, no-obligation consultation. We\'ll discuss your needs, budget, and timeline.',
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874'
  },
  {
    id: 2,
    title: 'Site Assessment',
    icon: FaClipboardCheck,
    description: 'Our experts visit your property to take measurements, assess terrain, and identify any special requirements.',
    color: 'bg-green-500',
    image: '/images/Generated Image September 08, 2025 - 10_43AM.png'
  },
  {
    id: 3,
    title: 'Custom Design & Quote',
    icon: FaRulerCombined,
    description: 'We create a customized fence design based on your preferences and provide a detailed, transparent quote.',
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831'
  },
  {
    id: 4,
    title: 'Professional Installation',
    icon: FaHammer,
    description: 'Our skilled team installs your fence with precision, using quality materials and proven techniques.',
    color: 'bg-orange-500',
    image: '/images/Generated Image September 08, 2025 - 10_39AM.png'
  },
  {
    id: 5,
    title: 'Quality Inspection',
    icon: FaCheckCircle,
    description: 'We conduct a thorough inspection to ensure every detail meets our high standards and your expectations.',
    color: 'bg-red-500',
    image: '/images/Generated Image September 08, 2025 - 10_50AM.png'
  },
  {
    id: 6,
    title: 'Customer Satisfaction',
    icon: FaHandshake,
    description: 'Your complete satisfaction is our goal. We provide warranty information and maintenance tips for your new fence.',
    color: 'bg-yellow-500',
    image: '/images/Generated Image September 08, 2025 - 10_54AM.png'
  }
]

export default function OurProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Simple 6-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From initial consultation to final installation, we make getting your perfect fence easy and stress-free
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none"
                  style={{ objectPosition: step.id === 4 ? 'center 20%' : 'center center' }}
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Step Number */}
                <div className="absolute top-4 left-4 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.id}
                </div>
                
                {/* Icon */}
                <div className={`absolute bottom-4 right-4 ${step.color} p-3 rounded-full text-white shadow-lg`}>
                  <step.icon className="text-2xl" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-6 text-center">
            Project Timeline
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">24-48 hrs</div>
              <div className="text-gray-600">Initial consultation & site visit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">2-3 days</div>
              <div className="text-gray-600">Design approval & permit processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">1-3 days</div>
              <div className="text-gray-600">Complete installation</div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Fast Track Available:</span> Need your fence sooner? 
              Ask about our expedited installation options for urgent projects.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to start your fence project? Let's begin with step one!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start Your Free Consultation
            </button>
            <a
              href="tel:+1-956-854-0899"
              className="btn-secondary"
            >
              Call Now: +1 (956) 854-0899
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}