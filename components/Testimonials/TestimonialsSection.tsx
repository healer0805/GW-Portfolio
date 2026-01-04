'use client'

import { useState } from 'react'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 px-2 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800">
          What They Say...
        </h2>

        {/* 2-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Testimonial Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-10 text-center lg:text-left font-medium">
              {currentTestimonial.quote}
            </p>
            <div className="text-center lg:text-left">
              <p className="text-gray-800 font-bold text-lg mb-1">{currentTestimonial.author}</p>
              <p className="text-gray-700 text-lg font-medium">{currentTestimonial.company}</p>
            </div>
          </div>

          {/* Right Column - Additional Content or Empty */}
          <div className="flex flex-col justify-center">
            {/* This column can be used for additional content or left empty for spacing */}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-gray-800'
                  : 'bg-transparent border border-gray-400 hover:border-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

