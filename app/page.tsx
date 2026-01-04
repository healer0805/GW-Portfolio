import Link from 'next/link'
import ProjectsSection from '@/components/Projects/ProjectsSection'
import TestimonialsSection from '@/components/Testimonials/TestimonialsSection'
import CallToActionSection from '@/components/CTA/CallToActionSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="px-8 py-12">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Hero Text and Contact Info */}
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-5xl font-bold mb-12 text-gray-800 leading-tight">
                I&apos;m Glenn Wilmore, a freelance web designer and developer focused on design and implementation, helping brands thrive in the digital world.
              </h1>
              <div className="text-gray-800 ">
                <div className="plain-text text-left font-bold ">
                  <span className="font-[12px]">Phone: </span>
                  <a href="tel:07857224360" className="underline-straight hover:text-gray-600 transition-colors ">
                    07857 224360
                  </a>
                </div>
                <div className="plain-text text-left font-bold">
                  <span className="">Email: </span>
                  <a href="mailto:contact@example.com" className="underline-straight hover:text-gray-600 transition-colors ">
                    contact@example.com
                  </a>
                </div>
                <div className="plain-text text-left font-bold">
                  <span className="">Office Hours: </span>
                  <span className="">Mon-Fri 09:30-16:00</span>
                </div>
              </div>
            </div>

            {/* Right Column - About/Details */}
            <div className="flex flex-col space-y-6 text-gray-800 w-60 m-auto pt-24">
              <p className="plain-text">
                I&apos;m a full-time freelance web designer and developer, with a passion for creating beautiful, functional websites. I graduated with a degree in Web Design & Development and have been providing professional web services to clients across the region since 2013.
              </p>
              <p className="plain-text">
                I specialize in creating 100% bespoke, responsive websites that not only look great but also perform exceptionally. As a flexible, dedicated, and professional freelancer, I understand that a well-designed, functional website is crucial for business growth. I work with modern technologies including WordPress CMS, ensuring your site is both beautiful and easy to manage.
              </p>
              <p className="plain-text">
                Whether you&apos;re an individual entrepreneur, a startup looking to establish your online presence, or a larger company needing a digital refresh, I&apos;m here to help. I work with a diverse range of clients and projects, always focused on delivering results that exceed expectations. If you have a project in mind, I&apos;d love to hear from you.
              </p>
              <div style={{ marginTop: '20px' }}>
                <Link
                  href="/services"
                  className="font-switzer underline-straight"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <CallToActionSection />
    </div>
  )
}
