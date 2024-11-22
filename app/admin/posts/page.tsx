"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'The Five Minute Rule',
    excerpt: 'Finding it difficult to get motivated to workout? You need the five minute rule!',
    status: 'published',
    date: '2024-03-20'
  },
  {
    id: 2,
    title: 'Benefits of Morning Pilates',
    excerpt: 'Start your day right with these energizing Pilates exercises.',
    status: 'draft',
    date: '2024-03-19'
  }
]

export default function BlogPostsPage() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = Cookies.get('admin_session')
    if (!isAuthenticated) {
      router.push('/admin/login')
    }
  }, [router])

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Blog Posts</h1>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="divide-y">
          {posts.map((post) => (
            <div key={post.id} className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    post.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {post.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}