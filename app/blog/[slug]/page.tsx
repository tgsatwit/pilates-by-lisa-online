import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

// This would typically come from your CMS or API
const post = {
  slug: "the-five-minute-rule",
  title: "The Five Minute Rule: The Ultimate Workout Motivation!",
  excerpt: "Finding it difficult to get motivated to workout? You need the five minute rule! Today I'll be sharing with you the quickest, easiest and most effective mind hack that gets you moving!",
  content: `
    <p>When it comes to working out, getting started is often the hardest part. That's where the five-minute rule comes in - a simple yet powerful technique that can help overcome initial resistance and build lasting habits.</p>

    <h2>What is the Five Minute Rule?</h2>
    <p>The concept is beautifully simple: commit to just five minutes of exercise. That's it. The idea is that once you start, you'll likely continue beyond those initial five minutes as you build momentum and get into the flow of your workout.</p>

    <h2>Why it Works</h2>
    <p>The five-minute rule works because it:</p>
    <ul>
      <li>Removes the psychological barrier of a long workout</li>
      <li>Makes getting started feel manageable</li>
      <li>Creates momentum</li>
      <li>Builds consistency over time</li>
    </ul>
  `,
  coverImage: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
  date: "2024-03-20",
  tags: ["Fitness", "Mindfulness"],
  readingTime: "5 min read",
  author: {
    name: "Lisa",
    image: "/images/lisa-profile.jpg"
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  if (params.slug !== post.slug) {
    notFound()
  }

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