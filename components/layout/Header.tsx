'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

interface HeaderProps {
  transparent?: boolean;
}

const navigationLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/hizmetler', label: 'Hizmetlerimiz' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'İletişim' },
];

export function Header({ transparent = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    transparent && !isScrolled
      ? 'bg-transparent'
      : 'bg-white shadow-md'
  }`;

  return (
    <header className={headerClasses}>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left Message */}
            <Link href="/iletisim" className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
              <span className="hidden md:inline">Herhangi bir sorunuz varsa bizi arayınız. Bize Ulaşın →</span>
              <span className="md:hidden">Bize Ulaşın →</span>
            </Link>

            {/* Right - Social Media */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs">Sosyal Medya:</span>
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-100 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt={siteConfig.name}
              width={50}
              height={50}
              className="h-12 lg:h-14 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-emerald-600 leading-tight">
                Ayaz & Hatice
              </span>
              <span className="text-xs lg:text-sm text-gray-600 leading-tight">
                Fizik Tedavi ve Danışmanlık Merkezi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Phone & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Phone Number */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Müşteri Destek</span>
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                'Merhaba, randevu almak istiyorum.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Hızlı İletişim
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-gray-700 hover:text-emerald-600 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-gray-200">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Phone */}
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  <Phone size={20} />
                  <span>{siteConfig.contact.phone}</span>
                </a>

                {/* Mobile CTA */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    'Merhaba, randevu almak istiyorum.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Hızlı İletişim
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
