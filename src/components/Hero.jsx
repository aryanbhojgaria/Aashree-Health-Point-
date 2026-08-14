import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Home, 
  Stethoscope, 
  TestTube2, 
  CheckCircle2, 
  Clock, 
  Award, 
  Sparkles, 
  ArrowUpRight,
  Activity,
  Heart
} from 'lucide-react';

/* 
  ENHANCED HERO SECTION:
  1. Motion & Staggered Entrance: Added performant CSS fade-and-rise keyframe animations 
     (animate-fade-rise-1 through 5, ~120ms staggered delay) respecting prefers-reduced-motion.
  2. Button Hover & Tap States: 
     - Desktop Hover: Subtle scale-up (scale-[1.03]), deeper warm/coral shadow.
     - Mobile Tap: Tactile press feedback (active:scale-[0.97]).
  3. Visuals & Depth: 
     - Background dot matrix texture (bg-dot-pattern) and ambient layered glowing orbs.
     - Custom layered illustration graphic featuring a stylized medical cross/heart & pulse motif
       in sage green (#769382), sage-gray (#C0C3B9), and coral (#D96B43) with subtle floating motion.
*/

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-6 pb-14 sm:pt-10 sm:pb-18 lg:pt-14 lg:pb-24 min-h-[calc(100vh-72px)] flex items-center">
      
      {/* Layered background depth: ambient blurred gradients & faint dot-grid pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full bg-primary/15 blur-3xl pointer-events-none animate-gentle-pulse" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-secondary/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetric 2-column layout on desktop, clean vertical stack on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Editorial Typography, Tagline, Subheadline, & Dual CTAs
              ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 sm:space-y-6">
            
            {/* 1. Clinical Trust Badge / Wordmark Pre-header (Entrance Animation 1) */}
            <div className="animate-fade-rise-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary/20 text-primary-dark text-xs sm:text-sm font-semibold tracking-wide shadow-warm-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="uppercase tracking-wider text-[11px] sm:text-xs">
                Aashree Health Point
              </span>
              <span className="text-primary/40">&bull;</span>
              <span className="text-xs font-medium">Clinic & Diagnostic Care</span>
            </div>

            {/* 2. Main Tagline & Headline in Editorial Serif (Entrance Animation 2) */}
            <div className="animate-fade-rise-2 space-y-2">
              <h1 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-serif font-bold text-ink leading-[1.12] tracking-tight">
                Affirmity. <br className="hidden sm:inline" />
                <span className="text-primary-dark">Accuracy.</span> <br className="hidden sm:inline" />
                <span className="italic font-normal text-accent">Affordable.</span>
              </h1>
            </div>

            {/* 3. 1-Sentence Trust Subheadline (Entrance Animation 3) */}
            <p className="animate-fade-rise-3 text-fluid-base sm:text-fluid-lg font-sans text-ink-light leading-relaxed max-w-xl">
              General physician care, NABL-certified lab testing, and home visits — all in one place.
            </p>

            {/* 4. Quick Micro-Trust Badges for Mobile & Desktop (Entrance Animation 4) */}
            <div className="animate-fade-rise-4 flex flex-wrap gap-2.5 pt-1 text-xs sm:text-sm text-ink-muted">
              <span className="inline-flex items-center gap-1.5 bg-cream-50/90 backdrop-blur-sm border border-ink-border px-3 py-1.5 rounded-xl shadow-warm-sm hover:border-primary/40 transition-colors">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="font-medium text-ink">NABL Quality Standards</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cream-50/90 backdrop-blur-sm border border-ink-border px-3 py-1.5 rounded-xl shadow-warm-sm hover:border-primary/40 transition-colors">
                <Home className="w-4 h-4 text-primary" />
                <span className="font-medium text-ink">Doorstep Sample Pickup</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cream-50/90 backdrop-blur-sm border border-ink-border px-3 py-1.5 rounded-xl shadow-warm-sm hover:border-primary/40 transition-colors">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium text-ink">Fast Report Delivery</span>
              </span>
            </div>

            {/* 5. Dual CTA Buttons - With Scale & Shadow Micro-Interactions (Entrance Animation 5) */}
            <div className="animate-fade-rise-5 w-full pt-3 sm:pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                
                {/* Primary CTA: Call Now (Scale 1.03 on hover, 0.97 on mobile press) */}
                <a
                  href="tel:9443343502"
                  className="touch-target group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-xl bg-accent text-white font-medium text-sm sm:text-base shadow-coral-glow hover:bg-accent-hover hover:scale-[1.03] hover:shadow-xl active:scale-[0.97] active:bg-accent-active transition-all duration-200 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  aria-label="Call Aashree Health Point at +91 94433 43502"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white transition-transform group-hover:rotate-12 group-hover:scale-110 duration-200">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-bold tracking-wide">Call Now</span>
                    <span className="text-[11px] text-white/90 font-mono font-normal">+91 94433 43502</span>
                  </div>
                </a>

                {/* Secondary CTA: WhatsApp Us (Scale 1.03 on hover, 0.97 on mobile press) */}
                <a
                  href="https://wa.me/919443343502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-xl bg-primary text-white font-medium text-sm sm:text-base shadow-warm hover:bg-primary-dark hover:scale-[1.03] hover:shadow-xl active:scale-[0.97] active:bg-primary-dark transition-all duration-200 w-full sm:w-auto border border-primary-dark/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label="WhatsApp Aashree Health Point at +91 94433 43502"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white transition-transform group-hover:scale-110 duration-200">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-bold tracking-wide">WhatsApp Us</span>
                    <span className="text-[11px] text-white/90 font-normal">Book Test or Appointment</span>
                  </div>
                </a>

              </div>
              
              <p className="text-[11px] sm:text-xs text-ink-muted flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Instant confirmation &bull; No prior registration required &bull; Direct doctor line</span>
              </p>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Custom Illustration & Clinical Card with Floating Motion
              ========================================================================= */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle floating illustration container (barely perceptible 8s loop) */}
              <div className="animate-subtle-float relative rounded-3xl bg-cream-50/95 backdrop-blur-sm border-2 border-ink-border p-6 sm:p-8 shadow-warm-lg overflow-hidden space-y-6">
                
                {/* Custom Stylized Geometric Medical Emblem & Line Art Header */}
                <div className="relative flex items-center justify-between border-b border-ink-border/60 pb-5 overflow-hidden">
                  
                  {/* Decorative faint background geometric ring art */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="60" r="50" stroke="#769382" strokeWidth="1.5" strokeDasharray="4 4" />
                      <circle cx="60" cy="60" r="34" stroke="#C0C3B9" strokeWidth="1.5" />
                      <path d="M60 20V100M20 60H100" stroke="#769382" strokeWidth="1" strokeOpacity="0.4" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-3.5 relative z-10">
                    {/* Custom Stylized Medical Cross Emblem */}
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center shadow-warm">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4v16m-8-8h16" stroke="#F3EFE3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="3.5" fill="#D96B43" />
                      </svg>
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full border-2 border-cream-50" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-ink text-base sm:text-lg leading-snug">
                        Comprehensive Care
                      </h3>
                      <p className="text-xs text-ink-muted flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Clinic &bull; Lab &bull; At Home</span>
                      </p>
                    </div>
                  </div>

                  <span className="relative z-10 inline-flex items-center gap-1 text-[11px] font-semibold text-primary-dark bg-primary-subtle px-3 py-1.5 rounded-full border border-primary/20 shadow-warm-sm">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    <span>NABL Partner</span>
                  </span>
                </div>

                {/* 3 Pillars of Service with Clean Line Motifs */}
                <div className="space-y-3.5">
                  
                  {/* Pillar 1: Doctor Consultation */}
                  <div className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream border border-ink-border/50 hover:border-primary/50 hover:shadow-warm-sm transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary-dark flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-ink">General Physician Clinic</h4>
                        <span className="text-[10px] uppercase font-bold text-primary-dark bg-primary-subtle px-2 py-0.5 rounded">Walk-in</span>
                      </div>
                      <p className="text-xs text-ink-muted mt-0.5">
                        Consultations for acute illnesses, chronic management, & wellness.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2: NABL Certified Diagnostics */}
                  <div className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream border border-ink-border/50 hover:border-accent/40 hover:shadow-warm-sm transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-accent group-hover:text-white transition-all duration-200">
                      <TestTube2 className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-ink">Diagnostic Lab Tests</h4>
                        <span className="text-[10px] uppercase font-bold text-accent bg-accent-light px-2 py-0.5 rounded">Accurate</span>
                      </div>
                      <p className="text-xs text-ink-muted mt-0.5">
                        Blood, urine, pathology & full health packages with digital reports.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3: Doorstep Home Visits */}
                  <div className="group flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream border border-ink-border/50 hover:border-primary/50 hover:shadow-warm-sm transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-secondary-subtle text-ink flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-ink group-hover:text-cream transition-all duration-200">
                      <Home className="w-5 h-5 text-primary-dark group-hover:text-cream" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-ink">Home Blood Collection</h4>
                        <span className="text-[10px] uppercase font-bold text-primary-dark bg-secondary-subtle px-2 py-0.5 rounded">Doorstep</span>
                      </div>
                      <p className="text-xs text-ink-muted mt-0.5">
                        Trained phlebotomists collect samples safely from your home.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Bottom Status Banner */}
                <div className="pt-2 border-t border-ink-border/50 flex items-center justify-between text-xs text-ink-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-medium text-ink">Lab Open Today</span>
                  </div>
                  <a
                    href="tel:9443343502"
                    className="inline-flex items-center gap-1 text-primary-dark hover:text-primary font-semibold text-xs transition-colors"
                  >
                    <span>Direct Doctor Line</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Floating accent badge on desktop with subtle hover lift */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-ink text-cream px-4 py-2.5 rounded-2xl shadow-warm-lg items-center gap-3 border border-ink-light hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center shadow-coral-glow">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">100% Verified Reports</p>
                  <p className="text-[10px] text-cream-300">NABL Accredited Quality</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
