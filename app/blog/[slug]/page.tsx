import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

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

  return (
    <article className="min-h-screen bg-slate-100 pt-32 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
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

        {/* Cover Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-purple max-w-none mb-24"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author */}
        <div className="flex items-center gap-4 border-t pt-8 mb-16">
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">Founder, Pilates by Lisa</p>
          </div>
        </div>
      </div>
    </article>
  )
}