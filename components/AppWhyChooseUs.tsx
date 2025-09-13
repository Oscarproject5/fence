'use client'

import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const features = [
  { icon: '👷', title: 'Licensed & Insured', desc: 'Fully certified professionals' },
  { icon: '⚡', title: 'Fast Service', desc: 'Same-week installation' },
  { icon: '💰', title: 'Best Prices', desc: 'Competitive rates guaranteed' },
  { icon: '🛡️', title: 'Warranty', desc: '5-year workmanship warranty' },
  { icon: '🏆', title: 'Top Rated', desc: '#1 in Rio Grande Valley' },
  { icon: '🔧', title: '24/7 Support', desc: 'Emergency repairs available' }
]

export default function AppWhyChooseUs() {
  return (
    <section className="px-4 py-6">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="text-sm text-gray-600 mt-1">Your trusted fence experts</p>
      </div>

      {/* Features List */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-100 p-3 flex items-center gap-3 active:scale-[0.98] transition-transform"
          >
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-xl">
              {feature.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-gray-900">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.desc}</p>
            </div>
            <FaCheck className="text-green-500 text-sm" />
          </motion.div>
        ))}
      </div>

      {/* Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-4"
      >
        <h3 className="font-bold text-lg mb-3">Our Achievements</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-2xl font-bold">15+</div>
            <div className="text-xs opacity-90">Years in Business</div>
          </div>
          <div>
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-xs opacity-90">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">100%</div>
            <div className="text-xs opacity-90">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-xs opacity-90">Emergency Service</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}