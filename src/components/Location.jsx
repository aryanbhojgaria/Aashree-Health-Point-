import React from 'react';
import { 
  Navigation, 
  Compass, 
  Clock, 
  Building2, 
  Phone, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Location() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Registered Google Maps Business Name & Exact Address
  const businessName = "Aashree Health point";
  const addressText = "1332, Rishi Raj Narayan Rd, Niva Park Extension, Brahmapur, Kolkata, West Bengal 700096";
  const landmarkText = "Near Niva Park Extension";
  
  // Exact Google Maps place URL to redirect straight to the registered business listing
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessName}, ${addressText}`
  )}`;

  // Exact Google Maps embed centered directly on registered business listing
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${businessName}, ${addressText}`
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section 
      ref={sectionRef}
      id="location" 
      className="relative bg-cream py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-ink-border/50 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Background ambient accents & subtle dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

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
            <Compass className="w-3.5 h-3.5 text-primary" />
            <span>Visit Our Clinic</span>
          </div>
          <h2 className="text-fluid-2xl sm:text-fluid-3xl lg:text-fluid-4xl font-serif font-bold text-ink leading-tight">
            Conveniently Located in <br className="hidden sm:inline" />
            <span className="text-primary-dark">Brahmapur, Kolkata</span>
          </h2>
          <p className="text-fluid-sm sm:text-fluid-base text-ink-light leading-relaxed font-sans">
            Easily accessible for walk-in consultations, routine diagnostic tests, and direct home sample coordination across South Kolkata.
          </p>
        </div>

        {/* =========================================================================
            LOCATION 2-COLUMN GRID (Equal Weight Desktop / Stacked Mobile)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* =======================================================================
              LEFT COLUMN: Address Details, Registered Pin & Accurate Timings
              ======================================================================= */}
          <div 
            style={{ transitionDelay: isSectionInView ? '100ms' : '0ms' }}
            className={`lg:col-span-6 flex flex-col justify-between space-y-6 transition-all duration-700 ease-out ${
              isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 motion-reduce:translate-y-0'
            }`}
          >
            
            {/* Address Card with Custom Background Illustration */}
            <div className="rounded-3xl bg-cream-50 border border-ink-border p-6 sm:p-8 shadow-warm space-y-6 flex-1 flex flex-col justify-between hover:border-primary/40 hover:shadow-warm-lg transition-all duration-300 relative overflow-hidden group">
              
              {/* Custom Location Line-Art Watermark */}
              <div className="absolute -right-8 -top-8 w-48 h-48 pointer-events-none opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500">
                <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="80" cy="80" r="70" stroke="#769382" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="80" cy="80" r="45" stroke="#C0C3B9" strokeWidth="1.5" />
                  <path d="M80 30v100M30 80h100" stroke="#769382" strokeWidth="1" strokeOpacity="0.4" />
                </svg>
              </div>

              <div className="space-y-5 relative z-10">
                {/* Header with Registered Place Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center shadow-warm group-hover:scale-105 transition-transform duration-300">
                      {/* Custom Crafted Map-Pin & Pulse Beacon */}
                      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3C10.477 3 6 7.477 6 13c0 7.5 10 16 10 16s10-8.5 10-16c0-5.523-4.477-10-10-10z" stroke="#FAF8F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="16" cy="13" r="3.5" fill="#D96B43" stroke="#FAF8F2" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-dark bg-primary-subtle px-3 py-1 rounded-full border border-primary/20 shadow-warm-sm">
                        Verified Google Business Location
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase text-ink-muted bg-cream px-2.5 py-1 rounded-lg border border-ink-border/60">
                    Kolkata 700096
                  </span>
                </div>

                {/* Main Registered Address */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-ink-subtle font-semibold">
                    Clinic Address
                  </span>
                  <h3 className="text-fluid-lg sm:text-fluid-xl font-serif font-bold text-ink leading-snug">
                    1332, Rishi Raj Narayan Rd, Niva Park Extension
                  </h3>
                  <p className="text-fluid-sm text-ink-light font-sans">
                    Brahmapur, Kolkata, West Bengal – 700096
                  </p>
                </div>

                {/* Prominent Landmark Line */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream border border-ink-border/80 shadow-warm-sm group-hover:border-accent/40 transition-colors">
                  <div className="p-2 rounded-xl bg-accent-light text-accent shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-subtle block">
                      Key Local Landmark
                    </span>
                    <p className="text-sm font-bold text-ink">
                      {landmarkText}
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">
                      Near Tolly Turf Arena &bull; Direct access from Bansdroni, Garia &amp; Tollygunge.
                    </p>
                  </div>
                </div>

                {/* Exact Clinic Timings from Verified Google Business Profile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-ink">
                  <div className="p-3 rounded-xl bg-cream border border-ink-border/60 shadow-warm-sm space-y-1">
                    <div className="flex items-center gap-1.5 text-primary-dark font-semibold">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span>Mon – Sat Timings</span>
                    </div>
                    <p className="text-ink font-bold font-mono">
                      9:00 AM – 1:00 PM <br />
                      5:00 PM – 9:00 PM
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-cream border border-ink-border/60 shadow-warm-sm space-y-1">
                    <div className="flex items-center gap-1.5 text-primary-dark font-semibold">
                      <Clock className="w-4 h-4 text-accent shrink-0" />
                      <span>Sunday Timings</span>
                    </div>
                    <p className="text-ink font-bold font-mono">
                      9:00 AM – 1:00 PM <br />
                      <span className="text-[11px] font-sans font-normal text-ink-muted">(Evening Closed)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Action with Direct Google Maps Place Query */}
              <div className="pt-4 border-t border-ink-border/60 space-y-3 relative z-10">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-white font-medium text-sm sm:text-base shadow-coral-glow hover:bg-accent-hover hover:scale-[1.025] hover:shadow-xl active:scale-[0.97] active:bg-accent-active transition-all duration-200 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  aria-label="Open Aashree Health Point in Google Maps"
                >
                  <Navigation className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="font-bold">Open Aashree Health Point in Google Maps</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                <div className="flex items-center justify-between text-xs text-ink-muted px-1">
                  <span>Need help finding us?</span>
                  <a 
                    href="tel:07858974548" 
                    className="font-semibold text-primary-dark hover:text-primary flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call +91 78589 74548</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* =======================================================================
              RIGHT COLUMN: Styled Interactive Google Map Embed (Targeting Registered Business)
              ======================================================================= */}
          <div 
            style={{ transitionDelay: isSectionInView ? '220ms' : '0ms' }}
            className={`lg:col-span-6 flex flex-col transition-all duration-700 ease-out ${
              isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 motion-reduce:translate-y-0'
            }`}
          >
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] rounded-3xl bg-cream-50 border-2 border-ink-border/80 shadow-warm-lg overflow-hidden flex flex-col hover:border-primary/50 transition-colors duration-300">
              
              {/* Map Header Bar */}
              <div className="bg-cream border-b border-ink-border px-4 py-2.5 flex items-center justify-between text-xs">
                <a 
                  href={googleMapsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group hover:text-primary transition-colors"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-bold text-ink group-hover:text-primary">Aashree Health point</span>
                </a>
                <span className="text-[11px] text-ink-muted font-mono">Brahmapur, Kolkata</span>
              </div>

              {/* Embedded Google Map iframe targeting registered place */}
              <div className="relative flex-1 w-full min-h-[280px]">
                <iframe
                  title="Aashree Health Point Registered Google Business Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0 filter saturate-[0.95] contrast-[1.02]"
                />
              </div>

              {/* Map Footer Bar with quick landmark indicator & direct link */}
              <div className="bg-cream/95 backdrop-blur-sm border-t border-ink-border px-4 py-2.5 flex items-center justify-between text-[11px] text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-ink">Niva Park Extension</span>
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-dark font-bold hover:underline flex items-center gap-1"
                >
                  <span>Open Registered Place</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
