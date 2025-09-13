'use client'

import { FaBars, FaUser } from 'react-icons/fa'
import { useState } from 'react'

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* App Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaBars className="text-gray-700 text-lg" />
          </button>

          {/* App Title */}
          <div className="flex-1 text-center pr-10">
            <h1 className="text-lg font-semibold text-gray-900">RGV Fencing</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Professional Services</p>
          </div>
        </div>
      </header>

      {/* Slide-out Menu */}
      <div className={`fixed inset-0 z-50 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute left-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <FaUser className="text-2xl" />
            </div>
            <h2 className="font-semibold text-lg">Welcome!</h2>
            <p className="text-sm opacity-90">Browse our services</p>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <a href="#home" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <span className="text-primary-600">🏠</span>
              <span className="font-medium text-gray-700">Home</span>
            </a>
            <a href="#services" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <span className="text-primary-600">🔨</span>
              <span className="font-medium text-gray-700">Our Services</span>
            </a>
            <a href="#why-choose" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <span className="text-primary-600">⭐</span>
              <span className="font-medium text-gray-700">Why Choose Us</span>
            </a>
            <a href="#process" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <span className="text-primary-600">📋</span>
              <span className="font-medium text-gray-700">Our Process</span>
            </a>
            <a href="#testimonials" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <span className="text-primary-600">💬</span>
              <span className="font-medium text-gray-700">Reviews</span>
            </a>
            
            <div className="border-t mt-4 pt-4">
              <a href="tel:956-555-3362" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                <span className="text-green-600">📞</span>
                <span className="font-medium text-green-700">Call Now</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}