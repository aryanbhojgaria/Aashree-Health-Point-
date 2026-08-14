import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  MapPin, 
  Activity, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function ContactFooter() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const phone1 = "9443343502";
  const phone2 = "7858974548";
  const emailAddress = "healthpointaashree@gmail.com";
  const businessName = "Aashree Health point";
  const shortAddress = "1332, Rishi Raj Narayan Rd, Niva Park Extension, Brahmapur, Kolkata - 700096";
  
  // Registered Google Maps listing URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessName}, ${shortAddress}`
  )}`;

  return (
    <footer 
      ref={sectionRef}
      id="contact" 
      className="relative bg-[#24352B] text-cream pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 overflow-hidden scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Background ambient accents & subtle texture for depth */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-black/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            TOP CLOSING CTA BANNER: Final decision-making prompt
            ========================================================================= */}
        <div 
          className={`rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm shadow-warm-lg transition-all duration-700 ease-out ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 motion-reduce:translate-y-0'
          }`}
        >
          {/* Subtle background line-art watermark */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 pointer-events-none opacity-10">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="100" cy="100" r="85" stroke="#FAF8F2" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M100 40v120M40 100h120" stroke="#FAF8F2" strokeWidth="2" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* CTA Copy */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-xs font-semibold uppercase tracking-wider shadow-warm-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Ready to Book or Inquire?</span>
              </div>
              <h2 className="text-fluid-2xl sm:text-fluid-3xl lg:text-fluid-4xl font-serif font-bold text-cream leading-tight">
                Quality Healthcare &amp; Diagnostics, <br className="hidden sm:inline" />
                <span className="text-accent italic font-normal">Right When You Need It.</span>
              </h2>
              <p className="text-fluid-sm text-[#E2DDD3] font-sans max-w-xl leading-relaxed">
                Call our direct doctor desk or send a quick WhatsApp message to schedule tests, request home blood collection, or book on-site chamber consultations.
              </p>
            </div>

            {/* Consistent Dual CTAs (Matching Hero scale-up, shadow depth, and tap states) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full">
              
              {/* Primary Call CTA */}
              <a
                href={`tel:${phone1}`}
                className="touch-target group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-xl bg-accent text-white font-medium text-sm sm:text-base shadow-coral-glow hover:bg-accent-hover hover:scale-[1.03] hover:shadow-xl active:scale-[0.97] active:bg-accent-active transition-all duration-200 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label="Call Aashree Health Point primary phone number"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white transition-transform group-hover:rotate-12 group-hover:scale-110 duration-200">
                  <Phone className="w-4 h-4" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-bold tracking-wide">Call Clinic: +91 {phone1}</span>
                  <span className="text-[11px] text-white/90 font-normal">Immediate Doctor / Lab Desk</span>
                </div>
              </a>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919443343502"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-xl bg-primary text-white font-medium text-sm sm:text-base shadow-warm hover:bg-primary-dark hover:scale-[1.03] hover:shadow-xl active:scale-[0.97] active:bg-primary-dark transition-all duration-200 w-full border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="WhatsApp Aashree Health Point"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white transition-transform group-hover:scale-110 duration-200">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-bold tracking-wide">Chat on WhatsApp</span>
                  <span className="text-[11px] text-white/90 font-normal">Book Home Pickup &amp; Tests</span>
                </div>
              </a>

            </div>

          </div>
        </div>

        {/* =========================================================================
            DETAILED CONTACT & FACILITY INFORMATION GRID (Staggered Entrance)
            ========================================================================= */}
        <div 
          style={{ transitionDelay: isSectionInView ? '160ms' : '0ms' }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pt-4 transition-all duration-700 ease-out ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 motion-reduce:translate-y-0'
          }`}
        >
          
          {/* Col 1: Phone Numbers */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-primary-light">
              <div className="p-1.5 rounded-lg bg-white/10 text-accent">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-cream tracking-tight">Direct Phone Lines</h3>
            </div>
            <p className="text-xs text-[#DDD8CD]">Tap to call for appointments or queries:</p>
            <div className="space-y-2">
              <a
                href={`tel:${phone1}`}
                className="touch-target flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                <span className="font-mono text-sm font-semibold text-cream group-hover:text-accent-light transition-colors">
                  +91 {phone1}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-cream-300 font-semibold bg-white/10 px-2 py-0.5 rounded shadow-warm-sm">
                  Primary
                </span>
              </a>

              <a
                href={`tel:${phone2}`}
                className="touch-target flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                <span className="font-mono text-sm font-semibold text-cream group-hover:text-accent-light transition-colors">
                  +91 {phone2}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-cream-300 font-semibold bg-white/10 px-2 py-0.5 rounded shadow-warm-sm">
                  Alternate
                </span>
              </a>
            </div>
          </div>

          {/* Col 2: Email & Messaging */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-primary-light">
              <div className="p-1.5 rounded-lg bg-white/10 text-accent">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-cream tracking-tight">Email &amp; Inquiries</h3>
            </div>
            <p className="text-xs text-[#DDD8CD]">Send reports, inquiries, or feedback:</p>
            <a
              href={`mailto:${emailAddress}`}
              className="touch-target flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <Mail className="w-4 h-4 text-cream-300 mt-0.5 shrink-0 group-hover:text-accent" />
              <div className="break-all">
                <span className="text-xs font-semibold text-cream group-hover:text-accent-light transition-colors block">
                  {emailAddress}
                </span>
                <span className="text-[10px] text-cream-300 mt-0.5 block">
                  Official Clinic &amp; Lab Inbox
                </span>
              </div>
            </a>
          </div>

          {/* Col 3: Operating Hours (Exact Google Business Profile Schedule) */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-primary-light">
              <div className="p-1.5 rounded-lg bg-white/10 text-accent">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-cream tracking-tight">Operating Hours</h3>
            </div>
            <p className="text-xs text-[#DDD8CD]">Clinic chamber &amp; lab timing:</p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
              <div className="flex justify-between items-start text-xs">
                <span className="text-cream-200 font-medium">Mon – Sat:</span>
                <div className="text-right font-mono text-cream font-semibold leading-snug">
                  <span>9:00 AM – 1:00 PM</span><br />
                  <span>5:00 PM – 9:00 PM</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs pt-2 border-t border-white/10">
                <span className="text-cream-200 font-medium">Sunday:</span>
                <span className="font-mono text-cream font-semibold">9:00 AM – 1:00 PM</span>
              </div>
              <span className="text-[10px] text-cream-300 block italic pt-0.5">
                * Home sample pickup timings available upon request
              </span>
            </div>
          </div>

          {/* Col 4: Address Brief */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-primary-light">
              <div className="p-1.5 rounded-lg bg-white/10 text-accent">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-cream tracking-tight">Clinic Address</h3>
            </div>
            <p className="text-xs text-[#DDD8CD]">South Kolkata Facility:</p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <p className="text-xs text-cream-200 leading-relaxed font-sans">
                1332, Rishi Raj Narayan Rd, Niva Park Extension, Brahmapur, Kolkata – 700096
              </p>
              <p className="text-[11px] font-semibold text-accent-light">
                Landmark: Near Niva Park Extension
              </p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-primary-light hover:text-cream font-medium pt-1 hover:underline"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM BRAND WORDMARK & COPYRIGHT BAR
            ========================================================================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300">
          
          {/* Small Brand Wordmark & Emblem */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary text-cream flex items-center justify-center shadow-warm-sm">
              <Activity className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-sm text-cream leading-tight">
                Aashree Health Point
              </span>
              <span className="text-[10px] text-cream-300 uppercase tracking-widest font-semibold">
                Affirmity &bull; Accuracy &bull; Affordable
              </span>
            </div>
          </div>

          {/* Legal / Copyright */}
          <div className="text-center sm:text-right space-y-0.5">
            <p>&copy; {new Date().getFullYear()} Aashree Health Point. All rights reserved.</p>
            <p className="text-[10px] text-cream-300/80">
              Healthcare Clinic &bull; NABL-Certified Lab Testing &bull; Home Care Services
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
