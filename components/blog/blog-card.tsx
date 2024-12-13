"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  post: {
    slug: string
    title: string
    excerpt: string
    coverImage: string
    date: string
    tags: string[]
    readingTime: string
  }
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
    >
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Post badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {post.tags.map((tag) => (
              <Badge 
                key={tag} 
                className="bg-white/80 backdrop-blur-sm text-gray-900 shadow-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-gray-600 transition-colors">
            {post.title}
          </h3>
          <div className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
    </motion.div>
  )
}