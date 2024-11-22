"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const orders = [
  {
    id: '#3210',
    customer: 'Sarah Johnson',
    product: 'Resistance Band Set',
    status: 'completed',
    total: '$49.99',
    date: '2024-03-20'
  },
  {
    id: '#3209',
    customer: 'Michael Chen',
    product: 'Pilates Mat',
    status: 'processing',
    total: '$89.99',
    date: '2024-03-19'
  },
  {
    id: '#3208',
    customer: 'Emma Thompson',
    product: 'Annual Membership',
    status: 'completed',
    total: '$299.99',
    date: '2024-03-19'
  }
]

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{order.customer}</p>
                <p className="text-sm text-gray-500">{order.product}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{order.total}</p>
                <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}