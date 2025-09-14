'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AppQuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    honeypot: '' // Hidden field for bot detection
  })
  const [formStartTime] = useState(Date.now()) // Track when form was loaded
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const services = [
    'Wood Fence',
    'Chain Link',
    'Wrought Iron',
    'Fence Repair',
    'Gate Installation',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    const useVercelApi = process.env.NEXT_PUBLIC_USE_VERCEL_API === 'true'

    try {
      let response
      let result

      if (useVercelApi) {
        // Option 1: Use Vercel API Route
        response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            timestamp: formStartTime
          })
        })
        result = await response.json()

      } else if (accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE') {
        // Option 2: Use Web3Forms directly from client
        const web3FormData = {
          access_key: accessKey,
          subject: `New Fence Quote Request from ${formData.name}`,
          from_name: 'RGV Fencing Mobile App',
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message || 'No additional details provided',
          botcheck: false,
          timestamp: formStartTime,
          honeypot: formData.honeypot
        }

        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(web3FormData)
        })
        result = await response.json()

      } else {
        // Option 3: Fallback for development/testing
        console.log('Form submission (dev mode):', formData)
        await new Promise(resolve => setTimeout(resolve, 1000))
        result = { success: true }
      }

      if (result.success) {
        setSubmitStatus('success')
        setStatusMessage('Thank you! We\'ll contact you within 2 hours.')
        setFormData({
          name: '',
          phone: '',
          service: '',
          message: '',
          honeypot: ''
        })
      } else {
        throw new Error(result.message || 'Form submission failed')
      }

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setStatusMessage('Oops! Something went wrong. Please call us at (956) 854-0899.')

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
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
            <label className="text-xs font-semibold text-gray-700 mb-1 block">Your Name *</label>
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
            <label className="text-xs font-semibold text-gray-700 mb-1 block">Phone Number *</label>
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
            <label className="text-xs font-semibold text-gray-700 mb-2 block">Service Needed *</label>
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
            disabled={isSubmitting || !formData.name || !formData.phone || !formData.service}
            className={`w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 rounded-xl transition-all ${
              isSubmitting || !formData.name || !formData.phone || !formData.service
                ? 'opacity-50 cursor-not-allowed'
                : 'active:scale-95'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Get Free Quote →'}
          </button>

          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </form>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <p className="text-xs text-green-800">{statusMessage}</p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <span className="text-red-600">!</span>
              <p className="text-xs text-red-800">{statusMessage}</p>
            </div>
          </motion.div>
        )}
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