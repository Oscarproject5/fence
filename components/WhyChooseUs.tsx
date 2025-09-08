'use client'

import { motion } from 'framer-motion'
import { 
  FaUserTie, 
  FaShieldAlt, 
  FaDollarSign, 
  FaPencilRuler, 
  FaClock,
  FaAward 
} from 'react-icons/fa'

const features = [
  {
    icon: FaUserTie,
    title: 'Locally Owned & Operated',
    description: 'Deep roots in the RGV community. We understand the unique needs of South Texas properties.',
  },
  {
    icon: FaShieldAlt,
    title: 'Licensed, Insured & Experienced',
    description: 'Fully licensed contractors with comprehensive insurance and over 20 years of experience.',
  },
  {
    icon: FaDollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates with free estimates. We work within your budget without compromising quality.',
  },
  {
    icon: FaPencilRuler,
    title: 'Custom Designs',
    description: 'Tailored fencing solutions to match your property style and specific requirements.',
  },
  {
    icon: FaClock,
    title: 'Fast Turnaround Times',
    description: 'Efficient installation process. Most residential projects completed within 2-3 days.',
  },
  {
    icon: FaAward,
    title: 'Quality Materials',
    description: 'Premium lumber, metals, and hardware sourced from trusted suppliers for lasting durability.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/residential fence.jpeg"
                  alt="Quality residential fence installation in RGV"
                  className="rounded-lg shadow-lg h-48 w-full object-cover select-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <img
                  src="/images/ornamental iron.jpeg"
                  alt="Professional ornamental iron fence craftsmanship"
                  className="rounded-lg shadow-lg h-64 w-full object-cover select-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/images/custom entry gate.jpeg"
                  alt="Custom entry gate installation and design"
                  className="rounded-lg shadow-lg h-64 w-full object-cover select-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <img
                  src="/images/commercial chain link.jpeg"
                  alt="Commercial grade chain link fence installation"
                  className="rounded-lg shadow-lg h-48 w-full object-cover select-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="absolute -bottom-8 -right-8 bg-secondary-600 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl"
            >
              <span className="text-3xl font-bold">20+</span>
              <span className="text-sm">Years</span>
              <span className="text-xs">Experience</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose <span className="gradient-text">RGV Fencing</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              When you choose us for your fencing needs, you're partnering with the most trusted 
              fence contractors in the Rio Grande Valley. Our commitment to quality and customer 
              satisfaction sets us apart.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                      <feature.icon className="text-secondary-600 text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-6 bg-wood-light/10 rounded-lg border-l-4 border-wood"
            >
              <p className="text-gray-700 italic">
                "Our mission is simple: Build fences that protect what matters most to you, 
                with craftsmanship that stands the test of time and weather in South Texas."
              </p>
              <p className="mt-2 font-semibold text-gray-800">
                - Juan Rodriguez, Owner
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}