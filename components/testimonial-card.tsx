"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

interface TestimonialCardProps {
  name: string
  text: string
  rating: number
  index: number
}

export function TestimonialCard({ name, text, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-white/50 backdrop-blur-sm border-primary/10">
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-primary fill-current" />
          ))}
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className="text-sm text-primary">Verified review</span>
        </div>
        <HoverCard>
          <HoverCardTrigger>
            <p className="text-gray-600 line-clamp-4">{text}</p>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <p className="text-sm">{text}</p>
          </HoverCardContent>
        </HoverCard>
      </Card>
    </motion.div>
  )
}