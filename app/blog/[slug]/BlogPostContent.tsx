"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import type { BlogPost } from "@/types"

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: post.title }
  ]

  return (
    <div className="bg-slate-100 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Cover Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-12 shadow-lg border border-gray-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  className="px-4 py-2 text-sm bg-white/80 backdrop-blur-sm text-gray-900 shadow-sm border-2 border-slate-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-6">
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

          {/* Content */}
          <div className="p-4 mb-12">
            <div 
              className="prose prose-lg text-gray-900 max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-gray-900 prose-ul:text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 