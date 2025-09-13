'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Wood Fencing',
    badge: 'Most Popular',
    description: 'Privacy, cedar, pine options',
    image: '/images/residential fence.jpeg',
    color: 'bg-amber-50 border-amber-200',
    popular: true
  },
  {
    title: 'Chain Link',
    badge: 'Best Value',
    description: 'Durable & affordable',
    image: '/images/commercial chain link.jpeg',
    color: 'bg-gray-50 border-gray-200'
  },
  {
    title: 'Wrought Iron',
    badge: 'Premium',
    description: 'Elegant & secure',
    image: '/images/ornamental iron.jpeg',
    color: 'bg-slate-50 border-slate-200'
  },
  {
    title: 'Ranch Fencing',
    badge: 'Custom Design',
    description: 'Large property solutions',
    image: '/images/hero-fence.jpg',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Repairs',
    badge: '24/7 Service',
    description: 'Emergency repairs available',
    image: '/images/storm damage repair.jpeg',
    color: 'bg-red-50 border-red-200'
  },
  {
    title: 'Gates',
    badge: 'Smart Options',
    description: 'Automatic & manual',
    image: '/images/custom entry gate.jpeg',
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
            <div className={`${service.color} border rounded-2xl overflow-hidden h-full relative group active:scale-95 transition-transform`}>
              {service.popular && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full z-10">
                  Popular
                </span>
              )}
              
              {/* Service Image */}
              <div className="relative h-24 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 430px) 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Service Content */}
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-1">{service.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary-600">{service.badge}</span>
                </div>
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

    </section>
  )
}