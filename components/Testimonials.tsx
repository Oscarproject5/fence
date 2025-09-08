'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Maria Gonzalez',
    location: 'Brownsville, TX',
    rating: 5,
    text: 'Affordable and professional! They installed our cedar privacy fence in just two days. The crew was respectful, cleaned up everything, and the fence looks amazing. Highly recommend for anyone in the Valley.',
    project: 'Residential Privacy Fence'
  },
  {
    id: 2,
    name: 'Robert Martinez',
    location: 'McAllen, TX',
    rating: 5,
    text: 'The fence was built fast and looks amazing! They helped us choose the right materials for our ranch and stayed within our budget. Great communication throughout the entire process.',
    project: 'Ranch Fencing'
  },
  {
    id: 3,
    name: 'James Thompson',
    location: 'Harlingen, TX',
    rating: 5,
    text: 'Professional and courteous crew. They did a great job on our ranch fence, even worked around our livestock schedule. The quality is outstanding and the price was very fair.',
    project: 'Farm & Ranch Fencing'
  },
  {
    id: 4,
    name: 'Ana Rodriguez',
    location: 'Mission, TX',
    rating: 5,
    text: 'After the last storm damaged our fence, they came out immediately for repairs. Fast response, quality work, and they handled all the insurance paperwork. Truly a lifesaver!',
    project: 'Storm Damage Repair'
  },
  {
    id: 5,
    name: 'David Peterson',
    location: 'Edinburg, TX',
    rating: 5,
    text: 'Beautiful ornamental iron fence with automatic gates. The attention to detail is impressive. Our property value definitely increased. Worth every penny!',
    project: 'Wrought Iron & Gates'
  },
  {
    id: 6,
    name: 'Linda Flores',
    location: 'Pharr, TX',
    rating: 5,
    text: 'They replaced our old chain link with a beautiful wood privacy fence. The difference is night and day! Professional, punctual, and the cleanup was spotless.',
    project: 'Fence Replacement'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-wood-light/10 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across the RGV
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-secondary-100" />
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.location}
                </p>
                <p className="text-xs text-secondary-600 font-medium mt-1">
                  {testimonial.project}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600">20+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            Join hundreds of satisfied customers across the Rio Grande Valley
          </p>
          <button
            onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get Your Free Quote Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}