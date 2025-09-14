'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Residential Privacy Fence - Brownsville',
    category: 'Wood Privacy',
    image: '/images/residential fence.jpeg',
    description: '6ft cedar privacy fence with decorative top caps'
  },
  {
    id: 2,
    title: 'Ranch Fencing - McAllen Area',
    category: 'Ranch & Farm',
    image: '/images/ranch-fence.png',
    description: 'Complete ranch perimeter with gates and cattle guards'
  },
  {
    id: 3,
    title: 'Chain Link Fencing - Harlingen',
    category: 'Chain Link',
    image: '/images/commercial chain link.jpeg',
    residentialImage: '/images/residential chain link.jpeg',
    commercialImage: '/images/commercial chain link.jpeg',
    description: 'Professional grade chain link installation',
    hasTypeToggle: true
  },
  {
    id: 4,
    title: 'Ornamental Iron - Mission',
    category: 'Wrought Iron',
    image: '/images/ornamental iron.jpeg',
    description: 'Custom ornamental iron with automatic gate'
  },
  {
    id: 5,
    title: 'Storm Damage Repair - Brownsville',
    category: 'Repair',
    image: '/images/storm damage repair.jpeg',
    description: 'Complete fence rebuild after hurricane damage'
  },
  {
    id: 6,
    title: 'Custom Entry Gate - Edinburg',
    category: 'Custom Gates',
    image: '/images/custom entry gate.jpeg',
    description: 'Automated dual swing gate with intercom system'
  }
]

const categories = ['All', 'Wood Privacy', 'Ranch & Farm', 'Chain Link', 'Wrought Iron', 'Repair', 'Custom Gates']

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [chainLinkType, setChainLinkType] = useState<'residential' | 'commercial'>('commercial')

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
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional fencing solutions for every property type and style preference
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
                {/* Image Container */}
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.hasTypeToggle && project.category === 'Chain Link' 
                      ? (chainLinkType === 'residential' ? project.residentialImage : project.commercialImage)
                      : project.image}
                    alt={`${project.title} - Professional fence installation by RGV Fencing contractors serving Rio Grande Valley Texas`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-secondary-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </div>
                  
                  {/* View Icon */}
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
                    {project.hasTypeToggle && project.category === 'Chain Link' 
                      ? `${chainLinkType === 'residential' ? 'Residential' : 'Commercial'} Chain Link - Harlingen`
                      : project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {project.hasTypeToggle && project.category === 'Chain Link'
                      ? (chainLinkType === 'residential' 
                        ? '6ft residential chain link with vinyl coating'
                        : '8ft commercial grade chain link with barbed wire')
                      : project.description}
                  </p>
                  {project.hasTypeToggle && (
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setChainLinkType('residential');
                        }}
                        className={`px-3 py-1 text-xs rounded-full transition-all ${
                          chainLinkType === 'residential'
                            ? 'bg-secondary-600 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        Residential
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setChainLinkType('commercial');
                        }}
                        className={`px-3 py-1 text-xs rounded-full transition-all ${
                          chainLinkType === 'commercial'
                            ? 'bg-secondary-600 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        Commercial
                      </button>
                    </div>
                  )}
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
            Ready to get started with professional fencing for your property?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get Your Free Quote
            </button>
            <a
              href="tel:+1-956-854-0899"
              className="btn-secondary"
            >
              Call +1 (956) 854-0899
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
              
              <div className="relative">
                <img
                  src={selectedProject.hasTypeToggle && selectedProject.category === 'Chain Link'
                    ? (chainLinkType === 'residential' ? selectedProject.residentialImage : selectedProject.commercialImage)
                    : selectedProject.image}
                  alt={`${selectedProject.title} - Professional fence installation by RGV Fencing - Top rated fence contractors in Brownsville McAllen Harlingen TX`}
                  className="w-full rounded-lg shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {selectedProject.category}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg mt-4">
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2">
                  {selectedProject.hasTypeToggle && selectedProject.category === 'Chain Link'
                    ? `${chainLinkType === 'residential' ? 'Residential' : 'Commercial'} Chain Link - Harlingen`
                    : selectedProject.title}
                </h3>
                <p className="text-gray-600">
                  {selectedProject.hasTypeToggle && selectedProject.category === 'Chain Link'
                    ? (chainLinkType === 'residential' 
                      ? '6ft residential chain link with vinyl coating'
                      : '8ft commercial grade chain link with barbed wire')
                    : selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}