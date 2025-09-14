'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: '1',
    title: 'Free Consultation',
    description: 'Schedule your free on-site estimate',
    icon: '📞',
    color: 'bg-blue-50 border-blue-200',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874'
  },
  {
    number: '2',
    title: 'Site Assessment',
    description: 'Measure property and assess requirements',
    icon: '📐',
    color: 'bg-green-50 border-green-200',
    image: '/images/Generated Image September 08, 2025 - 10_43AM.png'
  },
  {
    number: '3',
    title: 'Custom Design',
    description: 'Choose materials and get your quote',
    icon: '📋',
    color: 'bg-purple-50 border-purple-200',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831'
  },
  {
    number: '4',
    title: 'Installation',
    description: 'Professional team installs your fence',
    icon: '🔨',
    color: 'bg-orange-50 border-orange-200',
    image: '/images/Generated Image September 08, 2025 - 10_39AM.png'
  },
  {
    number: '5',
    title: 'Final Inspection',
    description: 'Quality check and warranty activation',
    icon: '✅',
    color: 'bg-green-50 border-green-200',
    image: '/images/Generated Image September 08, 2025 - 10_50AM.png'
  }
]

export default function AppOurProcess() {
  return (
    <section className="px-4 py-6">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">How It Works</h2>
        <p className="text-sm text-gray-600 mt-1">Simple 5-step process</p>
      </div>

      {/* Process Steps with Images */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          >
            {/* Image */}
            <div className="relative h-32 overflow-hidden">
              {step.image.startsWith('http') ? (
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: step.number === '4' ? 'center 20%' : 'center center' }}
                  sizes="(max-width: 430px) 100vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Step Number Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-gray-800">{step.number}</span>
              </div>

              {/* Icon */}
              <div className={`absolute bottom-3 right-3 w-10 h-10 ${step.color} border rounded-full flex items-center justify-center`}>
                <span className="text-lg">{step.icon}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-sm text-gray-900 mb-1">{step.title}</h3>
              <p className="text-xs text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-200"
      >
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎯</div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-gray-900">Ready to Start?</h3>
            <p className="text-xs text-gray-600">Get your free estimate today!</p>
          </div>
        </div>
        <button className="w-full mt-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-2.5 rounded-lg active:scale-95 transition-transform">
          Get Started →
        </button>
      </motion.div>
    </section>
  )
}