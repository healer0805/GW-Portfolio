'use client'

import { useRef, useEffect, useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((cardRef, index) => {
      if (!cardRef) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index))
            observer.unobserve(cardRef)
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      observer.observe(cardRef)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Calculate row index for each project (2 columns on desktop, 1 on mobile)
  const getRowIndex = (index: number) => {
    return Math.floor(index / 2)
  }

  return (
    <section className="py-16 px-8">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const rowIndex = getRowIndex(index)
            const isVisible = visibleCards.has(index)
            return (
              <div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`fade-in-row ${isVisible ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${rowIndex * 0.15}s`,
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  url={project.url}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

