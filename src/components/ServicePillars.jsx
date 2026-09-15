import React, { useEffect, useRef } from 'react';
import { Stethoscope, Activity, HeartHandshake, ShieldPlus, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrochureHeading from './BrochureHeading';
import ServiceCard from './ServiceCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 'doctor-care',
    title: 'Doctor Care',
    step: '01',
    icon: Stethoscope,
    accentColor: 'teal',
    bgTint: 'bg-teal/10 text-teal',
    activeBg: 'bg-teal text-cream',
    description: 'Expert home visits by experienced physicians, online consultations, and continuous chronic illness monitoring.',
    features: ['Doctor visits at home', 'Tele-consultation anywhere', 'Preventive health management'],
    href: '/services#doctor-care',
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics & Lab',
    step: '02',
    icon: Activity,
    accentColor: 'maroon',
    bgTint: 'bg-maroon/10 text-maroon',
    activeBg: 'bg-maroon text-cream',
    description: 'Accurate, NABL-accredited blood pathology and home radiology tests with free sample collection at your doorstep.',
    features: ['Free doorstep collection', 'Digital online reports', 'Up to 50% test discount'],
    href: '/services#diagnostics',
  },
  {
    id: 'home-nursing',
    title: 'Home Nursing & Specialized Care',
    step: '03',
    icon: HeartHandshake,
    accentColor: 'teal',
    bgTint: 'bg-teal/10 text-teal',
    activeBg: 'bg-teal text-cream',
    description: 'Trained 12h/24h professional nurses, clinical medical procedures, physiotherapy recovery, and dialysis support.',
    features: ['12h & 24h trained nurses', '13 clinical home procedures', 'Physiotherapy & dialysis'],
    href: '/services#home-nursing',
  },
  {
    id: 'wellness',
    title: 'Wellness & Prevention',
    step: '04',
    icon: ShieldPlus,
    accentColor: 'maroon',
    bgTint: 'bg-maroon/10 text-maroon',
    activeBg: 'bg-maroon text-cream',
    description: 'Elder care subscriptions, adult vaccinations at home, preventive health packages, and residential complex doctors.',
    features: ['Senior citizen subscriptions', '8 adult vaccines at home', 'Housing complex physician'],
    href: '/services#wellness',
  },
];

