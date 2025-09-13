'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/residential fence.jpeg',
    title: 'Residential Fence',
    category: 'Wood'
  },
  {
    src: '/images/commercial chain link.jpeg',
    title: 'Commercial Chain Link',
    category: 'Chain Link'
  },
  {
    src: '/images/ornamental iron.jpeg',
    title: 'Ornamental Iron',
    category: 'Iron'
  },
  {
    src: '/images/custom entry gate.jpeg',
    title: 'Custom Entry Gate',
    category: 'Gates'
  },
  {
    src: '/images/residential chain link.jpeg',
    title: 'Residential Chain Link',
    category: 'Chain Link'
  },
  {
    src: '/images/storm damage repair.jpeg',
    title: 'Storm Damage Repair',
    category: 'Repairs'
  }
]

const categories = ['All', 'Wood', 'Chain Link', 'Iron', 'Gates', 'Repairs']

export default function AppGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section className="px-4 py-6">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">Our Work</h2>
        <p className="text-sm text-gray-600 mt-1">Recent projects gallery</p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer active:scale-95 transition-transform"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover"
              sizes="(max-width: 430px) 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
              <div className="absolute bottom-2 left-2 text-white">
                <p className="text-xs font-semibold">{image.title}</p>
                <p className="text-xs opacity-90">{image.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-[90vw] max-h-[80vh] w-full"
          >
            <div className="relative aspect-square">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="font-semibold">{selectedImage.title}</h3>
              <p className="text-sm opacity-90">{selectedImage.category}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}

    </section>
  )
}