'use client'

import { motion } from 'framer-motion'
import {
  FaUserTie,
  FaShieldAlt,
  FaDollarSign,
  FaPencilRuler,
  FaClock,
  FaAward
} from 'react-icons/fa'

const features = [
  {
    icon: FaUserTie,
    title: 'Locally Owned & Operated',
    description: 'Deep roots in the RGV community.',
  },
  {
    icon: FaShieldAlt,
    title: 'Licensed & Insured',
    description: 'Fully licensed with 20+ years experience.',
  },
  {
    icon: FaDollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates with free estimates.',
  },
  {
    icon: FaPencilRuler,
    title: 'Custom Designs',
    description: 'Tailored solutions for your property.',
  },
  {
    icon: FaClock,
    title: 'Fast Turnaround',
    description: 'Most projects done in 2-3 days.',
  },
  {
    icon: FaAward,
    title: 'Quality Materials',
    description: 'Premium materials for lasting durability.',
  },
]

export default function AppWhyChooseUs() {
  return (
    <section className="px-4 py-6 bg-gradient-to-br from-secondary-50 to-white">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Why Choose <span className="text-secondary-600">RGV Fencing</span>
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Your trusted fence contractors in the Rio Grande Valley
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-3"
            >
              <div className="flex items-start gap-2">
                <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="text-secondary-600 text-sm" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xs text-gray-800 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] text-gray-600 mt-0.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Experience Badge & Owner Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-2xl p-4 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/20" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/20" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg">20+ Years Experience</h3>
            <div className="bg-white/20 rounded-full px-3 py-1">
              <span className="text-xs font-semibold">Trusted Since 2003</span>
            </div>
          </div>

          <p className="text-xs italic opacity-95 mb-2">
            "Our mission is simple: Build fences that protect what matters most to you,
            with craftsmanship that stands the test of time."
          </p>
          <p className="text-xs font-semibold">
            - Juan Rodriguez, Owner
          </p>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-2 mt-3">
        <div className="bg-white rounded-lg p-2 text-center border border-gray-100">
          <div className="text-sm font-bold text-secondary-600">1000+</div>
          <div className="text-[9px] text-gray-600">Projects</div>
        </div>
        <div className="bg-white rounded-lg p-2 text-center border border-gray-100">
          <div className="text-sm font-bold text-secondary-600">100%</div>
          <div className="text-[9px] text-gray-600">Satisfaction</div>
        </div>
        <div className="bg-white rounded-lg p-2 text-center border border-gray-100">
          <div className="text-sm font-bold text-secondary-600">24/7</div>
          <div className="text-[9px] text-gray-600">Support</div>
        </div>
        <div className="bg-white rounded-lg p-2 text-center border border-gray-100">
          <div className="text-sm font-bold text-secondary-600">5yr</div>
          <div className="text-[9px] text-gray-600">Warranty</div>
        </div>
      </div>
    </section>
  )
}