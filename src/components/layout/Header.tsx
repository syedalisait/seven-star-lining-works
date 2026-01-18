'use client';

import { useState } from 'react';
import Link from 'next/link';
import { businessInfo } from '@/data/business-info';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

// WhatsApp Logo SVG Component
const WhatsAppLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 175.216 175.552"
    className="h-4 w-4"
    fill="currentColor"
  >
    <path d="M87.913 0C39.417 0 .25 39.152.25 87.638c0 19.354 6.338 37.231 17.063 51.688L1.256 174.482l36.682-16.063c13.813 9.375 30.5 14.813 48.35 14.813 48.496 0 87.663-39.152 87.663-87.638S136.409 0 87.913 0zm0 160.525c-16.188 0-31.188-5.313-43.313-14.25l-3.125-1.875-31.063 13.5 13.5-30.75-2.063-3.25c-9.75-12.438-15.563-28.063-15.563-45 0-40.188 32.688-72.875 72.875-72.875s72.875 32.688 72.875 72.875-32.688 72.875-72.875 72.875z"/>
    <path d="M127.101 105.313c-2.188-1.125-12.875-6.375-14.875-7.063-2-.688-3.438-.938-4.938.938s-5.688 7.063-6.938 8.5c-1.313 1.438-2.563 1.625-4.75.5-2.188-1.125-9.188-3.375-17.5-10.813-6.438-5.75-10.813-12.875-12.063-15.063-1.313-2.188-.125-3.375.938-4.5 1-.938 2.188-2.563 3.313-3.813.938-1.313 1.313-2.188 2-3.625.688-1.438.313-2.75-.188-3.813-.5-1.125-4.938-11.813-6.75-16.188-1.75-4.25-3.563-3.688-4.938-3.75-1.25-.063-2.75-.063-4.188-.063s-3.813.563-5.813 2.75c-2 2.188-7.625 7.438-7.625 18.125s7.813 21.063 8.875 22.5c1.125 1.438 15.438 23.563 37.375 33 5.188 2.188 9.25 3.5 12.375 4.5 5.25 1.625 10 1.375 13.75.875 4.188-.625 12.875-5.25 14.688-10.313 1.813-5.063 1.813-9.375 1.313-10.313-.5-1.063-1.938-1.688-4.188-2.813z"/>
  </svg>
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'About', href: '/#about' },
    { name: 'Reviews', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-bold text-brand-primary">
            {businessInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-brand-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Call Now Button */}
          <a href={`tel:${businessInfo.contact.phone}`}>
            <Button variant="default" size="sm" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button variant="default" size="icon" className="md:hidden">
              <Phone className="h-4 w-4" />
            </Button>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${(businessInfo.contact.whatsapp || businessInfo.contact.phone).replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi! I found your website and would like to inquire about your services.')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="hidden md:flex border-green-600 text-green-700 hover:bg-green-50">
              <WhatsAppLogo />
              <span className="ml-2">WhatsApp</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden border-green-600 text-green-700 hover:bg-green-50">
              <WhatsAppLogo />
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-base font-medium transition-colors hover:text-brand-primary py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