export default function ServicePillars() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonsRef = useRef([]);

  useEffect(() => {
    // Check for user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Use gsap.context for bulletproof cleanup and scoped selector management
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // STRICTLY DESKTOP PINNING (>= 768px)
      mm.add('(min-width: 768px)', () => {
        const cards = cardsRef.current;
        const buttons = buttonsRef.current;
        if (!cards.length || !sectionRef.current) return;

        // Ensure initial DOM state: Card 0 visible; Cards 1..3 hidden below
        gsap.set(cards[0], { opacity: 1, y: 0, pointerEvents: 'auto', zIndex: 10 });
        for (let i = 1; i < cards.length; i++) {
          gsap.set(cards[i], { opacity: 0, y: 30, pointerEvents: 'none', zIndex: 1 });
        }

        // Master Scrubbed Timeline - 100% tied to scroll position
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top+=70',
            end: '+=1800',
            pin: true,
            pinSpacing: true,
            scrub: 0.8, // Smooth 0.8s catch-up to scroll position
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Sequence transitions between the 4 cards
        for (let i = 0; i < cards.length - 1; i++) {
          const currentCard = cards[i];
          const nextCard = cards[i + 1];
          const currentBtn = buttons[i];
          const nextBtn = buttons[i + 1];

          // Outgoing card fades & moves slightly up
          tl.to(currentCard, {
            opacity: 0,
            y: -24,
            pointerEvents: 'none',
            duration: 1,
            ease: 'power2.inOut',
          });

          // Incoming card fades in & moves from bottom into place
          tl.to(
            nextCard,
            {
              opacity: 1,
              y: 0,
              pointerEvents: 'auto',
              zIndex: 10,
              duration: 1,
              ease: 'power2.inOut',
            },
            '<' // synchronous crossfade
          );

          // Update button states simultaneously
          if (currentBtn && nextBtn) {
            tl.to(
              currentBtn,
              {
                opacity: 0.55,
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                duration: 0.5,
              },
              '<'
            );
            tl.to(
              nextBtn,
              {
                opacity: 1,
                backgroundColor: '#FAF7F2',
                borderColor: 'rgba(0, 0, 0, 0.08)',
                duration: 0.5,
              },
              '<'
            );
          }
        }
      });
    }, sectionRef);

    // Refresh ScrollTrigger after layout stabilizes to avoid offset jumps
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert(); // Guaranteed cleanup on unmount / route changes
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-cream-50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-teal block">
            Core Service Pillars
          </span>
          <BrochureHeading as="h2" size="lg" align="center" color="teal">
            Our Services
          </BrochureHeading>
          <p className="text-sm sm:text-base text-ink/70 font-sans">
            Comprehensive healthcare delivered at your home or clinic in South Kolkata.
          </p>
        </div>

        {/* =====================================================================
            DESKTOP PINNED SHOWCASE (Visible on md: screens and above)
            Single GSAP scrub controller - Zero React state churn during scroll.
            ===================================================================== */}
        <div className="hidden md:block">
          <div className="bg-[#FAF0ED] rounded-3xl p-8 lg:p-10 shadow-card border border-black/[0.04]">
            <div className="grid grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Progress Step Indicators */}
              <div className="col-span-5 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink/50 block mb-2">
                  Scroll to Explore 4 Core Pillars
                </span>

                <div className="space-y-2">
                  {categories.map((cat, idx) => {
                    const Icon = cat.icon;
                    const isFirst = idx === 0;

                    return (
                      <div
                        key={cat.id}
                        ref={(el) => (buttonsRef.current[idx] = el)}
                        className={`w-full p-4 rounded-2xl flex items-center justify-between transition-colors border ${
                          isFirst
                            ? 'bg-cream-50 opacity-100 border-black/[0.08] shadow-sm'
                            : 'bg-transparent opacity-55 border-transparent'
                        }`}
                        style={{ willChange: 'opacity, background-color' }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${cat.bgTint}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-ink/50 uppercase block">
                              Step {cat.step}
                            </span>
                            <span className="font-sans font-bold text-sm text-ink">
                              {cat.title}
                            </span>
                          </div>
                        </div>

                        <div className="w-2 h-2 rounded-full bg-maroon shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Absolutely-Positioned Category Display Panels */}
              <div className="col-span-7 relative min-h-[380px]">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={cat.id}
                      ref={(el) => (cardsRef.current[idx] = el)}
                      className="absolute inset-0 bg-cream-50/90 rounded-2xl p-8 border border-black/[0.05] flex flex-col justify-between"
                      style={{
                        willChange: 'transform, opacity',
                        transform: 'translateZ(0)',
                      }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cat.bgTint}`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          <span className="text-xs font-mono font-bold text-ink/60 bg-[#FAF0ED] px-3 py-1 rounded-full shadow-sm">
                            Pillar {cat.step} of 04
                          </span>
                        </div>

                        <div>
                          <h3 className="font-sans font-bold text-2xl text-ink">
                            {cat.title}
                          </h3>
                          <p className="text-base text-ink/75 font-sans leading-relaxed mt-2">
                            {cat.description}
                          </p>
                        </div>

                        <ul className="space-y-1.5 pt-1">
                          {cat.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-ink/80">
                              <Check className="w-4 h-4 text-teal shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-black/[0.06]">
                        <Link
                          to={cat.href}
                          className="touch-target inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-teal-dark group transition-colors"
                        >
                          <span>Explore {cat.title} services</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        {/* =====================================================================
            MOBILE STACKED REVEAL (Visible below 768px)
            Clean, native touch cards (no pinning on mobile for 60fps scroll).
            ===================================================================== */}
        <div className="md:hidden space-y-4">
          {categories.map((cat) => (
            <div key={cat.id}>
              <ServiceCard
                icon={cat.icon}
                title={cat.title}
                description={cat.description}
                href={cat.href}
                accentColor={cat.accentColor}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
