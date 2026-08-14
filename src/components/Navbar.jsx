import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Activity, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-choose-us', label: 'Why Choose Us' },
  { href: '#location', label: 'Location & Map' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
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
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-ink-border/70 transition-all duration-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        
        {/* Brand Wordmark & Emblem */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
          aria-label="Aashree Health Point Home"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-warm group-hover:bg-primary-dark group-hover:scale-105 transition-all duration-200">
            <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-cream" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl text-ink tracking-tight leading-none group-hover:text-primary transition-colors">
              Aashree Health Point
            </span>
            <span className="text-[10px] sm:text-xs font-sans text-ink-muted uppercase tracking-wider font-semibold mt-0.5">
              Clinic &bull; Lab &bull; Home Care
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink-light">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="hover:text-primary transition-colors py-1 hover:border-b-2 hover:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: CTAs + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp - hidden on smallest screens */}
          <a
            href="https://wa.me/919443343502"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary-subtle text-primary-dark font-semibold text-xs sm:text-sm hover:bg-primary-light/30 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            <span>WhatsApp</span>
          </a>

          {/* Call Now */}
          <a
            href="tel:9443343502"
            className="touch-target inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm shadow-coral-glow hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-accent-active active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Call clinic now"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          {/* Hamburger Menu Button - visible below lg */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="touch-target lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-ink-border/70 text-ink hover:bg-primary-subtle hover:text-primary hover:border-primary/40 active:scale-[0.95] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </nav>

      {/* =====================================================================
          MOBILE SLIDE-DOWN MENU (lg:hidden)
          ===================================================================== */}
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-ink/30 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '64px' }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Menu panel */}
      <div 
        ref={menuRef}
        className={`absolute left-0 right-0 top-full bg-cream/98 backdrop-blur-lg border-b-2 border-primary/20 shadow-warm-lg z-50 lg:hidden transition-all duration-300 ease-out origin-top ${
          mobileOpen 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-ink hover:bg-primary-subtle hover:text-primary active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ 
                transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateX(0)' : 'translateX(-8px)',
                transition: 'opacity 250ms ease-out, transform 250ms ease-out, background-color 150ms, color 150ms'
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              {link.label}
            </a>
          ))}

          {/* Mobile-only quick actions row */}
          <div className="pt-3 mt-2 border-t border-ink-border/50 flex gap-2.5">
            <a
              href="tel:9443343502"
              onClick={handleLinkClick}
              className="touch-target flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-white font-semibold text-sm shadow-coral-glow active:scale-[0.97] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919443343502"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="touch-target flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-warm active:scale-[0.97] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

    </header>
  );
}
