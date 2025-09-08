'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your quote request! We will contact you within 24 hours.')
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
                className="w-full btn-primary"
              >
                Get My Free Quote
              </button>

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