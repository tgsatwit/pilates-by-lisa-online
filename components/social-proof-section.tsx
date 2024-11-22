"use client"

import { motion } from "framer-motion"
import { Award, Users, Star } from "lucide-react"

export function SocialProofSection() {
  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              stat: "12+ Years",
              label: "Online Experience",
            },
            {
              icon: Users,
              stat: "10,000+",
              label: "Active Members",
            },
            {
              icon: Star,
              stat: "4.9/5",
              label: "Member Rating",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}