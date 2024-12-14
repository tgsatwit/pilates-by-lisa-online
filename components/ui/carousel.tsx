'use client';

import { useState, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'

interface CarouselProps {
  items: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
}

export default function Carousel({ items, autoPlay = true, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }, [items.length, isTransitioning])

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }, [items.length, isTransitioning])

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide])

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  return (
    <div className="relative w-full overflow-hidden" {...handlers}>
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${items.length * 100}%`
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index}
            className="w-full flex-shrink-0"
            style={{ 
              display: Math.abs(index - currentIndex) <= 1 ? 'block' : 'none',
              pointerEvents: index === currentIndex ? 'auto' : 'none'
            }}
          >
            {item}
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
