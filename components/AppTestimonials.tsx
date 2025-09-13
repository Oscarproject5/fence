'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Maria Rodriguez',
    location: 'Brownsville',
    rating: 5,
    text: 'Outstanding work on our privacy fence! Professional crew, fair pricing, and completed ahead of schedule.',
    date: '2 weeks ago',
    avatar: '👩'
  },
  {
    name: 'John Smith',
    location: 'McAllen',
    rating: 5,
    text: 'They repaired our storm-damaged fence quickly. Great communication and quality work. Highly recommend!',
    date: '1 month ago',
    avatar: '👨'
  },
  {
    name: 'Ana Martinez',
    location: 'Harlingen',
    rating: 5,
    text: 'Beautiful wrought iron fence installation. The automatic gate works perfectly. Very happy with the results!',
    date: '1 month ago',
    avatar: '👩‍🦱'
  },
  {
    name: 'Robert Johnson',
    location: 'Edinburg',
    rating: 5,
    text: 'Chain link fence for our commercial property. Fast, efficient, and great price. Will use again!',
    date: '2 months ago',
    avatar: '👨‍🦰'
  }
]

export default function AppTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="px-4 py-6">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
          </div>
          <span className="text-sm text-gray-600">4.9 (287 reviews)</span>
        </div>
      </div>

      {/* Testimonial Card Slider */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-4"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                <p className="text-xs text-gray-500">{testimonials[currentIndex].location} • {testimonials[currentIndex].date}</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Review Text */}
            <p className="text-sm text-gray-700 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center active:scale-90 transition-transform"
          >
            <FaChevronLeft className="text-gray-600 text-sm" />
          </button>
          
          {/* Dots */}
          <div className="flex gap-1.5">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex ? 'w-6 bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center active:scale-90 transition-transform"
          >
            <FaChevronRight className="text-gray-600 text-sm" />
          </button>
        </div>
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">Verified Reviews</p>
            <p className="text-xs text-gray-600">From real customers</p>
          </div>
          <div className="text-2xl">✅</div>
        </div>
      </motion.div>
    </section>
  )
}