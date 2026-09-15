import React from 'react';
import { Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactFooter() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact & Clinic' },
  ];

  return (
    <footer id="contact" className="relative bg-teal text-cream py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto space-y-8"
      >
        
        {/* Condensed Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-cream/85 text-sm font-sans">
          
          {/* Col 1: Brand & Site Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-teal flex items-center justify-center shadow-sm">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute w-5 h-1.5 bg-teal rounded-sm" />
                  <div className="absolute w-1.5 h-5 bg-teal rounded-sm" />
                  <div className="absolute w-2 h-2 bg-maroon rounded-full" />
                </div>
              </div>
              <div>
                <span className="font-serif font-black text-xl text-cream block tracking-tight leading-none">
                  Aashree
                </span>
                <span className="font-sans font-bold text-[10px] tracking-[0.2em] text-coral-light uppercase block mt-0.5">
                  HEALTH POINT
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed">
              Affirmity &bull; Accuracy &bull; Affordable. Comprehensive healthcare under one roof and at your doorstep in Brahmapur, Kolkata.
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-coral-light">
              [Inspiring Health]
            </p>

            {/* Quick Navigation Links */}
            <div className="pt-2 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-cream/60 block mb-2">
                Quick Navigation:
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-semibold">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-cream hover:text-coral-light underline decoration-1 underline-offset-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Prominent Phone & Reachable Numbers */}
          <div className="md:col-span-5 space-y-3 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-coral-light block">
              Call &amp; WhatsApp:
            </span>

            {/* Prominent Primary Number Pair */}
            <div className="flex flex-wrap items-center gap-2 font-mono font-bold text-lg sm:text-xl text-cream">
              <a
                href="tel:+917003799755"
                className="hover:text-coral-light underline decoration-2 underline-offset-4 transition-colors"
              >
                70037 99755
              </a>
              <span className="text-cream/40">/</span>
              <a
                href="tel:+919443343502"
                className="hover:text-coral-light underline decoration-2 underline-offset-4 transition-colors"
              >
                94433 43502
              </a>
            </div>

            {/* Secondary/Smaller Alternate Numbers */}
            <div className="pt-2 border-t border-white/10 text-xs">
              <span className="text-cream/60 block mb-1">
                Secondary / Alternate Reachable Numbers:
              </span>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-cream/80">
                <a href="tel:+917596905078" className="hover:text-coral-light transition-colors">
                  75969 05078
                </a>
                <span className="text-cream/30">&bull;</span>
                <a href="tel:+917858974548" className="hover:text-coral-light transition-colors">
                  78589 74548
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="pt-2 border-t border-white/10">
              <a
                href="mailto:healthpointaashree@gmail.com"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-cream/90 hover:text-coral-light transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-coral-light" />
                <span>healthpointaashree@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 3: Address & Hours */}
          <div className="md:col-span-3 space-y-3 text-xs text-cream/80">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-coral-light shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-cream">Aashree Health Point</p>
                <p>1332, Rishi Raj Narayan Rd</p>
                <p>Badamtala, Niva Park Ext.</p>
                <p>Brahmapur, Kolkata, WB 700096</p>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-2 border-t border-white/10">
              <Clock className="w-4 h-4 text-coral-light shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-cream">Mon &ndash; Sat: 9am&ndash;1pm, 5pm&ndash;9pm</p>
                <p>Sun: 9am&ndash;1pm (Evening Closed)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <div>
            &copy; {new Date().getFullYear()} Aashree Health Point. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="touch-target inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-cream/80 hover:text-cream text-xs transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </motion.div>
    </footer>
  );
}
