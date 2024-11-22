"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog/blog-card"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

const tags = [
  "All",
  "Pilates",
  "Wellness",
  "Fitness",
  "Nutrition",
  "Mindfulness",
  "Technique"
]

const posts = [
  {
    slug: "the-five-minute-rule",
    title: "The Five Minute Rule: The Ultimate Workout Motivation!",
    excerpt: "Finding it difficult to get motivated to workout? You need the five minute rule! Today I'll be sharing with you the quickest, easiest and most effective mind hack...",
    coverImage: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
    date: "2024-03-20",
    tags: ["Fitness", "Mindfulness"],
    readingTime: "5 min read"
  },
  {
    slug: "how-to-stay-fit-when-busy",
    title: "How to Stay Fit When You Have A Demanding Schedule",
    excerpt: "Maintaining your fitness and health should be one of your top priorities in life, but that doesn't necessarily mean it's easy! Work, social commitments...",
    coverImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    date: "2024-03-18",
    tags: ["Wellness", "Fitness"],
    readingTime: "4 min read"
  },
  // Add more sample posts here
]

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag)
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTag && matchesSearch
    })
  }, [selectedTag, searchQuery])

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  // Reset to first page when filters change
  const handleTagChange = (tag: string) => {
    setSelectedTag(tag)
    setCurrentPage(1)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            The PBL Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Expert tips, insights and guidance to help you on your Pilates journey
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-16">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={cn(
                "cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-white",
                selectedTag === tag && "bg-primary text-white"
              )}
              onClick={() => handleTagChange(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          {paginatedPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No articles found matching your criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "min-w-[40px]",
                  currentPage === page && "bg-primary text-white"
                )}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}