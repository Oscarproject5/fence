'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AppQuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })

  const services = [
    'Wood Fence',
    'Chain Link',
    'Wrought Iron',
    'Fence Repair',
    'Gate Installation',
    'Other'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="quote-section" className="px-4 py-6 bg-gray-50">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">Get Free Quote</h2>
        <p className="text-sm text-gray-600 mt-1">Response within 2 hours</p>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1 block">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2.5 bg-gray-50 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all text-sm"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Phone Input */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1 block">Phone Number</label>
            <input
              type="tel"
              required
              className="w-full px-3 py-2.5 bg-gray-50 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all text-sm"
              placeholder="(956) 555-0123"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-2 block">Service Needed</label>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setFormData({...formData, service})}
                  className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                    formData.service === service 
                      ? 'bg-primary-600 text-white border-primary-600' 
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1 block">Additional Details (Optional)</label>
            <textarea
              className="w-full px-3 py-2.5 bg-gray-50 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all text-sm resize-none"
              rows={3}
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 rounded-xl active:scale-95 transition-transform"
          >
            Get Free Quote →
          </button>
        </form>
      </motion.div>

      {/* Trust Badges */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="bg-white rounded-lg p-3 text-center border border-gray-100">
          <div className="text-lg mb-1">⚡</div>
          <p className="text-xs text-gray-600">Fast Response</p>
        </div>
        <div className="bg-white rounded-lg p-3 text-center border border-gray-100">
          <div className="text-lg mb-1">💰</div>
          <p className="text-xs text-gray-600">No Obligation</p>
        </div>
        <div className="bg-white rounded-lg p-3 text-center border border-gray-100">
          <div className="text-lg mb-1">🏆</div>
          <p className="text-xs text-gray-600">Best Price</p>
        </div>
      </div>
    </section>
  )
}