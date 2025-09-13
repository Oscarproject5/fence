'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Free Consultation',
    description: 'Schedule your free on-site estimate',
    icon: '📞',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    number: '2',
    title: 'Custom Design',
    description: 'Choose materials and get your quote',
    icon: '📐',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    number: '3',
    title: 'Installation',
    description: 'Professional team installs your fence',
    icon: '🔨',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    number: '4',
    title: 'Final Inspection',
    description: 'Quality check and warranty activation',
    icon: '✅',
    color: 'bg-green-50 border-green-200'
  }
]

export default function AppOurProcess() {
  return (
    <section className="px-4 py-6">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">How It Works</h2>
        <p className="text-sm text-gray-600 mt-1">Simple 4-step process</p>
      </div>

      {/* Process Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gray-200"></div>
        
        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative flex gap-4"
            >
              {/* Circle */}
              <div className="relative z-10">
                <div className={`w-14 h-14 ${step.color} border-2 rounded-full flex items-center justify-center`}>
                  <span className="text-xl">{step.icon}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gray-200"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="bg-white rounded-xl border border-gray-100 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-400">STEP {step.number}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900">{step.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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