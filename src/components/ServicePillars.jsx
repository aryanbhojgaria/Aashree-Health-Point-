import React from 'react';
import BrochureHeading from './BrochureHeading';
import BrochurePanel from './BrochurePanel';
import TaglineCallout from './TaglineCallout';
import { Stethoscope, Activity, HeartHandshake, ShieldPlus, ArrowRight } from 'lucide-react';

const pillars = [
  {
    id: 'doctor-care',
    title: 'DOCTOR CARE',
    icon: Stethoscope,
    iconColor: 'text-teal',
    summary:
      'Comprehensive in-home physician visits and timely online tele-consultations for chronic condition management, acute illnesses, and specialized referrals in the comfort of your home.',
    features: ['Home Physician Visits', 'Online Tele-Consultation', 'No Clinic Waiting or Queuing'],
    tagline: 'So no more queuing and no more waiting.',
    link: '/services#doctor-care',
  },
  {
    id: 'diagnostics',
    title: 'DIAGNOSTICS & LAB',
    icon: Activity,
    iconColor: 'text-maroon',
    summary:
      'High-quality, reliable tests delivered with free home sample collection. NABL accredited blood pathology, portable X-rays, ECG, and ultrasound at up to 50% discount.',
    features: ['Free Home Sample Collection', 'NABL Accredited Reports', 'Portable X-Ray, ECG & Ultrasound'],
    tagline: 'CONVENIENT AND EFFORTLESS',
    link: '/services#diagnostics',
  },
  {
    id: 'home-nursing',
    title: 'HOME NURSING & SPECIALIZED CARE',
    icon: HeartHandshake,
    iconColor: 'text-teal',
    summary:
      'Trained professional nurses available for 12 or 24 hours, clinical procedures (dressings, IV infusions, catheters), physiotherapy, home dialysis, and compassionate palliative support.',
    features: ['12h / 24h Trained Nurses', 'Doctor & Nurse Home Procedures', 'Dialysis & Palliative Care'],
    tagline: 'DELIVERING HOPE',
    link: '/services#home-nursing',
  },
  {
    id: 'wellness',
    title: 'WELLNESS & PREVENTION',
    icon: ShieldPlus,
    iconColor: 'text-maroon',
    summary:
      'Proactive care for families and housing societies with residential complex doctors, adult immunization drives, comprehensive health checkup packages, and senior citizen subscriptions.',
    features: ['Senior Citizen Subscriptions', 'Adult Vaccination at Home', 'Residential Complex Physician'],
    tagline: 'REDEFINING HEALTH CARE',
    link: '/services#wellness',
  },
];

export default function ServicePillars() {
  return (
    <section id="services" className="relative bg-coral py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t-[1.5px] border-ink/20">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <BrochureHeading as="h2" size="lg" align="center" color="ink">
            OUR SERVICE CATEGORIES
          </BrochureHeading>
          <p className="text-sm sm:text-base text-ink/90 font-sans leading-relaxed">
            From routine checkups to specialized home medical care, explore our four core pillars designed to eliminate the stress of clinic visits and long hospital commutes.
          </p>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <BrochurePanel
                key={pillar.id}
                title={pillar.title}
                titleSize="md"
                titleAlign="center"
                tagline={pillar.tagline}
                taglineSize="md"
                className="flex flex-col justify-between h-full"
              >
                {/* Pillar Header with Icon */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="p-2 bg-coral/20 border border-ink/20">
                    <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                  </div>
                </div>

                {/* 1-2 sentence summary */}
                <p className="text-sm sm:text-base text-ink/90 leading-relaxed text-center sm:text-left">
                  {pillar.summary}
                </p>

                {/* Highlights List */}
                <ul className="mt-3 pt-3 border-t border-ink/10 space-y-1.5 text-xs sm:text-sm text-ink/80">
                  {pillar.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-maroon rounded-full shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More link pointing to Services anchor */}
                <div className="pt-4 mt-2">
                  <a
                    href={pillar.link}
                    className="touch-target inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-teal hover:bg-teal-dark text-cream font-serif font-bold text-xs sm:text-sm uppercase tracking-wider border-[1.5px] border-teal shadow-sm transition-colors group"
                  >
                    <span>Learn More in Services</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </BrochurePanel>
            );
          })}
        </div>

        {/* Subtle note directing to full services page */}
        <div className="text-center pt-2">
          <p className="text-xs text-ink/75 font-sans">
            Full diagnostic lists, vaccine schedules, procedure menus, and package pricing available in our comprehensive services directory.
          </p>
        </div>

      </div>
    </section>
  );
}
