import React from 'react';
import BrochureHeading from './BrochureHeading';
import TaglineCallout from './TaglineCallout';
import { 
  Navigation, 
  MapPin, 
  Clock, 
  Building2, 
  Phone, 
  ExternalLink 
} from 'lucide-react';

export default function Location() {
  const businessName = "Aashree Health point";
  const addressText = "1332, Rishi Raj Narayan Rd, Niva Park Extension, Brahmapur, Kolkata, West Bengal 700096";
  const landmarkText = "Near Niva Park Extension & Tolly Turf Arena";
  
  // Direct Google Maps Search URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessName}, ${addressText}`
  )}`;

  // Embedded Google Maps iframe URL
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${businessName}, ${addressText}`
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="relative bg-coral py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t-[1.5px] border-ink/20">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <BrochureHeading as="h2" size="lg" align="center" color="ink">
            VISIT OUR CLINIC &bull; LOCATION
          </BrochureHeading>
          <p className="text-sm sm:text-base text-ink/90 font-sans leading-relaxed">
            Easily accessible for walk-in consultations, routine diagnostic tests, and direct home sample collection coordination across South Kolkata.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Landmark, Hours */}
          <div className="lg:col-span-6 bg-cream border-[1.5px] border-ink p-6 sm:p-8 shadow-brochure flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              {/* Registered Place Header */}
              <div className="flex items-center justify-between border-b border-ink/15 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-teal text-cream flex items-center justify-center border border-ink/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-maroon block">
                      Verified Clinic Location
                    </span>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-ink">
                      Aashree Health Point
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-ink/70 bg-coral/20 px-2.5 py-1 border border-ink/20">
                  PIN 700096
                </span>
              </div>

              {/* Exact Address */}
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-ink/70 font-semibold block">
                  Clinic Address:
                </span>
                <p className="font-serif text-lg text-ink font-bold leading-snug">
                  1332, Rishi Raj Narayan Rd, Niva Park Extension
                </p>
                <p className="text-sm text-ink/80 font-sans">
                  Brahmapur, Kolkata, West Bengal &ndash; 700096
                </p>
              </div>

              {/* Landmark Callout */}
              <div className="flex items-start gap-3 p-3.5 bg-cream-50 border border-ink/20">
                <Building2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Key Landmark
                  </span>
                  <p className="text-sm text-ink/90 font-medium">
                    {landmarkText}
                  </p>
                  <p className="text-xs text-ink/70 mt-0.5">
                    Direct access from Bansdroni, Garia, and Tollygunge metro connections.
                  </p>
                </div>
              </div>

              {/* Clinic Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-3 bg-cream-50 border border-ink/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-teal font-bold">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>Mon &ndash; Sat Timings</span>
                  </div>
                  <p className="text-ink font-mono font-bold text-sm">
                    9:00 AM &ndash; 1:00 PM <br />
                    5:00 PM &ndash; 9:00 PM
                  </p>
                </div>

                <div className="p-3 bg-cream-50 border border-ink/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-maroon font-bold">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>Sunday Timings</span>
                  </div>
                  <p className="text-ink font-mono font-bold text-sm">
                    9:00 AM &ndash; 1:00 PM <br />
                    <span className="text-xs font-normal text-ink/70">(Evening Closed)</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Directions Action */}
            <div className="pt-4 border-t border-ink/15 space-y-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-teal hover:bg-teal-dark text-cream font-serif font-bold text-base border-[1.5px] border-teal shadow-brochure transition-all active:scale-[0.98]"
                aria-label="Open Aashree Health Point in Google Maps"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions via Google Maps</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              <div className="flex items-center justify-between text-xs text-ink/75 px-1 font-sans">
                <span>Need assistance finding us?</span>
                <a
                  href="tel:+917003799755"
                  className="font-bold text-ink hover:text-teal flex items-center gap-1 underline decoration-1 underline-offset-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 7003799755</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-6 bg-cream border-[1.5px] border-ink p-2 sm:p-3 shadow-brochure flex flex-col justify-between min-h-[380px] sm:min-h-[440px]">
            
            <div className="bg-cream px-3 py-2 border-b border-ink/20 flex items-center justify-between text-xs">
              <span className="font-serif font-bold text-ink flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-maroon rounded-full inline-block" />
                <span>Aashree Health Point &bull; Map Preview</span>
              </span>
              <span className="font-mono text-ink/70 text-[11px]">Brahmapur, Kolkata</span>
            </div>

            <div className="relative flex-1 w-full min-h-[320px] bg-cream-50 border border-ink/20 overflow-hidden my-2">
              <iframe
                title="Aashree Health Point Google Maps Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0 filter saturate-[0.9] contrast-[1.05]"
              />
            </div>

            <div className="px-3 py-1.5 flex items-center justify-between text-xs text-ink/80 border-t border-ink/15">
              <span>Rishi Raj Narayan Rd, Niva Park Ext.</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-teal hover:underline flex items-center gap-1"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
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
    </section>
  );
}
