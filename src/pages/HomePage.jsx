import React from 'react';
import Hero from '../components/Hero';
import ServicePillars from '../components/ServicePillars';
import WhyChooseUs from '../components/WhyChooseUs';

/**
 * HomePage (Phase 2 - Simplified & Modernized)
 * Scrollable & understandable in under 10 seconds on mobile.
 * Sections:
 * 1. Hero (Logo, tagline, one-line intro, Call/WhatsApp CTAs with primary number 7003799755)
 * 2. Four Service Category Cards (Icon, title, 1-sentence description, link to Services page)
 * 3. Why Choose Us (Row of 6 short icon+label items, no paragraphs, no WHO quote)
 * (Contact/Footer rendered by main App layout)
 */
export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Four Service Category Cards */}
      <ServicePillars />

      {/* 3. Why Choose Us */}
      <WhyChooseUs />

      {/* 4. Brief Contact CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#FAF0ED] rounded-3xl p-6 sm:p-10 shadow-card border border-black/[0.05] text-center space-y-6">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-maroon block">
              Direct Assistance &bull; 24x7 Coordination
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink leading-tight">
              Need a Doctor Visit or Free Blood Sample Collection at Home?
            </h2>
            <p className="text-sm sm:text-base text-ink/75 font-sans leading-relaxed">
              Our clinical team coordinates home visits, NABL-certified lab pickups, and elder care assistance across South Kolkata.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+917003799755"
              className="touch-target inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-cream font-bold text-sm hover:bg-teal-dark transition-all shadow-sm active:scale-[0.98]"
            >
              <span>Call: 70037 99755</span>
            </a>

            <a
              href="https://wa.me/917003799755"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cream-50 text-ink font-bold text-sm hover:bg-cream-100 border border-black/[0.08] transition-all"
            >
              <span>WhatsApp Us</span>
            </a>

            <a
              href="/contact"
              className="touch-target inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-teal font-bold text-sm hover:underline"
            >
              <span>Clinic Location &amp; Hours &rarr;</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-ink/60 font-sans border-t border-black/[0.05]">
            <span>Primary helpline: <strong>70037 99755</strong> / <strong>94433 43502</strong> &bull; Alternate: <strong>75969 05078</strong> / <strong>78589 74548</strong></span>
          </div>
        </div>
      </section>
    </>
  );
}
