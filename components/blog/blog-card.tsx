"use client"

import { BlogPost } from "@/types"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link
        href={`/blog/${post.id}`}
        className="block hover:opacity-90 transition-opacity"
      >
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage || '/images/blog-placeholder.jpg'}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-slate-100"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            {post.excerpt || post.content.substring(0, 150) + '...'}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{post.author}</span>
            <span>
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}