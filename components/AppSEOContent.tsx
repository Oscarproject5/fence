'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaTools, FaHome, FaBuilding } from 'react-icons/fa'

const serviceAreas = [
  'Brownsville', 'McAllen', 'Harlingen', 'Edinburg',
  'Mission', 'Pharr', 'San Benito', 'Weslaco'
]

const fenceTypes = [
  { icon: FaHome, name: 'Residential Fencing', desc: 'Privacy & security for homes' },
  { icon: FaBuilding, name: 'Commercial Fencing', desc: 'Business & industrial solutions' },
  { icon: FaTools, name: 'Fence Repair', desc: '24/7 emergency service' },
]

export default function AppSEOContent() {
  return (
    <section className="px-4 py-6 bg-gray-50">
      {/* Service Areas */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <FaMapMarkerAlt className="text-primary-600" />
          Serving Rio Grande Valley
        </h2>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <p className="text-xs text-gray-600 mb-3">
            Professional fence installation and repair services throughout South Texas:
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area, index) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {area}, TX
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Rich Content */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-3">
          Professional Fence Contractors
        </h3>
        <div className="space-y-3">
          {fenceTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-3 border border-gray-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-secondary-50 rounded-lg flex items-center justify-center">
                  <Icon className="text-secondary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-gray-800">{type.name}</h4>
                  <p className="text-xs text-gray-600">{type.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Keywords Section */}
      <div className="bg-white rounded-xl p-4 border border-gray-100">
        <h3 className="font-semibold text-sm text-gray-800 mb-2">
          Fence Services We Provide
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          Specializing in wood fence installation, chain link fence repair,
          wrought iron gates, vinyl fencing, hurricane fence repair, ranch fencing,
          automatic gate installation, and emergency fence services. Licensed fence
          contractors serving residential and commercial properties across the
          Rio Grande Valley since 2003.
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {['Wood Fences', 'Chain Link', 'Iron Gates', 'Vinyl', 'Repairs'].map((tag) => (
            <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
              #{tag.replace(' ', '')}
            </span>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-4 text-center"
      >
        <p className="text-sm font-bold mb-1">Free Estimates Available</p>
        <p className="text-xs opacity-90 mb-3">
          Call now for same-day fence quotes in {serviceAreas[0]} and surrounding areas
        </p>
        <a
          href="tel:+19568540899"
          className="inline-block bg-white text-green-700 px-6 py-2 rounded-full text-sm font-bold active:scale-95 transition-transform"
        >
          +1 (956) 854-0899
        </a>
      </motion.div>
    </section>
  )
}