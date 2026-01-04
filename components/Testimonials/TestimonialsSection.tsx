'use client'

import { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { testimonials } from '@/data/testimonials'

function NextArrow(props: any) {
  const { onClick, className, style } = props
  return (
    <button
      onClick={onClick}
      className={`slick-arrow slick-next testimonial-arrow testimonial-arrow-next ${className || ''}`}
      style={style}
      aria-label="Next testimonial"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

function PrevArrow(props: any) {
  const { onClick, className, style } = props
  return (
    <button
      onClick={onClick}
      className={`slick-arrow slick-prev testimonial-arrow testimonial-arrow-prev ${className || ''}`}
      style={style}
      aria-label="Previous testimonial"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    pauseOnFocus: true,
    dotsClass: 'slick-dots testimonial-dots',
  }

  return (
    <section 
      ref={sectionRef}
      className={`py-16 px-2 border-t border-gray-300 fade-in ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800">
          What They Say...
        </h2>

        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="px-4">
                  <p className="plain-text text-gray-800 mb-10 text-center lg:text-left">
                    {testimonial.quote}
                  </p>
                  <div className="text-center lg:text-left">
                    <p className="text-gray-800 font-bold text-lg mb-1">{testimonial.author}</p>
                    <p className="text-gray-700 text-lg font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

