'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

// Dynamically import map to avoid SSR issues
const MapComponent = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
      <span className="text-gray-500">Loading map...</span>
    </div>
  )
})

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    fenceType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

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
        // Option 1: Use Vercel API Route (works automatically when deployed to Vercel)
        response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        result = await response.json()
        
      } else if (accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE') {
        // Option 2: Use Web3Forms directly from client
        const web3FormData = {
          access_key: accessKey,
          subject: `New Fence Quote Request from ${formData.name}`,
          from_name: 'RGV Fencing Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          fence_type: formData.fenceType,
          message: formData.message,
          botcheck: false
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
        setStatusMessage('Thank you! Your quote request has been sent successfully. We\'ll contact you within 24 hours.')
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          fenceType: '',
          message: ''
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
      setStatusMessage('Oops! Something went wrong. Please try again or call us directly at 956-555-FENCE.')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="quote-section" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below or call us directly for immediate assistance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="(956) 555-0000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="123 Main St, Brownsville, TX"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="fenceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Fence Type *
                </label>
                <select
                  id="fenceType"
                  name="fenceType"
                  required
                  value={formData.fenceType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select Fence Type</option>
                  <option value="wood">Wood Privacy Fence</option>
                  <option value="chain">Chain Link Fence</option>
                  <option value="iron">Wrought Iron Fence</option>
                  <option value="ranch">Ranch/Farm Fencing</option>
                  <option value="repair">Fence Repair</option>
                  <option value="gate">Custom Gate</option>
                  <option value="other">Other/Not Sure</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Tell us about your project, approximate length, height preferences, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                >
                  <FaCheckCircle className="text-green-600 mt-0.5" />
                  <p className="text-sm text-green-800">{statusMessage}</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                >
                  <FaExclamationCircle className="text-red-600 mt-0.5" />
                  <p className="text-sm text-red-800">{statusMessage}</p>
                </motion.div>
              )}

              <p className="text-xs text-gray-500 mt-4 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Quick Contact */}
            <div className="bg-secondary-600 text-white rounded-xl shadow-lg p-8 mb-6">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Call for Immediate Service
              </h3>
              
              <div className="space-y-4">
                <a href="tel:956-555-3362" className="flex items-center gap-4 hover:text-yellow-300 transition-colors">
                  <FaPhone className="text-xl" />
                  <div>
                    <div className="text-2xl font-bold">956-555-FENCE (3362)</div>
                    <div className="text-sm opacity-90">Free Estimates Available</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-xl" />
                  <div>
                    <div className="font-semibold">info@rgvfencing.com</div>
                    <div className="text-sm opacity-90">24/7 Quote Requests</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <FaClock className="text-xl" />
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-sm opacity-90">Mon-Sat: 7AM - 6PM</div>
                    <div className="text-sm opacity-90">Sun: Emergency Only</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-xl" />
                  <div>
                    <div className="font-semibold">Service Areas</div>
                    <div className="text-sm opacity-90">Brownsville, McAllen, Harlingen</div>
                    <div className="text-sm opacity-90">& All Rio Grande Valley</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Map */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-heading text-xl font-bold text-gray-800 mb-4">
                Our Service Coverage
              </h3>
              
              {/* Free OpenStreetMap */}
              <MapComponent />

              {/* Service Promise */}
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Fast Response Time:</span> Most quotes provided 
                  within 24 hours. Emergency repairs available for storm damage.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}