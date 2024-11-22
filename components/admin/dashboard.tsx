"use client"

import { useState } from 'react'
import { AdminSidebar } from './layout/sidebar'
import { AdminHeader } from './layout/header'
import { OverviewStats } from './overview-stats'
import { RecentOrders } from './recent-orders'
import { RecentPosts } from './recent-posts'
import { SalesChart } from './sales-chart'

export function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className="lg:pl-72">
        <AdminHeader setSidebarOpen={setSidebarOpen} />
        
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            
            <div className="mt-8">
              <OverviewStats />
            </div>

            <div className="mt-8">
              <SalesChart />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <RecentOrders />
              <RecentPosts />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}