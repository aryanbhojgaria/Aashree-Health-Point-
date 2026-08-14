import React from 'react';
import { 
  Sparkles, 
  Quote
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

/* 
  ENHANCED WHY CHOOSE US SECTION:
  1. Custom Badge-Style Graphics: Created distinctive SVG emblem badges for 100% NABL Quality,
     Affordable Pricing, ₹0 Doorstep Care, and On-Site Doctor Chamber.
  2. Scroll-Triggered Entrance: Staggered entrance animations (via useInView) for the pull-quote banner
     and each individual stat badge.
  3. Interactive Micro-Interactions: Tile hover lift (-translate-y-1.5) with luminous glassmorphism glow.
  4. Motion Accessibility: Smooth fallback for prefers-reduced-motion.
*/

export default function WhyChooseUs() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  const credibilityPoints = [
    {
      stat: "100% NABL",
      title: "Certified Diagnostics",
      description: "Standardized clinical protocols & verified accuracy",
      accent: "text-cream bg-white/10 border-white/20",
      customBadge: (
        /* Custom NABL Shield & Verification Emblem */
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3L5 7v7c0 6.5 4.5 10.5 9 12 4.5-1.5 9-5.5 9-12V7l-9-4z" stroke="#FAF8F2" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 14l3 3 6-6" stroke="#D96B43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      stat: "Fair & Honest",
      title: "Affordable Pricing",
      description: "Transparent rates with zero hidden lab charges",
      accent: "text-accent bg-accent/20 border-accent/30",
      customBadge: (
        /* Custom Currency & Transparent Pricing Coin Emblem */
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="11" stroke="#D96B43" strokeWidth="2" />
          <path d="M10 9h8M10 13h6M10 9c3 0 4.5 4 1 7l5 5" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      stat: "Home Care",
      title: "Doorstep Blood Collection",
      description: "Home sample pickup & home doctor visits available",
      accent: "text-cream bg-white/10 border-white/20",
      customBadge: (
        /* Custom Doorstep Pickup & Care Emblem */
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12l10-8 10 8v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12z" stroke="#FAF8F2" strokeWidth="2" />
          <circle cx="14" cy="17" r="3.5" fill="#D96B43" />
          <path d="M14 6v2" stroke="#FAF8F2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      stat: "Walk-In",
      title: "On-Site Chamber",
      description: "Experienced general physicians & diabetology care",
      accent: "text-cream bg-white/10 border-white/20",
      customBadge: (
        /* Custom Consultation Chamber Emblem */
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="6" width="18" height="18" rx="4" stroke="#FAF8F2" strokeWidth="2" />
          <path d="M14 11v8M10 15h8" stroke="#D96B43" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="14" cy="6" r="2" fill="#FAF8F2" />
        </svg>
      )
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="why-choose-us" 
      className="relative bg-primary-dark text-cream py-16 sm:py-20 lg:py-24 overflow-hidden shadow-inner scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Background ambient accents for depth */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-black/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            PULL-QUOTE & TAGLINE HEROIC BANNER
            ========================================================================= */}
        <div 
          className={`text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 motion-reduce:translate-y-0'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-cream text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>The Aashree Commitment</span>
          </div>

          {/* Large Bold Editorial Serif Pull-Quote */}
          <div className="relative pt-1 pb-1">
            <h2 className="text-fluid-2xl sm:text-fluid-3xl lg:text-fluid-4xl font-serif font-bold text-cream leading-tight tracking-tight">
              &ldquo;Affirmity in care. <br className="hidden xs:inline sm:hidden" />
              <span className="text-cream-200">Accuracy in tests.</span> <br className="hidden sm:inline" />
              <span className="text-accent italic font-normal">Truly Affordable.</span>&rdquo;
            </h2>
          </div>

          <p className="text-fluid-xs sm:text-fluid-sm text-[#EFECE6] font-sans max-w-xl mx-auto leading-relaxed">
            High-standard clinical accuracy and compassionate healthcare designed without prohibitive costs.
          </p>
        </div>

        {/* =========================================================================
            COMPACT STAT / BADGE CALLOUTS:
            - Scroll-triggered staggered entrance
            - Mobile: 2x2 compact grid
            - Desktop: 4-column balanced stat row
            ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {credibilityPoints.map((item, index) => {
            const delayMs = 120 + index * 100;
            return (
              <div 
                key={index}
                style={{ transitionDelay: isSectionInView ? `${delayMs}ms` : '0ms' }}
                className={`rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 flex flex-col justify-between hover:-translate-y-1.5 hover:bg-white/[0.09] hover:border-white/30 hover:shadow-warm-lg transition-all duration-300 group ${
                  isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 motion-reduce:translate-y-0'
                }`}
              >
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Icon Custom Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center ${item.accent} transition-transform group-hover:scale-110 shadow-warm-sm`}>
                      {item.customBadge}
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-cream-300 font-semibold tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Punchy Stat & Title */}
                  <div className="pt-1">
                    <div className="font-serif font-bold text-base sm:text-lg text-cream tracking-tight leading-tight group-hover:text-cream-50 transition-colors">
                      {item.stat}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-cream-200 mt-0.5">
                      {item.title}
                    </div>
                  </div>
                </div>

                {/* Short Scannable Phrase */}
                <p className="text-[11px] sm:text-xs text-[#DDD8CD] leading-snug mt-3 pt-2.5 border-t border-white/10 font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
