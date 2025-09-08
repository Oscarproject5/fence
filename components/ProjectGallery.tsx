'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Residential Privacy Fence - Brownsville',
    category: 'Wood Privacy',
    before: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2940',
    after: 'https://images.unsplash.com/photo-1506003094589-53954a26283f?q=80&w=2787',
    description: '6ft cedar privacy fence with decorative top caps'
  },
  {
    id: 2,
    title: 'Ranch Fencing - McAllen Area',
    category: 'Ranch & Farm',
    before: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2799',
    after: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2874',
    description: 'Complete ranch perimeter with gates and cattle guards'
  },
  {
    id: 3,
    title: 'Commercial Chain Link - Harlingen',
    category: 'Chain Link',
    before: 'https://images.unsplash.com/photo-1625411553237-d44b0d91bb66?q=80&w=2940',
    after: 'https://images.unsplash.com/photo-1603906489920-ee2a1b22612f?q=80&w=2787',
    description: '8ft commercial grade chain link with barbed wire'
  },
  {
    id: 4,
    title: 'Ornamental Iron - Mission',
    category: 'Wrought Iron',
    before: 'https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2940',
    after: 'https://images.unsplash.com/photo-1589129140837-67287c22521b?q=80&w=2765',
    description: 'Custom ornamental iron with automatic gate'
  },
  {
    id: 5,
    title: 'Storm Damage Repair - Brownsville',
    category: 'Repair',
    before: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2787',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2832',
    description: 'Complete fence rebuild after hurricane damage'
  },
  {
    id: 6,
    title: 'Custom Entry Gate - Edinburg',
    category: 'Custom Gates',
    before: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2940',
    after: 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?q=80&w=2786',
    description: 'Automated dual swing gate with intercom system'
  }
]

const categories = ['All', 'Wood Privacy', 'Chain Link', 'Wrought Iron', 'Ranch & Farm', 'Repair', 'Custom Gates']

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformation we bring to properties across the Rio Grande Valley
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-secondary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-secondary-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image Container with Hover Effect */}
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setShowBefore(true)}
                  onMouseLeave={() => setShowBefore(false)}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* After Image */}
                  <img
                    src={project.after}
                    alt={`${project.title} - After`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Before Image Overlay */}
                  <AnimatePresence>
                    {showBefore && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={project.before}
                          alt={`${project.title} - Before`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          BEFORE
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Labels */}
                  {!showBefore && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      AFTER
                    </div>
                  )}
                  
                  {/* Expand Icon */}
                  <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExpand className="text-gray-700" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-secondary-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-gray-800 mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to transform your property like these?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start Your Project
            </button>
            <a
              href="tel:956-555-3362"
              className="btn-secondary"
            >
              Call for Consultation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300"
              >
                ✕
              </button>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src={selectedProject.before}
                    alt="Before"
                    className="w-full rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={selectedProject.after}
                    alt="After"
                    className="w-full rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg mt-4">
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}