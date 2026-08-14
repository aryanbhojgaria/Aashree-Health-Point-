import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Activity, 
  Microscope, 
  Check, 
  Sparkles,
  Droplets,
  CalendarCheck2,
  Stethoscope,
  Home,
  TestTube2
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

/* 
  ENHANCED SERVICES SECTION:
  1. Custom Line-Art Illustrations: Crafted dedicated SVG motifs for Doctor Consultations,
     Lab Testing, and Home Services with distinct visual identity in sage green (#769382) and coral (#D96B43).
  2. Scroll-Triggered Motion: Staggered entrance animations (via useInView) as cards enter viewport.
  3. Desktop Hover Lift: Upward translation (-translate-y-1.5), luminous border accents, and shadow depth.
  4. Accessibility: Seamless fallback for prefers-reduced-motion without transform animations.
*/

export default function Services() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative bg-[#ECEFEA] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-ink-border/50 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Background ambient gradient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-secondary/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            SECTION HEADER: Staggered Fade-in
            ========================================================================= */}
        <div 
          className={`max-w-2xl space-y-3 mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 motion-reduce:translate-y-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle text-primary-dark text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Our Service Pillars</span>
          </div>
          <h2 className="text-fluid-2xl sm:text-fluid-3xl lg:text-fluid-4xl font-serif font-bold text-ink leading-tight">
            Integrated Clinical Care & <br className="hidden sm:inline" />
            <span className="text-primary-dark">Precision Diagnostics</span>
          </h2>
          <p className="text-fluid-sm sm:text-fluid-base text-ink-light leading-relaxed font-sans">
            Designed around patient comfort, clinical accuracy, and seamless accessibility — whether at our clinic or right at your doorstep.
          </p>
        </div>

        {/* =========================================================================
            ASYMMETRIC SERVICES GRID:
            - Desktop: 12-column asymmetric bento composition
            - Mobile: Clean vertical stack
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          
          {/* =======================================================================
              PILLAR 1: DOCTOR CONSULTATIONS (Desktop: 7 cols)
              ======================================================================= */}
          <div 
            style={{ transitionDelay: isSectionInView ? '100ms' : '0ms' }}
            className={`lg:col-span-7 rounded-3xl bg-cream-50 border border-ink-border p-6 sm:p-8 sm:p-10 shadow-warm flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-warm-lg transition-all duration-300 ${
              isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 motion-reduce:translate-y-0'
            }`}
          >
            {/* Custom Line-Art Background Watermark (Stylized Stethoscope & Heart Pulse) */}
            <div className="absolute -right-6 -bottom-6 w-52 h-52 pointer-events-none opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="100" cy="100" r="85" stroke="#769382" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M60 80c0-22.091 17.909-40 40-40s40 17.909 40 40v30c0 16.569-13.431 30-30 30h-20c-16.569 0-30-13.431-30-30V80z" stroke="#769382" strokeWidth="3" strokeLinecap="round" />
                <circle cx="140" cy="80" r="14" fill="#D96B43" fillOpacity="0.4" stroke="#D96B43" strokeWidth="2.5" />
                <circle cx="60" cy="80" r="10" stroke="#769382" strokeWidth="2.5" />
                <path d="M80 140l10 18 15-28 10 14h15" stroke="#2B2A26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="space-y-5 relative z-10">
              {/* Pillar Header with Custom Line-Art Badge Icon */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center shadow-warm group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                  {/* Custom Stethoscope + Heart Line Art */}
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6v8a8 8 0 0 0 16 0V6" stroke="#F3EFE3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 22v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1" stroke="#F3EFE3" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="25" cy="24" r="3.5" fill="#D96B43" stroke="#F3EFE3" strokeWidth="1.5" />
                    <circle cx="8" cy="6" r="2.5" fill="#F3EFE3" />
                    <circle cx="24" cy="6" r="2.5" fill="#F3EFE3" />
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-dark bg-primary-subtle px-3 py-1.5 rounded-full border border-primary/20 shadow-warm-sm">
                  On-Site Chamber
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5">
                <h3 className="text-fluid-xl sm:text-fluid-2xl font-serif font-bold text-ink">
                  Doctor Consultations
                </h3>
                <p className="text-fluid-sm text-ink-light leading-relaxed max-w-lg font-sans">
                  General physician consultations available at our dedicated on-site doctor’s chamber, including specialized diabetology, routine health evaluations, and preventive care.
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-ink">
                <div className="flex items-center gap-2 bg-cream p-2.5 rounded-xl border border-ink-border/60 shadow-warm-sm group-hover:border-primary/30 transition-colors">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium">General Physician Chamber</span>
                </div>
                <div className="flex items-center gap-2 bg-cream p-2.5 rounded-xl border border-ink-border/60 shadow-warm-sm group-hover:border-primary/30 transition-colors">
                  <Heart className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-medium">Diabetology &amp; Chronic Care</span>
                </div>
                <div className="flex items-center gap-2 bg-cream p-2.5 rounded-xl border border-ink-border/60 shadow-warm-sm group-hover:border-primary/30 transition-colors">
                  <Activity className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium">Vitals &amp; Preventive Checkups</span>
                </div>
                <div className="flex items-center gap-2 bg-cream p-2.5 rounded-xl border border-ink-border/60 shadow-warm-sm group-hover:border-primary/30 transition-colors">
                  <CalendarCheck2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium">Walk-ins &amp; Appointments</span>
                </div>
              </div>
            </div>

            {/* Micro-footer note */}
            <div className="pt-6 mt-6 border-t border-ink-border/60 text-xs text-ink-muted flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Experienced medical practitioners available during clinic hours</span>
            </div>
          </div>

          {/* =======================================================================
              PILLAR 2: NABL-CERTIFIED LAB TESTING (Desktop: 5 cols - Featured accent)
              ======================================================================= */}
          <div 
            style={{ transitionDelay: isSectionInView ? '220ms' : '0ms' }}
            className={`lg:col-span-5 rounded-3xl bg-primary-surface border-2 border-primary/40 p-6 sm:p-8 sm:p-10 shadow-warm flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5 hover:border-primary hover:shadow-warm-lg transition-all duration-300 ${
              isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 motion-reduce:translate-y-0'
            }`}
          >
            {/* Custom Line-Art Background Watermark (Test Tube Reaction & Optical Grid) */}
            <div className="absolute -right-6 -bottom-6 w-48 h-48 pointer-events-none opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500">
              <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="90" cy="90" r="75" stroke="#D96B43" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M60 40h20v60a10 10 0 0 1-20 0V40z" stroke="#D96B43" strokeWidth="3" />
                <path d="M100 30h20v80a10 10 0 0 1-20 0V30z" stroke="#769382" strokeWidth="3" />
                <circle cx="70" cy="80" r="3" fill="#D96B43" />
                <circle cx="110" cy="95" r="4" fill="#769382" />
                <circle cx="110" cy="70" r="2.5" fill="#769382" />
              </svg>
            </div>

            <div className="space-y-5 relative z-10">
              {/* Pillar Header with Custom Line-Art Icon */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-hover text-white flex items-center justify-center shadow-coral-glow group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300">
                  {/* Custom Test Tube & Flask Motif */}
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5h10M13 5v14a4 4 0 0 0 8 0V5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M13 14h8" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" />
                    <circle cx="17" cy="18" r="2" fill="#FFFFFF" />
                    <path d="M22 10l3 3m-1-4l3 3" stroke="#FBECE7" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-accent px-3 py-1.5 rounded-full shadow-coral-glow">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>NABL Certified</span>
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5">
                <h3 className="text-fluid-xl sm:text-fluid-2xl font-serif font-bold text-ink">
                  Diagnostic Lab Testing
                </h3>
                <p className="text-fluid-sm text-ink-light leading-relaxed font-sans">
                  High-precision diagnostic evaluations covering complete blood, stool, and urine pathology testing conducted with strict NABL-grade accuracy standards.
                </p>
              </div>

              {/* Specimen Tag Badges */}
              <div className="space-y-2 pt-1 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-cream border border-primary/20 shadow-warm-sm group-hover:border-accent/40 transition-colors">
                  <Droplets className="w-4 h-4 text-accent shrink-0" />
                  <div>
                    <span className="font-semibold text-ink">Blood Panels:</span>
                    <span className="text-ink-muted ml-1">CBC, Lipid, Thyroid, HbA1c, LFT/KFT</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-cream border border-primary/20 shadow-warm-sm group-hover:border-primary/40 transition-colors">
                  <Microscope className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <span className="font-semibold text-ink">Urine &amp; Stool:</span>
                    <span className="text-ink-muted ml-1">Routine, Microscopy, &amp; Culture tests</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-footer note */}
            <div className="pt-6 mt-6 border-t border-primary/20 text-xs text-primary-dark font-medium flex items-center justify-between">
              <span>Fast Digital &amp; Printed Reports</span>
              <span className="font-bold">100% Quality Assured</span>
            </div>
          </div>

          {/* =======================================================================
              PILLAR 3: HOME SERVICES (Desktop: 12 cols Full-Span Asymmetric Card)
              ======================================================================= */}
          <div 
            style={{ transitionDelay: isSectionInView ? '340ms' : '0ms' }}
            className={`lg:col-span-12 rounded-3xl bg-cream-50 border border-ink-border p-6 sm:p-8 lg:p-10 shadow-warm relative overflow-hidden group hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-warm-lg transition-all duration-300 ${
              isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 motion-reduce:translate-y-0'
            }`}
          >
            {/* Custom Line-Art Background Watermark (Home Medical Cross & Care Coordinates) */}
            <div className="absolute -right-8 -bottom-8 w-64 h-64 pointer-events-none opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="100" cy="100" r="90" stroke="#769382" strokeWidth="1.5" strokeDasharray="5 5" />
                <path d="M40 110l60-45 60 45v55a5 5 0 0 1-5 5H45a5 5 0 0 1-5-5v-55z" stroke="#2B2A26" strokeWidth="2.5" />
                <path d="M100 120v30m-15-15h30" stroke="#D96B43" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
              
              {/* Left Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ink to-ink-light text-cream flex items-center justify-center shadow-warm group-hover:scale-105 transition-all duration-300">
                    {/* Custom Home + Medical Cross Motif */}
                    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 14L16 6l10 8v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V14z" stroke="#F3EFE3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 16v6M13 19h6" stroke="#D96B43" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-white bg-primary-dark px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-warm-sm">
                    Doorstep Healthcare
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-fluid-xl sm:text-fluid-2xl font-serif font-bold text-ink">
                    Home Care &amp; Sample Collection
                  </h3>
                  <p className="text-fluid-sm sm:text-fluid-base text-ink-light leading-relaxed font-sans max-w-2xl">
                    High-quality medical care delivered to the comfort of your home — featuring convenient doorstep blood sample collection for all lab tests, and scheduled home doctor visits for elderly and recovering patients.
                  </p>
                </div>
              </div>

              {/* Right Feature Highlights */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-cream border border-ink-border/70 space-y-1.5 shadow-warm-sm hover:border-accent/40 transition-colors">
                  <div className="inline-flex p-2 rounded-xl bg-accent-light text-accent">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-sm text-ink">Home Blood Collection</h4>
                  <p className="text-xs text-ink-muted">
                    Convenient doorstep sample collection by certified phlebotomists. Safe and sterile.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cream border border-ink-border/70 space-y-1.5 shadow-warm-sm hover:border-primary/40 transition-colors">
                  <div className="inline-flex p-2 rounded-xl bg-primary-subtle text-primary-dark">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-sm text-ink">Doctor Home Visits</h4>
                  <p className="text-xs text-ink-muted">
                    Comfortable in-home consultations for seniors, mobility-impaired, or bedridden patients.
                  </p>
                </div>
              </div>

            </div>

            {/* Micro-footer */}
            <div className="pt-5 mt-5 border-t border-ink-border/40 text-xs text-ink-muted flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Standardized cold-chain sample preservation protocols</span>
              </span>
              <span className="font-semibold text-ink">
                Easy booking via Call or WhatsApp
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
