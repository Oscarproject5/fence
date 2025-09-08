'use client'

import { motion } from 'framer-motion'
import { 
  FaHome, 
  FaLink, 
  FaCrown, 
  FaHorse, 
  FaTools, 
  FaDoorOpen,
  FaCheckCircle 
} from 'react-icons/fa'

const services = [
  {
    id: 'wood',
    title: 'Wood Privacy Fences',
    description: 'Custom cedar and pine fencing solutions that combine natural beauty with lasting durability.',
    features: [
      'Cedar, pine & premium wood options',
      'Custom heights from 4ft to 8ft',
      'Weather-resistant treatments',
      'Various style options'
    ],
    icon: FaHome,
    image: '/images/residential fence.jpeg',
    color: 'from-amber-600 to-amber-700'
  },
  {
    id: 'chain',
    title: 'Chain Link Fences',
    description: 'Affordable, durable fencing perfect for both residential properties and commercial facilities.',
    features: [
      'Galvanized & vinyl-coated options',
      'Heights from 3ft to 12ft',
      'Privacy slats available',
      'Security features'
    ],
    icon: FaLink,
    image: '/images/residential chain link.jpeg',
    color: 'from-gray-600 to-gray-700'
  },
  {
    id: 'iron',
    title: 'Wrought Iron Fences',
    description: 'Elegant ornamental iron fencing that provides security while enhancing property value.',
    features: [
      'Custom decorative designs',
      'Powder-coated finishes',
      'Rust-resistant materials',
      'Matching gates available'
    ],
    icon: FaCrown,
    image: '/images/ornamental iron.jpeg',
    color: 'from-gray-800 to-gray-900'
  },
  {
    id: 'ranch',
    title: 'Ranch & Farm Fencing',
    description: 'Heavy-duty agricultural fencing designed to secure livestock and define property boundaries.',
    features: [
      'Barbed wire & field fencing',
      'T-posts & wooden posts',
      'Livestock-safe designs',
      'Large area coverage'
    ],
    icon: FaHorse,
    image: '/images/residential fence.jpeg',
    color: 'from-green-700 to-green-800'
  },
  {
    id: 'repair',
    title: 'Fence Repairs',
    description: 'Fast, professional repair services for all fence types, including storm damage restoration.',
    features: [
      'Emergency storm repairs',
      'Post replacement',
      'Gate realignment',
      'Rot & rust treatment'
    ],
    icon: FaTools,
    image: '/images/storm damage repair.jpeg',
    color: 'from-orange-600 to-orange-700'
  },
  {
    id: 'gates',
    title: 'Custom Gates',
    description: 'Secure entry solutions tailored to match your fence style and security requirements.',
    features: [
      'Automatic & manual options',
      'Security keypads',
      'Custom designs',
      'Professional installation'
    ],
    icon: FaDoorOpen,
    image: '/images/custom entry gate.jpeg',
    color: 'from-yellow-700 to-yellow-800'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional fence installation and repair services throughout the Rio Grande Valley. 
            Quality materials, expert craftsmanship, and competitive pricing.
          </p>
        </motion.div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={service.image}
                    alt={`${service.title} installation in Rio Grande Valley - Professional fence contractors serving RGV TX`}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110 select-none"
                    loading="lazy"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Icon Overlay */}
                  <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} bg-white/90 backdrop-blur-sm p-3 rounded-full`}>
                    <service.icon className="text-3xl text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-secondary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    Get Free Quote
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 pt-12 border-t border-gray-200"
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to upgrade your property with professional fencing?
          </p>
          <button
            onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Schedule Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}