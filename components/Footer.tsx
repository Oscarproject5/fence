'use client'

import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RGV</span>
              </div>
              <span className="font-heading text-xl font-bold">Fencing</span>
            </div>
            <p className="text-gray-400 mb-4">
              Strong, Reliable Fences Built for the Rio Grande Valley. 
              Professional installation and repair services for over 20 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Wood Privacy Fences
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Chain Link Fences
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Wrought Iron Fences
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Ranch & Farm Fencing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Fence Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Custom Gates
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Brownsville</li>
              <li className="text-gray-400">McAllen</li>
              <li className="text-gray-400">Harlingen</li>
              <li className="text-gray-400">Mission</li>
              <li className="text-gray-400">Edinburg</li>
              <li className="text-gray-400">Pharr</li>
              <li className="text-gray-400">And all RGV areas</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:956-555-3362" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <FaPhone />
                  <span>956-555-FENCE (3362)</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@rgvfencing.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <FaEnvelope />
                  <span>info@rgvfencing.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Serving all of<br />
                  Rio Grande Valley, TX
                </span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-secondary-600 rounded-lg">
              <p className="text-sm font-semibold">24/7 Emergency Service</p>
              <p className="text-xs opacity-90">Storm damage repairs available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Rio Grande Valley Fencing. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}