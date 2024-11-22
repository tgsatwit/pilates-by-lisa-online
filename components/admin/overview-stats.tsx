"use client"

import { Card } from "@/components/ui/card"
import { DollarSign, Users, ShoppingBag, TrendingUp } from "lucide-react"

const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    icon: DollarSign
  },
  {
    name: 'Active Members',
    value: '2,421',
    change: '+15.1%',
    icon: Users
  },
  {
    name: 'Products Sold',
    value: '412',
    change: '+12.5%',
    icon: ShoppingBag
  },
  {
    name: 'Conversion Rate',
    value: '3.2%',
    change: '+4.3%',
    icon: TrendingUp
  }
]

export function OverviewStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="p-6">
          <div className="flex items-center">
            <div className="p-2 bg-primary/10 rounded-lg">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className="ml-2 text-sm font-medium text-green-600">{stat.change}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}