"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Monthly",
    price: "$29.99",
    discountedPrice: "$14.50",
    period: "per month",
    features: [
      "Access to 800+ online classes",
      "New classes added weekly",
      "Progress tracking",
      "Community forum access",
      "Mobile app access",
    ],
    popular: false,
    href: "https://online.pilatesbylisa.com.au/checkout/subscribe/purchase"
  },
  {
    name: "Annual",
    price: "$299",
    discountedPrice: "$124.50",
    period: "per year",
    features: [
      "All Monthly plan features",
      "Save over 60% annually",
      "Exclusive workshops",
      "Priority support",
      "Custom workout plans",
    ],
    popular: true,
    href: "https://online.pilatesbylisa.com.au/checkout/subscribe/purchase"
  }
]

export function PricingSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Special Offer for New Members
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Get 50% off your first months' membership with code <span className="font-semibold">NEWMEMBER</span> at checkout
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 bg-white rounded-2xl ${
                plan.popular ? 'ring-2 ring-primary shadow-lg' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 line-through">
                    {plan.price}
                  </span>
                  <span className="text-4xl font-bold tracking-tight text-primary">
                    {plan.discountedPrice}
                  </span>
                  <span className="text-sm text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href={plan.href}>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get started
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}