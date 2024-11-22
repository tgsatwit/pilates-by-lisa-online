"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const posts = [
  {
    title: 'The Five Minute Rule',
    status: 'published',
    views: '1.2k',
    date: '2024-03-20'
  },
  {
    title: 'Benefits of Morning Pilates',
    status: 'draft',
    views: '-',
    date: '2024-03-19'
  },
  {
    title: 'Core Strength Fundamentals',
    status: 'published',
    views: '856',
    date: '2024-03-18'
  }
]

export function RecentPosts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Blog Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.title} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{post.title}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{post.views} views</p>
                <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                  {post.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}