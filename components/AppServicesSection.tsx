'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const services = [
  {
    title: 'Wood Fencing',
    badge: 'Most Popular',
    description: 'Privacy, cedar, pine options',
    color: 'bg-amber-50 border-amber-200',
    popular: true
  },
  {
    title: 'Chain Link',
    badge: 'Best Value',
    description: 'Durable & affordable',
    color: 'bg-gray-50 border-gray-200'
  },
  {
    title: 'Wrought Iron',
    badge: 'Premium',
    description: 'Elegant & secure',
    color: 'bg-slate-50 border-slate-200'
  },
  {
    title: 'Ranch Fencing',
    badge: 'Custom Design',
    description: 'Large property solutions',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Repairs',
    badge: '24/7 Service',
    description: 'Emergency repairs available',
    color: 'bg-red-50 border-red-200'
  },
  {
    title: 'Gates',
    badge: 'Smart Options',
    description: 'Automatic & manual',
    color: 'bg-blue-50 border-blue-200'
  }
]

export default function AppServicesSection() {
  return (
    <section className="px-4 py-6">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">Our Services</h2>
        <p className="text-sm text-gray-600 mt-1">Professional fence solutions</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="relative"
          >
            <div className={`${service.color} border rounded-2xl p-4 h-full relative overflow-hidden group active:scale-95 transition-transform`}>
              {service.popular && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full">
                  Popular
                </span>
              )}
              
              <h3 className="font-semibold text-base text-gray-900 mb-2">{service.title}</h3>
              <p className="text-xs text-gray-600 mb-2">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary-600">{service.badge}</span>
                <FaArrowRight className="text-gray-400 text-xs group-active:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
            ✓
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Free Estimates</p>
            <p className="text-xs text-gray-600">Same-day quotes available</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4"
      >
        <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 rounded-xl active:scale-95 transition-transform">
          View All Services →
        </button>
      </motion.div>
    </section>
  )
}