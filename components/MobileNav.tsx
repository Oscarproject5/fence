'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone, FaHome, FaTools, FaInfoCircle, FaComments, FaFileAlt, FaEnvelope } from 'react-icons/fa'

const navItems = [
  { label: 'Home', href: '#home', icon: FaHome },
  { label: 'Services', href: '#services', icon: FaTools },
  { label: 'Why Choose Us', href: '#why-choose', icon: FaInfoCircle },
  { label: 'Process', href: '#process', icon: FaFileAlt },
  { label: 'Reviews', href: '#testimonials', icon: FaComments },
  { label: 'Contact', href: '#quote-section', icon: FaEnvelope },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Mobile Header - Only visible on mobile */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RGV</span>
            </div>
            <span className="font-heading text-lg font-bold text-gray-800">Fencing</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="tel:+1-956-854-0899"
              className="bg-green-600 text-white p-2 rounded-full"
            >
              <FaPhone className="text-sm" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-heading text-xl font-bold text-gray-800">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 p-2"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              
              <nav className="py-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition-colors"
                    >
                      <Icon className="text-lg" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  )
                })}
              </nav>
              
              {/* CTA Buttons */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
                <a
                  href="tel:+1-956-854-0899"
                  className="block w-full bg-secondary-600 text-white text-center py-3 rounded-lg font-semibold mb-2"
                >
                  Call: +1 (956) 854-0899
                </a>
                <button
                  onClick={() => handleNavClick('#quote-section')}
                  className="block w-full bg-yellow-500 text-gray-900 text-center py-3 rounded-lg font-semibold"
                >
                  Get Free Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header on mobile */}
      <div className="h-14 md:hidden" />
    </>
  )
}