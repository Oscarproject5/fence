'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaHome, 
  FaLink, 
  FaCrown, 
  FaHorse, 
  FaTools, 
  FaDoorOpen 
} from 'react-icons/fa'

const services = [
  {
    id: 'wood',
    title: 'Wood Privacy Fences',
    description: 'Custom styles for security & curb appeal. Cedar, pine, and premium wood options.',
    icon: FaHome,
    color: 'bg-amber-600',
    images: [
      '/images/residential fence.jpeg',
      '/images/residential fence.jpeg',
      '/images/residential fence.jpeg'
    ]
  },
  {
    id: 'chain',
    title: 'Chain Link Fences',
    description: 'Affordable & durable for homes & businesses. Galvanized and vinyl-coated options.',
    icon: FaLink,
    color: 'bg-gray-600',
    images: [
      '/images/residential chain link.jpeg',
      '/images/commercial chain link.jpeg',
      '/images/residential chain link.jpeg'
    ]
  },
  {
    id: 'iron',
    title: 'Wrought Iron Fences',
    description: 'Elegant & long-lasting protection. Custom designs and ornamental options.',
    icon: FaCrown,
    color: 'bg-gray-800',
    images: [
      '/images/ornamental iron.jpeg',
      '/images/ornamental iron.jpeg',
      '/images/ornamental iron.jpeg'
    ]
  },
  {
    id: 'ranch',
    title: 'Ranch & Farm Fencing',
    description: 'Barbed wire, field fencing, and more. Livestock-safe and durable.',
    icon: FaHorse,
    color: 'bg-green-700',
    images: [
      '/images/residential fence.jpeg',
      '/images/residential fence.jpeg',
      '/images/residential fence.jpeg'
    ]
  },
  {
    id: 'repair',
    title: 'Fence Repairs',
    description: 'Quick, professional fixes. Storm damage, rot repair, and maintenance.',
    icon: FaTools,
    color: 'bg-orange-600',
    images: [
      '/images/storm damage repair.jpeg',
      '/images/storm damage repair.jpeg',
      '/images/storm damage repair.jpeg'
    ]
  },
  {
    id: 'gates',
    title: 'Custom Gates',
    description: 'Secure and stylish property access. Automatic and manual options.',
    icon: FaDoorOpen,
    color: 'bg-yellow-700',
    images: [
      '/images/custom entry gate.jpeg',
      '/images/custom entry gate.jpeg',
      '/images/custom entry gate.jpeg'
    ]
  }
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [chainLinkType, setChainLinkType] = useState<'residential' | 'commercial'>('residential')

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service)
    setCurrentImageIndex(0)
  }

  // Get the current image to display, considering chain link type switching
  const getCurrentImage = () => {
    if (selectedService.id === 'chain') {
      return chainLinkType === 'commercial' 
        ? '/images/commercial chain link.jpeg'
        : '/images/residential chain link.jpeg'
    }
    return selectedService.images[currentImageIndex]
  }

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedService.id}-${currentImageIndex}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(245, 240, 235, 0.92), rgba(245, 240, 235, 0.95)), url('${getCurrentImage()}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(1.1)'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Fencing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on any service below to see examples of our work
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleServiceClick(service)}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 ${
                selectedService.id === service.id 
                  ? 'ring-4 ring-secondary-500 shadow-2xl -translate-y-2' 
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <service.icon className="text-white text-2xl" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
              {selectedService.id === service.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-secondary-600 font-semibold text-sm">
                    ✓ Currently Selected
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Image Gallery Thumbnails or Type Selector for Chain Link */}
        <motion.div
          key={selectedService.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          {selectedService.id === 'chain' ? (
            // Special toggle for chain link
            <>
              <button
                onClick={() => setChainLinkType('residential')}
                className={`relative w-32 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  chainLinkType === 'residential'
                    ? 'ring-4 ring-secondary-500 shadow-lg transform scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src="/images/residential chain link.jpeg"
                  alt="Residential Chain Link"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 text-center font-semibold">
                  Residential
                </div>
              </button>
              <button
                onClick={() => setChainLinkType('commercial')}
                className={`relative w-32 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  chainLinkType === 'commercial'
                    ? 'ring-4 ring-secondary-500 shadow-lg transform scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src="/images/commercial chain link.jpeg"
                  alt="Commercial Chain Link"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 text-center font-semibold">
                  Commercial
                </div>
              </button>
            </>
          ) : (
            // Regular image thumbnails for other services
            selectedService.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-24 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentImageIndex === index 
                    ? 'ring-4 ring-secondary-500 shadow-lg transform scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`${selectedService.title} example ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to transform your property with quality fencing?
          </p>
          <button
            onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get Your Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}