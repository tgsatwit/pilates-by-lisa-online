"use client"

import { motion } from "framer-motion"
import { Star, Apple, Download } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import reviewsData from "@/lib/reviews.json"

interface AppReview {
    review_id: number;
    author: string;
    title: string;
    content: string;
    rating: number;
    date: string;
    country: string;
    lang_detect: string;
    updated: string;
    answer_time: string | null;
    has_answer: number;
    time: string;
    thumbs_up_cnt: number;
    is_answer: number;
    user_id: number;
    was_changed: number;
    created: string;
    app_version: string;
    is_deleted: number;
    answer_text: string;
    store: string;
    internal_id: number;
    thumbs_down_cnt: number;
    answer_date: string | null;
}

export function TestimonialsSection() {
  // Transform the reviews data from the JSON file
  const reviews = reviewsData.reviews.list.map((review: AppReview) => ({
    id: review.review_id.toString(),
    author: review.author,
    title: review.title,
    text: review.content,
    rating: review.rating,
    country: review.country
  }));

  // Calculate total width for infinite scroll
  const cardWidth = 350;
  const gap = 24;
  const totalWidth = (cardWidth + gap) * reviews.length;

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ReviewCard = ({ review, isDuplicate = false }: { review: typeof reviews[0], isDuplicate?: boolean }) => (
    <motion.div
      key={isDuplicate ? `${review.id}-duplicate` : review.id}
      className="relative min-w-[350px] h-[300px] p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    >
      {review.title && (
        <h4 className="font-semibold text-gray-900 mb-3">{review.title}</h4>
      )}
      <div className="flex mb-4 gap-0.5">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 line-clamp-4">{review.text}</p>
      <div className="absolute bottom-8 left-8 right-8 flex items-center">
        <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold mr-4">
          {review.author?.[0]?.toUpperCase() || 'U'}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{review.author}</div>
          <div className="text-sm text-gray-600">
            {review.country.toUpperCase()} Member
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center justify-center items-center max-w-3xl mx-auto mb-6">
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
             {/* <span className="text-2xl font-bold text-gray-900">5.0</span> */} 
          </div>
          <h2 className="h2 font-playfair-display text-gray-900 mb-4">
            Loved by Members Worldwide
          </h2>
          <p className="text-lg text-center text-slate-700 mb-4">
            With a 5 Star Rating on the Apples iOS App Store, join thousands of satisfied members from around the world who have transformed their bodies and lives with Pilates by Lisa
          </p>
          <div className="flex justify-center items-center mb-4">
            <Button 
              size="lg"
              className="bg-black text-white hover:bg-gray-900 transition-colors flex items-center gap-2 px-8 mx-auto"
              onClick={() => window.open('https://apps.apple.com/app/1579290111', '_blank')}
            >
              <Download className="w-5 h-5" />
              Download iOS App
            </Button>
          </div>
        </div>

        {/* App Reviews Section */}
        <div className="mt-8">
          <div className="w-full overflow-hidden">
            <div className="relative w-full">
              <motion.div 
                className="flex gap-6 py-4 px-2"
                animate={{
                  x: [-gap, -totalWidth - gap]
                }}
                transition={{
                  duration: 240,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
                {reviews.slice(0, 3).map((review) => (
                  <ReviewCard key={`${review.id}-duplicate`} review={review} isDuplicate={true} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}