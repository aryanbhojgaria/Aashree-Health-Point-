import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#why-choose-us', label: 'Why Choose Us' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b-[1.5px] border-ink/30 transition-all duration-200">
      {/* Top quick announcement bar */}
      <div className="bg-teal text-cream text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-coral-light" />
              <span>Mon–Sat: 9am–1pm &bull; 5pm–9pm | Sun: 9am–1pm</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-cream/80">
              <MapPin className="w-3.5 h-3.5 text-coral-light" />
              <span>Brahmapur, Kolkata 700096</span>
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono">
            <span className="text-cream/80 hidden sm:inline">24x7 Helpline:</span>
            <a
              href="tel:+917003799755"
              className="font-bold text-cream hover:text-coral-light underline decoration-1 underline-offset-2 transition-colors"
            >
              +91 70037 99755
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Wordmark & Official Brochure Emblem */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg p-1"
          aria-label="Aashree Health Point Home"
        >
          {/* Authentic Cross Logo */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-cream border border-ink/40 flex items-center justify-center relative shadow-sm group-hover:border-teal transition-colors">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute w-6 h-2 bg-teal rounded-[1px]" />
              <div className="absolute w-2 h-6 bg-teal rounded-[1px]" />
              <div className="absolute w-2.5 h-2.5 bg-maroon rounded-full border border-cream" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-serif font-black text-lg sm:text-xl md:text-2xl text-teal tracking-tight leading-none group-hover:text-teal-dark transition-colors">
              Aashree
            </span>
            <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.2em] text-maroon leading-tight mt-0.5">
              HEALTH POINT
            </span>
            <span className="text-[8px] sm:text-[9px] font-sans font-semibold uppercase tracking-widest text-ink/70 hidden sm:block">
              Affirmity &bull; Accuracy &bull; Affordable
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-sans font-semibold text-ink/85 hover:text-teal rounded transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-maroon scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://wa.me/917003799755"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-1.5 px-3.5 py-2 rounded-none bg-cream border-[1.5px] border-ink text-ink font-bold text-xs hover:bg-teal hover:text-cream hover:border-teal transition-colors shadow-sm"
            aria-label="WhatsApp Aashree Health Point at 7003799755"
          >
            <MessageCircle className="w-4 h-4 text-teal group-hover:text-cream" />
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+917003799755"
            className="touch-target inline-flex items-center gap-1.5 px-4 py-2 rounded-none bg-teal text-cream font-bold text-xs hover:bg-teal-dark border-[1.5px] border-teal transition-colors shadow-sm"
            aria-label="Call Aashree Health Point at 7003799755"
          >
            <Phone className="w-4 h-4" />
            <span>Call: 7003799755</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+917003799755"
            className="touch-target inline-flex items-center justify-center p-2 rounded-none bg-teal text-cream sm:hidden border border-teal"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="touch-target inline-flex items-center justify-center p-2.5 rounded-none bg-cream border-[1.5px] border-ink text-ink hover:bg-ink hover:text-cream transition-colors"
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-cream border-b-2 border-ink px-4 py-6 shadow-xl space-y-4 animate-fade-in"
        >
          <div className="flex flex-col space-y-2 border-b border-ink/20 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="touch-target flex items-center px-3 py-2 text-base font-serif font-bold text-ink hover:text-teal hover:bg-coral/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <a
              href="tel:+917003799755"
              className="touch-target w-full flex items-center justify-center gap-2 py-3 bg-teal text-cream font-bold text-sm border-[1.5px] border-teal shadow-sm"
              onClick={handleLinkClick}
            >
              <Phone className="w-4 h-4" />
              <span>Call Primary: +91 70037 99755</span>
            </a>

            <a
              href="https://wa.me/917003799755"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target w-full flex items-center justify-center gap-2 py-3 bg-cream text-ink font-bold text-sm border-[1.5px] border-ink hover:bg-cream-100"
              onClick={handleLinkClick}
            >
              <MessageCircle className="w-4 h-4 text-teal" />
              <span>WhatsApp Us: +91 70037 99755</span>
            </a>

            <div className="text-center pt-2">
              <span className="text-[11px] text-ink/70 uppercase tracking-wider block font-semibold">
                Alternate Reachable Lines:
              </span>
              <p className="text-xs font-mono text-ink font-medium mt-0.5">
                9443343502 &bull; 7596905078 &bull; 7858974548
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
