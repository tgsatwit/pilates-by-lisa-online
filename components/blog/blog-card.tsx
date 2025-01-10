"use client"

import { BlogPost } from "@/types"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Timestamp } from "firebase/firestore"

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  // Format the date
  const formatDate = (timestamp: Timestamp | Date) => {
    try {
      // Convert Firestore Timestamp to Date if necessary
      const date = timestamp instanceof Timestamp ? timestamp.toDate() : timestamp;
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Date not available';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block hover:opacity-90 transition-opacity flex-1 flex flex-col"
      >
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage || '/images/blog-placeholder.jpg'}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.excerpt || post.content.substring(0, 150)}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="text-xs border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="font-medium">{post.author}</span>
              <time dateTime={post.createdAt instanceof Timestamp ? post.createdAt.toDate().toISOString() : post.createdAt?.toString()}>
                {formatDate(post.createdAt)}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}