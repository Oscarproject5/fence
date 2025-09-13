'use client'

import { useState, useEffect } from 'react'
import { 
  FaHome, 
  FaTools, 
  FaPhone, 
  FaEnvelope,
  FaInfoCircle 
} from 'react-icons/fa'

const navItems = [
  { id: 'home', label: 'Home', icon: FaHome, href: '#home' },
  { id: 'services', label: 'Services', icon: FaTools, href: '#services' },
  { id: 'about', label: 'About', icon: FaInfoCircle, href: '#why-choose' },
  { id: 'quote', label: 'Quote', icon: FaEnvelope, href: '#quote-section' },
  { id: 'call', label: 'Call', icon: FaPhone, href: 'tel:956-555-3362', isPhone: true },
]

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'why-choose', 'process', 'testimonials', 'quote-section']
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (sectionId === 'why-choose' || sectionId === 'process' || sectionId === 'testimonials') {
              setActiveSection('about')
            } else if (sectionId === 'quote-section') {
              setActiveSection('quote')
            } else {
              setActiveSection(sectionId)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (!item.isPhone) {
      e.preventDefault()
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Fixed Bottom Navigation - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1 h-full transition-all ${
                  isActive ? 'text-secondary-600' : 'text-gray-500'
                }`}
              >
                <Icon className={`text-lg mb-0.5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                <span className="text-[10px] font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-secondary-600" />
                )}
              </a>
            )
          })}
        </div>
      </div>

      {/* Floating Phone Button - Bottom Right */}
      <a
        href="tel:956-555-3362"
        className="fixed bottom-20 right-4 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 md:hidden transition-all hover:scale-110 active:scale-95"
        aria-label="Call us"
      >
        <FaPhone className="text-xl" />
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-30 -z-10" />
      </a>
    </>
  )
}