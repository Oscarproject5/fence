'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaHome, 
  FaBuilding, 
  FaSwimmingPool, 
  FaTree, 
  FaShieldAlt,
  FaWarehouse,
  FaHorse,
  FaDog
} from 'react-icons/fa'

const buildTypes = [
  {
    id: 'residential',
    title: 'Residential Fencing',
    icon: FaHome,
    description: 'Complete home perimeter security and privacy solutions',
    features: [
      'Privacy fences for backyards',
      'Front yard picket fences',
      'Side yard enclosures',
      'Garden protection'
    ],
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2832',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'commercial',
    title: 'Commercial Properties',
    icon: FaBuilding,
    description: 'Security and access control for businesses',
    features: [
      'Parking lot enclosures',
      'Loading dock security',
      'Property boundaries',
      'Equipment storage areas'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2832',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'pool',
    title: 'Pool Safety Fencing',
    icon: FaSwimmingPool,
    description: 'Child-safe pool enclosures meeting all safety codes',
    features: [
      'Self-closing gates',
      'Climb-resistant designs',
      'Glass panel options',
      'Removable sections'
    ],
    image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2940',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 'ranch',
    title: 'Ranch & Agricultural',
    icon: FaHorse,
    description: 'Durable fencing for farms and ranches',
    features: [
      'Cattle & horse corrals',
      'Pasture divisions',
      'Barn enclosures',
      'Field perimeters'
    ],
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2874',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'security',
    title: 'High-Security Fencing',
    icon: FaShieldAlt,
    description: 'Maximum security solutions for sensitive areas',
    features: [
      'Anti-climb features',
      'Barbed wire topping',
      'Access control integration',
      'Security cameras mounting'
    ],
    image: 'https://images.unsplash.com/photo-1589129140837-67287c22521b?q=80&w=2765',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    icon: FaWarehouse,
    description: 'Heavy-duty fencing for industrial sites',
    features: [
      'Equipment yards',
      'Storage facilities',
      'Construction sites',
      'Utility substations'
    ],
    image: 'https://images.unsplash.com/photo-1603906489920-ee2a1b22612f?q=80&w=2787',
    color: 'from-gray-600 to-gray-700'
  },
  {
    id: 'decorative',
    title: 'Decorative & Ornamental',
    icon: FaTree,
    description: 'Beautiful fencing that enhances property aesthetics',
    features: [
      'Custom designs',
      'Decorative post caps',
      'Lattice work',
      'Arbor integrations'
    ],
    image: 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?q=80&w=2786',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'pet',
    title: 'Pet Enclosures',
    icon: FaDog,
    description: 'Safe spaces for your furry family members',
    features: [
      'Dog runs',
      'Invisible fence installation',
      'Cat-proof fencing',
      'Small pet areas'
    ],
    image: 'https://images.unsplash.com/photo-1506003094589-53954a26283f?q=80&w=2787',
    color: 'from-yellow-500 to-yellow-600'
  }
]

export default function WhatWeBuild() {
  const [selectedType, setSelectedType] = useState(buildTypes[0])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From residential privacy to commercial security, we build fencing solutions for every need in the Rio Grande Valley
          </p>
        </motion.div>

        {/* Type Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {buildTypes.map((type, index) => (
            <motion.button
              key={type.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedType(type)}
              className={`relative p-4 rounded-xl transition-all duration-300 ${
                selectedType.id === type.id 
                  ? 'bg-white shadow-xl scale-105 ring-2 ring-secondary-500' 
                  : 'bg-white/80 shadow-md hover:shadow-lg hover:bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center mx-auto mb-2`}>
                <type.icon className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-sm text-gray-800">
                {type.title}
              </h3>
              {selectedType.id === type.id && (
                <motion.div
                  layoutId="selector"
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-secondary-500"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Selected Type Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={selectedType.image}
                  alt={selectedType.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${selectedType.color} text-white px-4 py-2 rounded-full`}>
                    <selectedType.icon className="text-lg" />
                    <span className="font-semibold">{selectedType.title}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <h3 className="font-heading text-3xl font-bold text-gray-800 mb-4">
                  {selectedType.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {selectedType.description}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-800">What we can build for you:</h4>
                  {selectedType.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedType.color}`} />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary"
                  >
                    Get a Free Quote
                  </button>
                  <a
                    href="tel:+1-956-854-0899"
                    className="btn-secondary"
                  >
                    Discuss Your Project
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-600 mb-1">8+</div>
            <div className="text-sm text-gray-600">Types of Fencing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Custom Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-600 mb-1">All</div>
            <div className="text-sm text-gray-600">RGV Areas Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-600 mb-1">20+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}