'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaClock, FaShieldAlt } from 'react-icons/fa'

export default function SEOContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Main SEO Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Professional Fence Installation in Rio Grande Valley, Texas
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              <strong>RGV Fencing</strong> is the Rio Grande Valley's premier fence installation and repair company, 
              serving <strong>Brownsville</strong>, <strong>McAllen</strong>, <strong>Harlingen</strong>, Edinburg, Mission, 
              and surrounding areas since 2010. Our team of licensed and insured fence contractors specializes in 
              residential, commercial, and agricultural fencing solutions designed to withstand South Texas weather conditions.
            </p>
            <p>
              Whether you need a <strong>wood privacy fence</strong> for your Brownsville home, a <strong>commercial chain link fence</strong> 
              for your McAllen business, or <strong>ornamental iron fencing</strong> in Harlingen, our experienced installers 
              deliver quality craftsmanship backed by comprehensive warranties. We use only premium materials from trusted 
              suppliers and complete most residential installations within 1-3 days.
            </p>
            <p>
              Our <strong>emergency fence repair services</strong> are available 24/7 throughout the Rio Grande Valley, 
              especially crucial during hurricane season. From storm damage repairs to routine maintenance, we respond 
              quickly to secure your property. Call <strong>956-555-FENCE (3362)</strong> for immediate assistance.
            </p>
          </div>
        </motion.div>

        {/* Service Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Fence Installation Service Areas in Rio Grande Valley
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Cameron County</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Fence Installation Brownsville, TX</li>
                <li>• Fence Repair Harlingen, TX</li>
                <li>• Fencing San Benito, TX</li>
                <li>• Fence Contractors Los Fresnos</li>
                <li>• Port Isabel Fence Services</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Hidalgo County</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Fence Installation McAllen, TX</li>
                <li>• Fence Repair Edinburg, TX</li>
                <li>• Mission Fence Contractors</li>
                <li>• Pharr Fencing Services</li>
                <li>• Weslaco Fence Installation</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Willacy & Starr Counties</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Raymondville Fence Services</li>
                <li>• Rio Grande City Fencing</li>
                <li>• Roma Fence Installation</li>
                <li>• La Joya Fence Repair</li>
                <li>• Sullivan City Contractors</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts for Local SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <FaMapMarkerAlt className="text-secondary-600 text-3xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-1">Service Area</h4>
            <p className="text-gray-600 text-sm">50+ Mile Radius from Brownsville</p>
          </div>
          <div className="text-center">
            <FaPhone className="text-secondary-600 text-3xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-1">Call Now</h4>
            <a href="tel:956-555-3362" className="text-secondary-600 font-bold">956-555-FENCE</a>
          </div>
          <div className="text-center">
            <FaClock className="text-secondary-600 text-3xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-1">Business Hours</h4>
            <p className="text-gray-600 text-sm">Mon-Fri: 7AM-7PM<br />Sat: 8AM-5PM</p>
          </div>
          <div className="text-center">
            <FaShieldAlt className="text-secondary-600 text-3xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-1">Licensed & Insured</h4>
            <p className="text-gray-600 text-sm">TX License #FC-28374</p>
          </div>
        </motion.div>

        {/* Popular Searches Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-secondary-50 rounded-xl"
        >
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-6">
            Popular Fence Services in Rio Grande Valley
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-semibold mb-3">Residential Fencing</h4>
              <ul className="space-y-1 text-sm">
                <li>• Wood Privacy Fence Installation Brownsville</li>
                <li>• Cedar Fence Repair McAllen TX</li>
                <li>• Vinyl Fence Installation Harlingen</li>
                <li>• Backyard Fence Contractors RGV</li>
                <li>• Pool Fence Installation Edinburg</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Commercial & Agricultural</h4>
              <ul className="space-y-1 text-sm">
                <li>• Commercial Chain Link Fence McAllen</li>
                <li>• Security Fencing Brownsville TX</li>
                <li>• Ranch Fence Installation RGV</li>
                <li>• Barbed Wire Fence Repair Harlingen</li>
                <li>• Industrial Fence Contractors Mission</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}