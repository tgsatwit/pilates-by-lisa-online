"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    content: "Lisa's online classes have transformed my practice. The detailed instruction and variety of workouts keep me motivated and consistently improving.",
    author: "Sarah Johnson",
    role: "Member since 2020",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    rating: 5
  },
  {
    content: "As a busy professional, the flexibility to practice anytime is invaluable. The quality of instruction matches any in-person class I've taken.",
    author: "Michael Chen",
    role: "Member since 2021",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    rating: 5
  },
  {
    content: "The progress I've made with Pilates by Lisa is incredible. The structured programs and community support make all the difference.",
    author: "Emma Thompson",
    role: "Member since 2019",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="h2 font-playfair-display text-gray-900 mb-4">
        Loved by Members Worldwide
          </h2>
          <p className="text-lg text-center text-slate-700 mb-8">
          Join thousands of satisfied members from around the world who have transformed their bodies and lives with Pilates by Lisa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}