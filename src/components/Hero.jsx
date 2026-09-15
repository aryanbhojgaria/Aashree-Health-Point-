import React from 'react';
import { Phone, MessageCircle, ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';

export default function Hero() {
  const primaryPhone = "7003799755";
  const alternateNumbers = [
    { number: "9443343502", label: "94433 43502" },
    { number: "7596905078", label: "75969 05078" },
    { number: "7858974548", label: "78589 74548" },
  ];

  return (
    <section className="relative bg-coral py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Hero Card styled with brochure cream panel and thin ink border */}
        <div className="bg-cream border-[1.5px] border-ink p-6 sm:p-10 md:p-14 shadow-brochure text-center relative overflow-hidden">
          
          {/* Authentic Brochure Cross Emblem */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-none bg-cream border-[1.5px] border-ink flex items-center justify-center relative shadow-sm">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                {/* Horizontal cross bar */}
                <div className="absolute w-10 sm:w-12 h-3.5 sm:h-4 bg-teal rounded-[1px]" />
                {/* Vertical cross bar */}
                <div className="absolute w-3.5 sm:w-4 h-10 sm:h-12 bg-teal rounded-[1px]" />
                {/* Center heart/accent badge in maroon */}
                <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-maroon rounded-full border-2 border-cream flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-cream rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Official Brand Wordmark */}
          <div className="space-y-1 sm:space-y-1.5">
            <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-teal tracking-tight leading-none">
              Aashree
            </h1>
            <div className="font-sans font-bold text-sm sm:text-lg md:text-xl tracking-[0.28em] sm:tracking-[0.32em] text-maroon uppercase">
              HEALTH POINT
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm font-sans font-bold uppercase tracking-widest text-ink/80 pt-1">
              AFFIRMITY &bull; ACCURACY &bull; AFFORDABLE
            </div>
            <div className="font-serif italic text-base sm:text-xl md:text-2xl text-ink font-semibold pt-2">
              [Inspiring Health]
            </div>
          </div>

          {/* Short Intro Line Summarizing the Brand */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-ink/90 font-sans leading-relaxed mt-5 sm:mt-6">
            Comprehensive, compassionate healthcare provided under one roof and at your doorstep. Headed by an experienced medical professional with modern diagnostics, expert clinicians, and 24&times;7 dedicated support in Brahmapur, Kolkata.
          </p>

          {/* CTA Buttons: Primary Call Now & WhatsApp */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
            <a
              href={`tel:+91${primaryPhone}`}
              className="touch-target w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-teal hover:bg-teal-dark text-cream font-serif font-bold text-base sm:text-lg border-[1.5px] border-teal shadow-brochure transition-all active:scale-[0.98]"
              aria-label={`Call Aashree Health Point primary number ${primaryPhone}`}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now ({primaryPhone})</span>
            </a>

            <a
              href={`https://wa.me/91${primaryPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-cream hover:bg-cream-100 text-ink font-serif font-bold text-base sm:text-lg border-[1.5px] border-ink shadow-brochure transition-all active:scale-[0.98]"
              aria-label={`WhatsApp Aashree Health Point primary number ${primaryPhone}`}
            >
              <MessageCircle className="w-5 h-5 text-teal" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Alternate Reachable Phone Numbers Line */}
          <div className="mt-4 pt-3 border-t border-ink/20 max-w-xl mx-auto">
            <p className="text-xs text-ink/75 font-sans">
              <span className="font-semibold text-ink">Or call / WhatsApp reachable lines:</span>{' '}
              {alternateNumbers.map((item, idx) => (
                <React.Fragment key={item.number}>
                  <a
                    href={`tel:+91${item.number}`}
                    className="font-mono font-bold text-ink hover:text-teal underline decoration-1 underline-offset-2 transition-colors px-1"
                  >
                    {item.label}
                  </a>
                  {idx < alternateNumbers.length - 1 && <span className="text-ink/40">&bull;</span>}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Tri-fold brochure key pillar ribbon */}
          <div className="mt-8 pt-5 border-t border-ink/20 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="flex items-center gap-2 text-xs font-sans text-ink">
              <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
              <span>Experienced Doctor Headed</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-sans text-ink">
              <HeartPulse className="w-4 h-4 text-maroon shrink-0" />
              <span>NABL Lab Diagnostics</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-sans text-ink">
              <Clock className="w-4 h-4 text-teal shrink-0" />
              <span>24&times;7 Home Care Support</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-sans text-ink">
              <Sparkles className="w-4 h-4 text-maroon shrink-0" />
              <span>Affordable Health Packages</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
