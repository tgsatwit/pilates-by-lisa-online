"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebaseConfig"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface BlogPost {
  title: string
  excerpt: string
  coverImage: string
  date: string
  tags: string[]
  readingTime: string
  content: string
}

export default function BlogPostPage() {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    const fetchPost = async () => {
      setLoading(true)
      try {
        const docRef = doc(db, "posts", slug as string)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setPost(docSnap.data() as BlogPost)
        } else {
          console.error("No such document!")
        }
      } catch (error) {
        console.error("Error fetching post:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Post not found.</p>
      </div>
    )
  }

  return (
    <div className="bg-slate-100 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} className="bg-gray-100 text-gray-700">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  )
}
