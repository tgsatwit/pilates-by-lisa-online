import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Monthly",
    price: "$29",
    period: "per month",
    features: [
      "Access to all online classes",
      "New classes added weekly",
      "Progress tracking",
      "Community forum access",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Annual",
    price: "$249",
    period: "per year",
    features: [
      "All Monthly plan features",
      "2 months free",
      "Exclusive workshops",
      "Priority support",
      "Custom workout plans",
    ],
    popular: true,
  },
  {
    name: "Lifetime",
    price: "$999",
    period: "one-time",
    features: [
      "All Annual plan features",
      "Lifetime access",
      "1-on-1 coaching session",
      "Early access to new features",
      "VIP community access",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your wellness journey. All plans include a 7-day free trial.
          </p>
        </div>
      </section>

      {/* Rest of the content remains the same */}
    </div>
  );
}