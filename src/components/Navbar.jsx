import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Track scroll position to transition from transparent to solid after hero
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // The 4 distinct multi-page routes
  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About Us', end: false },
    { to: '/services', label: 'Services', end: false },
    { to: '/contact', label: 'Contact', end: false },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled || mobileOpen
          ? 'bg-[#F4E3DF]/95 backdrop-blur-md border-b border-black/[0.06] shadow-card'
          : 'bg-[#F4E3DF]/90 backdrop-blur-sm border-b border-transparent shadow-none'
      }`}
    >
      {/* Top quick announcement & contact bar */}
      <div className="bg-teal text-cream text-[11px] sm:text-xs py-1.5 px-4 transition-colors">
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
        {/* Brand Wordmark & Medical Care Emblem */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg p-1"
          aria-label="Aashree Health Point Home"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FAF0ED] shadow-sm flex items-center justify-center relative group-hover:scale-105 transition-transform duration-200">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute w-6 h-2 bg-teal rounded-sm" />
              <div className="absolute w-2 h-6 bg-teal rounded-sm" />
              <div className="absolute w-2.5 h-2.5 bg-maroon rounded-full border border-teal/20" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-serif font-black text-lg sm:text-xl md:text-2xl text-teal tracking-tight leading-none group-hover:text-teal-dark transition-colors">
              Aashree
            </span>
            <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.2em] text-maroon leading-tight mt-0.5">
              HEALTH POINT
            </span>
            <span className="text-[8px] sm:text-[9px] font-sans font-semibold uppercase tracking-widest text-ink/60 hidden sm:block">
              Affirmity &bull; Accuracy &bull; Affordable
            </span>
          </div>
        </Link>

        {/* Desktop Multi-Page Route Links (Home, About Us, Services, Contact) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-sans rounded-xl transition-all relative ${
                  isActive
                    ? 'text-teal font-bold bg-teal/10 shadow-sm'
                    : 'text-ink/80 hover:text-teal hover:bg-black/[0.03] font-semibold'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-maroon rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://wa.me/917003799755"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF0ED] hover:bg-[#F5E5E0] text-ink font-sans font-bold text-xs shadow-sm border border-black/[0.05] transition-all"
            aria-label="WhatsApp Aashree Health Point at 7003799755"
          >
            <MessageCircle className="w-4 h-4 text-teal" />
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+917003799755"
            className="touch-target inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal text-cream font-sans font-bold text-xs hover:bg-teal-dark shadow-sm transition-all active:scale-[0.98]"
            aria-label="Call Aashree Health Point at 7003799755"
          >
            <Phone className="w-4 h-4" />
            <span>Call: 70037 99755</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle & Quick Call */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+917003799755"
            className="touch-target inline-flex items-center justify-center p-2 rounded-xl bg-teal text-cream sm:hidden shadow-sm"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="touch-target inline-flex items-center justify-center p-2.5 rounded-xl bg-[#FAF0ED] text-ink hover:bg-[#F5E5E0] transition-colors shadow-sm"
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
          className="lg:hidden bg-[#F4E3DF] border-b border-black/[0.08] px-4 py-6 shadow-xl space-y-4 animate-fade-in"
        >
          <div className="flex flex-col space-y-1 border-b border-black/[0.06] pb-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `touch-target flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-sans font-bold text-left transition-colors ${
                    isActive ? 'text-teal bg-teal/10' : 'text-ink hover:text-teal hover:bg-black/[0.02]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-xs text-maroon font-mono uppercase bg-maroon/10 px-2 py-0.5 rounded-md">
                        Active
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <a
              href="tel:+917003799755"
              className="touch-target w-full flex items-center justify-center gap-2 py-3 bg-teal text-cream rounded-xl font-bold text-sm shadow-sm"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="w-4 h-4" />
              <span>Call Primary: +91 70037 99755</span>
            </a>

            <a
              href="https://wa.me/917003799755"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target w-full flex items-center justify-center gap-2 py-3 bg-[#FAF0ED] text-ink rounded-xl font-bold text-sm border border-black/[0.05]"
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle className="w-4 h-4 text-teal" />
              <span>WhatsApp Us: +91 70037 99755</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
