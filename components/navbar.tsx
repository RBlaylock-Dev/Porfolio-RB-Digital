"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/90 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-2">
              <Image src="/images/rb-logo.png" alt="RB Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-bold text-primary">RB Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors font-medium"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800 transition-all duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-800 shadow-lg z-50 md:hidden">
              <nav className="container mx-auto px-4 py-6 space-y-4">
                <Link
                  href="/"
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/experience"
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="/projects"
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
