'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function HeroSection() {
  const scrollToQuote = () => {
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Lighter Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-fixed md:bg-fixed bg-scroll"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(139, 110, 20, 0.2) 0%, rgba(80, 121, 80, 0.3) 50%, rgba(139, 110, 20, 0.2) 100%), url('/images/hero-fence.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
        }}
      />
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      {/* Content */}
      <div className="container-custom relative z-10 text-white py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-yellow-500/90 backdrop-blur-sm px-3 py-2 sm:px-5 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-2xl"
          >
            <FaMapMarkerAlt className="text-white text-sm sm:text-lg" />
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Serving All of Rio Grande Valley</span>
          </motion.div>

          {/* Main Headline - SEO Optimized */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl"
            style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.7)' }}
          >
            #1 Fence Installation
            <span className="block text-yellow-400 mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl drop-shadow-2xl" style={{ textShadow: '2px 4px 10px rgba(0,0,0,0.8)' }}>
              Brownsville, McAllen & Harlingen TX
            </span>
          </motion.h1>

          {/* Subheadline - SEO Optimized */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white font-medium px-2 sm:px-0"
            style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.6)' }}
          >
            Professional fence contractors serving Rio Grande Valley since 2010
            <span className="block mt-2 text-sm sm:text-base md:text-lg text-yellow-100">
              <span className="hidden sm:inline">Wood • Chain Link • Wrought Iron • Ranch Fencing • Emergency Repairs</span>
              <span className="sm:hidden">Wood • Chain Link • Wrought Iron<br />Ranch Fencing • Emergency Repairs</span>
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0"
          >
            <button
              onClick={scrollToQuote}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-black py-3 px-6 sm:py-4 sm:px-10 rounded-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 text-sm sm:text-lg uppercase tracking-wider w-full sm:w-auto"
            >
              Get a Free Fence Quote Today
            </button>
            <a
              href="tel:956-555-3362"
              className="bg-white/95 hover:bg-white text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 text-sm sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaPhone className="text-yellow-500" /> Call 956-555-FENCE
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-8 text-xs sm:text-sm px-2 sm:px-0"
          >
            <div className="flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              <span className="text-yellow-400 text-sm sm:text-lg font-bold">✓</span>
              <span className="font-semibold text-white whitespace-nowrap">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              <span className="text-yellow-400 text-sm sm:text-lg font-bold">✓</span>
              <span className="font-semibold text-white whitespace-nowrap">Free Estimates</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              <span className="text-yellow-400 text-sm sm:text-lg font-bold">✓</span>
              <span className="font-semibold text-white whitespace-nowrap">20+ Years</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              <span className="text-yellow-400 text-sm sm:text-lg font-bold">✓</span>
              <span className="font-semibold text-white whitespace-nowrap">Locally Owned</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}