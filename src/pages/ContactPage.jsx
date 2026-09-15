import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Navigation, ExternalLink, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import BrochureHeading from '../components/BrochureHeading';
import TaglineCallout from '../components/TaglineCallout';

export default function ContactPage() {
  const businessName = "Aashree Health Point";
  const addressText = "1332, Rishi Raj Narayan Rd, Badamtala, Niva Park Extension, Brahmapur, Kolkata, West Bengal 700096";
  const landmarkText = "Near Niva Park Extension & Tolly Turf Arena (Badamtala, Brahmapur)";

  // Direct Google Maps Search URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessName}, ${addressText}`
  )}`;

  // Embedded Google Maps iframe URL
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${businessName}, ${addressText}`
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Editorial Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/40 border border-ink/10 text-xs font-semibold text-ink uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-maroon" />
            <span>24x7 Reachable Healthcare &bull; South Kolkata</span>
          </div>

          <BrochureHeading as="h1" size="xl" align="center" color="ink">
            CONTACT &bull; CLINIC LOCATION
          </BrochureHeading>

          <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed">
            Reach out directly for general physician consultations, free doorstep blood sample collection, home nursing, or walk into our Brahmapur clinic.
          </p>

          <div className="pt-2">
            <span className="font-serif italic font-bold text-lg sm:text-xl text-maroon">
              AFFIRMITY &bull; ACCURACY &bull; AFFORDABLE
            </span>
          </div>
        </div>

        {/* 2-Column Main Contact & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN (6 cols): Direct Contact Channels & Timings */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Primary & Secondary Phone Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-black/[0.04] space-y-6">
              
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal block">
                      Direct Support &bull; 24x7 Helpline
                    </span>
                    <h2 className="font-serif font-bold text-xl text-ink">
                      Call &amp; WhatsApp Channels
                    </h2>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-white bg-maroon px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Verified
                </span>
              </div>

              {/* Primary Numbers Pair */}
              <div className="space-y-3 bg-coral-subtle p-5 rounded-2xl border border-coral/20">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-maroon block">
                  Primary Clinic Numbers:
                </span>
                <div className="flex flex-wrap items-center gap-3 font-mono font-bold text-xl sm:text-2xl text-ink">
                  <a
                    href="tel:+917003799755"
                    className="hover:text-teal underline decoration-2 underline-offset-4 transition-colors"
                  >
                    70037 99755
                  </a>
                  <span className="text-ink/30">/</span>
                  <a
                    href="tel:+919443343502"
                    className="hover:text-teal underline decoration-2 underline-offset-4 transition-colors"
                  >
                    94433 43502
                  </a>
                </div>
                <p className="text-xs text-ink/75 font-sans">
                  Available 24x7 for doctor home visits, diagnostic sample pickup, and emergency consultations.
                </p>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <a
                    href="tel:+917003799755"
                    className="touch-target flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal text-cream font-bold text-sm hover:bg-teal-dark shadow-sm transition-all active:scale-[0.98]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Primary Helpline</span>
                  </a>

                  <a
                    href="https://wa.me/917003799755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-ink font-bold text-sm hover:bg-cream-50 border border-black/[0.08] shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-teal" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Secondary / Alternate Numbers */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink/70 block">
                  Secondary / Alternate Reachable Numbers:
                </span>
                <div className="flex flex-wrap items-center gap-3 font-mono text-base font-semibold text-ink">
                  <a
                    href="tel:+917596905078"
                    className="hover:text-teal transition-colors px-3 py-1.5 rounded-lg bg-cream-50 border border-black/[0.04]"
                  >
                    +91 75969 05078
                  </a>
                  <a
                    href="tel:+917858974548"
                    className="hover:text-teal transition-colors px-3 py-1.5 rounded-lg bg-cream-50 border border-black/[0.04]"
                  >
                    +91 78589 74548
                  </a>
                </div>
                <p className="text-xs text-ink/65 font-sans">
                  Use alternate numbers if primary channels are temporarily occupied.
                </p>
              </div>

              {/* Official Email */}
              <div className="pt-3 border-t border-black/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-maroon/10 text-maroon flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink/70 block">
                    Official Email:
                  </span>
                  <a
                    href="mailto:healthpointaashree@gmail.com"
                    className="font-mono text-sm sm:text-base font-semibold text-teal hover:underline break-all"
                  >
                    healthpointaashree@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Clinic Timings & Consultation Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-black/[0.04] space-y-4">
              <div className="flex items-center gap-2.5 text-teal">
                <Clock className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-ink">
                  Clinic Walk-in &amp; Consultation Hours
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-cream-50 border border-black/[0.05] space-y-1">
                  <span className="font-bold text-teal block uppercase text-xs tracking-wider">
                    Monday &ndash; Saturday
                  </span>
                  <p className="font-mono font-bold text-ink text-base">
                    9:00 AM &ndash; 1:00 PM <br />
                    5:00 PM &ndash; 9:00 PM
                  </p>
                  <span className="text-[11px] text-ink/70">Morning &amp; Evening Clinics</span>
                </div>

                <div className="p-4 rounded-2xl bg-cream-50 border border-black/[0.05] space-y-1">
                  <span className="font-bold text-maroon block uppercase text-xs tracking-wider">
                    Sunday
                  </span>
                  <p className="font-mono font-bold text-ink text-base">
                    9:00 AM &ndash; 1:00 PM <br />
                    <span className="text-xs font-normal text-ink/70">(Evening Closed)</span>
                  </p>
                  <span className="text-[11px] text-ink/70">Morning Clinic Only</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal/10 text-teal text-xs flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Home Doctor Visits &amp; Blood Collection available 7 days a week on scheduled booking.</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (6 cols): Address, Landmark & Interactive Google Map */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-black/[0.04] flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal text-cream flex items-center justify-center shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-maroon block">
                      Physical Clinic Address
                    </span>
                    <h2 className="font-serif font-bold text-xl text-ink">
                      Aashree Health Point
                    </h2>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-ink/80 bg-cream-100 px-3 py-1 rounded-full">
                  PIN 700096
                </span>
              </div>

              {/* Exact Address */}
              <div className="space-y-1">
                <p className="font-serif text-lg sm:text-xl font-bold text-ink leading-snug">
                  1332, Rishi Raj Narayan Road, Badamtala
                </p>
                <p className="text-sm sm:text-base text-ink/80 font-sans">
                  Brahmapur, Kolkata, West Bengal &ndash; 700096
                </p>
              </div>

              {/* Landmark Callout */}
              <div className="p-4 rounded-2xl bg-coral-subtle border border-coral/20 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block text-ink font-semibold">Key Landmark:</strong>
                  <p className="text-ink/80 font-medium mt-0.5">{landmarkText}</p>
                  <p className="text-ink/65 text-xs mt-1">
                    Conveniently connected to Bansdroni, Garia Metro, and Tollygunge corridors.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-black/[0.08] shadow-inner bg-cream-50">
                <iframe
                  title="Aashree Health Point Google Maps Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0 filter saturate-[0.95]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-cream font-bold text-sm hover:bg-teal-dark transition-all shadow-sm active:scale-[0.98]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps / Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <span className="text-xs text-ink/70 font-sans text-center sm:text-right">
                  Need directions assistance? Call <a href="tel:+917003799755" className="font-bold text-teal underline">70037 99755</a>
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Section Bottom Tagline */}
        <div className="text-center pt-2">
          <TaglineCallout align="center" size="lg" color="ink">
            CONVENIENT AND EFFORTLESS
          </TaglineCallout>
        </div>

      </div>
    </div>
  );
}
