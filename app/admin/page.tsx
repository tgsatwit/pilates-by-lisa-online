"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { OverviewStats } from '@/components/admin/overview-stats'
import { RecentOrders } from '@/components/admin/recent-orders'
import { RecentPosts } from '@/components/admin/recent-posts'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = Cookies.get('admin_session')
    if (!isAuthenticated) {
      router.push('/admin/login')
    }
  }, [router])

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="space-y-8">
        <OverviewStats />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <RecentOrders />
          <RecentPosts />
        </div>
      </div>
    </div>
  )
}