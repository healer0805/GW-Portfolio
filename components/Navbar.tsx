'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#EBEBEB]/50 backdrop-blur-md z-50 border-b border-gray-300">
      <div className="flex items-center justify-between px-2 py-4 max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="flex items-center transition-transform duration-300 hover:scale-105"
          onClick={handleLogoClick}
        >
          <div className="w-12 h-12 relative">
            <Image
              src="/img/icon/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
        </Link>
        <div className="flex gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg text-gray-800 hover:text-gray-600 transition-colors font-semibold ${
                  isActive ? 'underline-wavy' : ''
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

