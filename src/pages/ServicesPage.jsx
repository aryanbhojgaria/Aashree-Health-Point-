import React, { useEffect, useState } from 'react';
import { 
  Stethoscope, 
  Activity, 
  HeartHandshake, 
  ShieldPlus, 
  Phone, 
  MessageCircle, 
  Check, 
  Sparkles
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import BrochureHeading from '../components/BrochureHeading';
import TaglineCallout from '../components/TaglineCallout';

const serviceCategories = [
  {
    id: 'doctor-care',
    title: 'Doctor Care',
    shortLabel: 'Doctor Care',
    badge: 'Physician Services',
    icon: Stethoscope,
    accent: 'teal',
    accentStyles: {
      pillBg: 'bg-teal/10 text-teal',
      border: 'border-teal/20',
      tagline: 'text-teal',
      btnBg: 'bg-teal text-cream hover:bg-teal-dark',
    },
    description: 'Direct physician consultations at your home, online telemedicine, and specialized residential doctor programs headed by experienced clinicians.',
    services: [
      {
        id: 'home-consultation',
        name: 'Doctor Consultation at Home',
        tagline: 'So no more queuing and no more waiting.',
        summary: 'Compassionate, in-home physician visits tailored for elderly, post-surgical, or mobility-impaired individuals to manage chronic illnesses without exhausting clinic commutes.',
        highlights: ['Chronic illness management', 'Post-surgical follow-ups', 'Direct specialist referrals'],
      },
      {
        id: 'tele-consultation',
        name: 'Online Doctor Consultation',
        tagline: 'Stay Home Stay Safe',
        summary: 'Consult certified medical practitioners online from the comfort of your home at a time that works best for your schedule.',
        highlights: ['Virtual video & phone consultations', 'Prompt prescription delivery', 'Flexible appointment slots'],
      },
      {
        id: 'residential-physician',
        name: 'Residential Complex Physician Program',
        tagline: 'Redefining Health Care',
        summary: 'A dedicated society physician program offering 24x7 in-house or virtual clinical coverage, regular preventative health checks, and emergency coordination for residential communities.',
        highlights: ['24x7 physician availability', 'Health education & screenings', 'Ambulance & hospital admission support'],
      },
    ],
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics & Lab',
    shortLabel: 'Diagnostics & Lab',
    badge: 'NABL Certified Tests',
    icon: Activity,
    accent: 'maroon',
    accentStyles: {
      pillBg: 'bg-maroon/10 text-maroon',
      border: 'border-maroon/20',
      tagline: 'text-maroon',
      btnBg: 'bg-maroon text-cream hover:bg-maroon-dark',
    },
    description: 'Convenient blood sample collection at your doorstep with up to 50% discount on routine tests, verified by NABL-accredited diagnostic laboratories.',
    services: [
      {
        id: 'diagnostics-home',
        name: 'Diagnostics & Pathology at Home',
        tagline: 'Convenient and Effortless',
        summary: 'Convenient blood sample collection at your doorstep with up to 50% discount on routine tests, verified by NABL-accredited laboratories.',
        highlights: ['Free doorstep sample collection', 'Online digital reports', 'Complimentary physician report discussion'],
      },
      {
        id: 'radiology-home',
        name: 'Radiology & Imaging Tests at Home',
        tagline: 'Advanced Portable Diagnostics',
        summary: 'High-quality portable imaging—including digital X-rays, ECG, 24-hr Holter monitoring, and ultrasound—performed safely at home without stressful hospital travel.',
        highlights: ['Portable digital X-ray & ECG', 'Ultrasound & Echocardiogram', 'Arterial Blood Gas (ABG) testing'],
      },
      {
        id: 'health-package',
        name: 'Preventive Full-Body Health Packages',
        tagline: 'Get Tested Be Sure',
        summary: 'Tailored full-body diagnostic screening packages designed for early disease detection, diabetes monitoring, and cardiac wellness at transparent rates.',
        highlights: ['Comprehensive organ profiles', 'Doorstep collection included', 'Preventive doctor review'],
      },
    ],
  },
  {
    id: 'home-nursing',
    title: 'Home Nursing & Specialized Care',
    shortLabel: 'Home Nursing & Care',
    badge: 'Certified Nursing & Rehab',
    icon: HeartHandshake,
    accent: 'teal',
    accentStyles: {
      pillBg: 'bg-teal/10 text-teal',
      border: 'border-teal/20',
      tagline: 'text-teal',
      btnBg: 'bg-teal text-cream hover:bg-teal-dark',
    },
    description: 'Certified 12h/24h nursing attendants, clinical home medical procedures, physiotherapy recovery, dialysis assistance, and dignified palliative support.',
    services: [
      {
        id: 'nursing-care',
        name: 'Home Nursing & Attendant Service',
        tagline: 'Recover Faster',
        summary: 'Compassionate, certified nursing professionals providing 12-hour or 24-hour bedside care, post-operative monitoring, and assistance with daily living for elderly or recovering patients.',
        highlights: ['12h & 24h trained nurses', 'Post-operative bedside care', 'Compassionate daily living support'],
      },
      {
        id: 'clinical-procedures',
        name: 'Clinical Procedures at Home',
        tagline: 'Safe Clinical Procedures',
        summary: 'Professional at-home administration of 13+ clinical procedures including IV injections, wound dressing, catheterization, Ryles tube insertion, and nebulization under sterile protocols.',
        highlights: ['IV/IM injection & infusion', 'Sterile wound & suture care', 'Catheter & Ryles tube management'],
      },
      {
        id: 'physiotherapy-home',
        name: 'Physiotherapy at Home',
        tagline: 'Restore Mobility & Independence',
        summary: 'Customized neuro, ortho, and geriatric rehabilitation therapies conducted by licensed physiotherapists to accelerate stroke recovery, relieve joint pain, and restore mobility.',
        highlights: ['Orthopedic rehabilitation', 'Stroke & neurological recovery', 'Geriatric balance & mobility therapy'],
      },
      {
        id: 'dialysis-home',
        name: 'Home Dialysis Support',
        tagline: 'Safe In-Home Dialysis Assistance',
        summary: 'Safe, scheduled dialysis assistance at home to eliminate tiring travel, lower infection risks, and give patients flexibility over their treatment schedule.',
        highlights: ['Zero clinic travel strain', 'Reduced infection exposure', 'Convenient home timing'],
      },
      {
        id: 'palliative-care',
        name: 'Palliative & Supportive Care',
        tagline: 'With You Till Last Breath',
        summary: 'Compassionate medical, physical, and emotional care for patients with advanced illnesses, prioritizing dignified pain relief and family peace of mind.',
        highlights: ['Holistic pain management', 'Emotional & comfort assistance', 'Minimal intervention philosophy'],
      },
    ],
  },
  {
    id: 'wellness',
    title: 'Wellness & Prevention',
    shortLabel: 'Wellness & Prevention',
    badge: 'Proactive Healthcare',
    icon: ShieldPlus,
    accent: 'maroon',
    accentStyles: {
      pillBg: 'bg-maroon/10 text-maroon',
      border: 'border-maroon/20',
      tagline: 'text-maroon',
      btnBg: 'bg-maroon text-cream hover:bg-maroon-dark',
    },
    description: 'Essential doorstep adult vaccines, senior citizen wellness subscriptions, and personalized clinical nutrition counseling for lifelong vitality.',
    services: [
      {
        id: 'adult-vaccination',
        name: 'Vaccination at Home',
        tagline: "Don't Wait. Vaccinate",
        summary: 'Safe doorstep administration of 8+ essential adult vaccines—including Flu, Pneumococcal, Hepatitis B, Tdap, Typhoid, and HPV—ensuring continuous immunity without clinic exposure.',
        highlights: ['8+ adult vaccines at home', 'Cold-chain integrity guaranteed', 'Qualified medical administration'],
      },
      {
        id: 'senior-care-package',
        name: 'Senior Citizen Care Subscription',
        tagline: 'Comprehensive Elder Care',
        summary: 'Dedicated continuous health monitoring for seniors—including periodic doctor checkups, routine bi-weekly vitals screening, medicine delivery coordination, and dedicated emergency contact.',
        highlights: ['Regular doctor home visits', 'Bi-weekly vitals screening', 'Priority 24x7 emergency coordination'],
      },
      {
        id: 'nutrition-counseling',
        name: 'Diet & Clinical Nutrition Counseling',
        tagline: 'Nutrition for Lifelong Health',
        summary: 'Personalized dietary planning and medical nutrition therapy designed by clinical dietitians to manage diabetes, renal health, hypertension, and post-operative recovery.',
        highlights: ['Customized therapeutic meal plans', 'Diabetic & renal dietary management', 'Regular telephonic follow-ups'],
      },
    ],
  },
];

export default function ServicesPage() {
  const { hash } = useLocation();
  const [activeNav, setActiveNav] = useState('doctor-care');
  const primaryPhone = '7003799755';

  // Smooth scroll to target category on load or hash change
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setActiveNav(targetId);
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const scrollToCategory = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Editorial Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/40 border border-ink/10 text-xs font-semibold text-ink uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-maroon" />
            <span>Clinical Services Catalog &bull; [Inspiring Health]</span>
          </div>

          <BrochureHeading as="h1" size="xl" align="center" color="ink">
            OUR SERVICES &bull; CLINICAL CARE
          </BrochureHeading>

          <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed">
            Doctor-headed healthcare under one roof and delivered directly into your home across Brahmapur and South Kolkata.
          </p>

          <div className="pt-2">
            <span className="font-serif italic font-bold text-lg sm:text-xl text-maroon">
              AFFIRMITY &bull; ACCURACY &bull; AFFORDABLE
            </span>
          </div>
        </div>

        {/* Sticky Category Quick Jump Navigation */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-card border border-black/[0.05] overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max px-1">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeNav === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => scrollToCategory(cat.id)}
                  className={`touch-target flex items-center gap-2 px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-teal text-cream shadow-sm'
                      : 'text-ink/80 hover:text-teal hover:bg-cream-50'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{cat.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Detailed Service Category Sections */}
        <div className="space-y-16 sm:space-y-20">
          {serviceCategories.map((cat, catIdx) => {
            const Icon = cat.icon;
            const isMaroon = cat.accent === 'maroon';

            return (
              <section
                key={cat.id}
                id={cat.id}
                className="scroll-mt-36 space-y-8"
              >
                {/* Category Header Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-black/[0.04] flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 ${cat.accentStyles.pillBg}`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-widest px-3 py-0.5 rounded-full ${cat.accentStyles.pillBg}`}>
                          {cat.badge}
                        </span>
                        <span className="text-xs text-ink/50 font-mono">
                          Pillar {String(catIdx + 1).padStart(2, '0')} of 04
                        </span>
                      </div>

                      <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink leading-tight">
                        {cat.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-ink/75 font-sans leading-relaxed max-w-md">
                    {cat.description}
                  </p>
                </div>

                {/* Service Items Grid (No tiny collapsibles - clean, readable, modern cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {cat.services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-black/[0.04] flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        {/* Service Header */}
                        <div className="space-y-1">
                          <h3 className="font-serif font-bold text-lg sm:text-xl text-ink leading-snug">
                            {service.name}
                          </h3>

                          {service.tagline && (
                            <p className={`font-serif italic text-xs sm:text-sm font-semibold ${cat.accentStyles.tagline}`}>
                              &ldquo;{service.tagline}&rdquo;
                            </p>
                          )}
                        </div>

                        {/* Summary Description */}
                        <p className="text-sm text-ink/75 font-sans leading-relaxed">
                          {service.summary}
                        </p>

                        {/* Key Feature Highlight Badges */}
                        {service.highlights && (
                          <ul className="space-y-1.5 pt-2 border-t border-black/[0.04]">
                            {service.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="flex items-center gap-2 text-xs text-ink/80 font-sans">
                                <Check className={`w-3.5 h-3.5 shrink-0 ${isMaroon ? 'text-maroon' : 'text-teal'}`} />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Card Action Row: 1-Tap Booking CTA */}
                      <div className="pt-5 mt-5 border-t border-black/[0.05] flex items-center justify-between gap-2">
                        <a
                          href={`tel:+91${primaryPhone}`}
                          className={`touch-target inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-[0.98] ${cat.accentStyles.btnBg}`}
                          aria-label={`Call to book ${service.name}`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Book / Call</span>
                        </a>

                        <a
                          href={`https://wa.me/91${primaryPhone}?text=${encodeURIComponent(
                            `Hello Aashree Health Point, I would like to inquire about ${service.name}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="touch-target inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cream-50 hover:bg-cream-100 text-ink font-bold text-xs border border-black/[0.06] transition-all"
                          aria-label={`WhatsApp inquiry for ${service.name}`}
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-teal" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Global End-of-Page Booking & Coordination Banner */}
        <section className="bg-teal text-cream rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-lg">
          <TaglineCallout align="center" size="lg" color="cream">
            YOUR HEALTH IS OUR PRIORITY
          </TaglineCallout>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-cream/85 font-sans leading-relaxed">
            Need urgent doctor care, doorstep blood collection, or nursing dispatch? Our medical care desk coordinates visits across Brahmapur and South Kolkata 24&times;7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href={`tel:+91${primaryPhone}`}
              className="touch-target inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-coral text-ink font-bold text-sm hover:bg-coral-light transition-all shadow-sm active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Primary Helpline (70037 99755)</span>
            </a>

            <a
              href={`https://wa.me/91${primaryPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-ink font-bold text-sm hover:bg-cream-50 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-teal" />
              <span>WhatsApp Consultation Desk</span>
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-cream/70 font-sans space-y-1">
            <p>
              <strong className="text-cream">Primary Numbers:</strong> 70037 99755 / 94433 43502 &bull;{' '}
              <strong className="text-cream">Alternate:</strong> 75969 05078 / 78589 74548
            </p>
            <p>
              Email: healthpointaashree@gmail.com &bull; NABL-Certified Diagnostics &bull; Brahmapur, Kolkata 700096
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
