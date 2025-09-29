'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 border-b border-purple-500 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <img
                src="/logos/websitelogo-gold.svg"
                alt="10BestOnlineCasinosUK"
                className="w-full h-full"
              />
            </div>
            <span className="text-xl font-bold text-yellow-500">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105 font-medium">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 font-medium">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-105 font-medium">
              Terms
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-700">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
