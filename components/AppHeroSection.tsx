'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaStar, FaMapMarkerAlt } from 'react-icons/fa'

export default function AppHeroSection() {
  const scrollToQuote = () => {
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative">
      {/* App-style Hero Banner */}
      <div className="relative h-[280px] sm:h-[400px] overflow-hidden rounded-b-3xl">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('/images/hero-fence.jpg')`,
          }}
        />
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full mb-3">
              <FaMapMarkerAlt className="text-yellow-400 text-xs" />
              <span className="text-xs font-medium">Rio Grande Valley</span>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Professional Fence Installation
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <span className="text-sm opacity-90">4.9 (287 reviews)</span>
            </div>
            
            {/* Services Pills */}
            <div className="flex flex-wrap gap-2">
              {['Wood', 'Chain Link', 'Iron', 'Repairs'].map((service) => (
                <span 
                  key={service}
                  className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="px-4 -mt-6 relative z-20"
      >
        <div className="bg-white rounded-2xl shadow-xl p-4 grid grid-cols-2 gap-3">
          <button
            onClick={scrollToQuote}
            className="bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <span className="text-lg">📝</span>
            <span>Get Quote</span>
          </button>
          <a
            href="tel:+19568540899"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <FaPhone />
            <span>Call Now</span>
          </a>
        </div>
      </motion.div>

      {/* Trust Indicators Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="px-4 mt-4"
      >
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-xs text-gray-600">Projects Done</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-xs text-gray-600">Emergency Service</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}