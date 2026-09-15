import React from 'react';
import { Target, Compass, Award, Users, CheckCircle2, ShieldCheck, HeartPulse, Clock, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrochureHeading from '../components/BrochureHeading';
import TaglineCallout from '../components/TaglineCallout';

export default function AboutPage() {
  const whyChoosePoints = [
    {
      title: 'Doctor Headed & Medically Supervised',
      description: 'We are the only organization in the region headed by an experienced medical professional, ensuring every protocol adheres to clinical standards.',
      icon: Award,
      accent: 'teal',
    },
    {
      title: 'NABL-Certified Diagnostics',
      description: 'All blood and pathology tests are processed through accredited, state-of-the-art laboratories with rigorous multi-level quality controls.',
      icon: ShieldCheck,
      accent: 'maroon',
    },
    {
      title: 'Complete Doorstep Convenience',
      description: 'From routine blood tests to senior doctor consultations and critical nursing care, we bring world-class healthcare right to your home.',
      icon: HeartPulse,
      accent: 'coral',
    },
    {
      title: 'Affordable & Transparent Pricing',
      description: 'Honoring our founding promise of "Affirmity . Accuracy . Affordable" with up to 50% discount on routine diagnostic tests.',
      icon: CheckCircle2,
      accent: 'teal',
    },
    {
      title: '24x7 Reachable Support',
      description: 'Continuous clinical coordination for elderly, post-operative, and bedridden patients across South Kolkata.',
      icon: Clock,
      accent: 'maroon',
    },
    {
      title: 'Personalized & Compassionate Care',
      description: 'We prioritize the patient as a whole human being, tailoring every home visit and nursing schedule to individual family needs.',
      icon: Users,
      accent: 'coral',
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Editorial Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/40 border border-ink/10 text-xs font-semibold text-ink uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-maroon" />
            <span>Official Brochure Profile &bull; [Inspiring Health]</span>
          </div>

          <BrochureHeading as="h1" size="xl" align="center" color="ink">
            ABOUT US &bull; OUR PURPOSE
          </BrochureHeading>

          <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed">
            Founded with a commitment to bring world-class, humane medical attention into the comfort of homes and neighborhoods across Brahmapur and South Kolkata.
          </p>

          <div className="pt-2">
            <span className="font-serif italic font-bold text-lg sm:text-xl text-maroon">
              AFFIRMITY &bull; ACCURACY &bull; AFFORDABLE
            </span>
          </div>
        </div>

        {/* Mission & Vision Section (Two prominent cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* OUR MISSION */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between border border-black/[0.04]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-maroon px-3 py-1 rounded-full bg-maroon/10">
                  Core Purpose
                </span>
                <div className="w-12 h-12 rounded-2xl bg-maroon/10 text-maroon flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink mb-3 leading-tight">
                OUR MISSION
              </h2>

              <p className="font-serif text-lg sm:text-xl text-maroon font-semibold leading-relaxed">
                &ldquo;To provide high quality and compassionate care to you or your loved ones.&rdquo;
              </p>

              <p className="text-sm text-ink/70 font-sans leading-relaxed mt-4">
                Every clinical interaction is guided by patient dignity, medical precision, and accessible care delivered where recovery happens best: at home.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.06] text-xs font-semibold text-ink/75 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-maroon shrink-0" />
              <span>Patient-first holistic care and continuous clinical monitoring</span>
            </div>
          </div>

          {/* OUR VISION */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between border border-black/[0.04]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal px-3 py-1 rounded-full bg-teal/10">
                  Long-term Vision
                </span>
                <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink mb-3 leading-tight">
                OUR VISION
              </h2>

              <p className="font-serif text-lg sm:text-xl text-teal font-semibold leading-relaxed">
                &ldquo;To provide affordable health care facility to everyone, everywhere.&rdquo;
              </p>

              <p className="text-sm text-ink/70 font-sans leading-relaxed mt-4">
                Breaking financial and physical barriers to modern medicine by offering reliable home diagnostics, doctor visits, and preventative wellness at honest pricing.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.06] text-xs font-semibold text-ink/75 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
              <span>Universal access to early diagnosis and compassionate support</span>
            </div>
          </div>

        </div>

        {/* WHO Definition of Health Callout Panel */}
        <div className="bg-cream-100 rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/[0.06] shadow-sm text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal">
            The Definition of Well-being
          </span>
          <blockquote className="font-serif italic text-lg sm:text-2xl text-ink leading-snug font-medium">
            &ldquo;Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.&rdquo;
          </blockquote>
          <p className="text-xs sm:text-sm font-sans font-bold text-maroon uppercase tracking-wider">
            &ndash; World Health Organization (WHO)
          </p>
        </div>

        {/* Full Brochure Narrative Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card border border-black/[0.04] space-y-6">
          <div className="border-b border-black/[0.06] pb-5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal block mb-1">
              Who We Are
            </span>
            <BrochureHeading as="h2" size="lg" align="left" color="teal">
              Comprehensive Health Care Under One Roof
            </BrochureHeading>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-ink/85 font-sans leading-relaxed">
            <p>
              <strong className="font-semibold text-ink">Aashree Health Point</strong> was built to provide comprehensive health care under one roof as per your or your loved one’s comfort. We are the only organization which is being headed by an experienced medical professional.
            </p>
            <p>
              We also focus on preventive care along with early detection and prompt treatment. We provide compassionate care with advanced healthcare solutions.
            </p>
            <p>
              At Aashree Health Point, with modern diagnostic facilities, skilled clinicians and skilled staff, we work together to ensure that each patient receives personalized attention and quality care.
            </p>
          </div>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-coral-subtle border border-coral/20 flex items-start gap-3">
              <Award className="w-5 h-5 text-teal shrink-0 mt-0.5" />
              <div>
                <strong className="block font-serif text-ink text-base">Doctor-Headed Oversight</strong>
                <p className="text-xs sm:text-sm text-ink/75 font-sans mt-0.5">
                  Direct clinical guidance and governance by seasoned medical practitioners.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-coral-subtle border border-coral/20 flex items-start gap-3">
              <Users className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
              <div>
                <strong className="block font-serif text-ink text-base">Personalized Attention</strong>
                <p className="text-xs sm:text-sm text-ink/75 font-sans mt-0.5">
                  Tailored doctor home visits, pathology collections, and specialized elder care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Full Detail Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-maroon">
              Brochure Pillars
            </span>
            <BrochureHeading as="h2" size="lg" align="center" color="ink">
              WHY CHOOSE AASHREE HEALTH POINT
            </BrochureHeading>
            <p className="text-sm text-ink/80 font-sans">
              Reliable, accredited medical services designed around patient comfort and scientific integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-black/[0.04] flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-coral-subtle flex items-center justify-center text-teal">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-ink leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink/75 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-teal text-cream rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-lg">
          <TaglineCallout align="center" size="lg" color="cream">
            YOUR HEALTH IS OUR PRIORITY
          </TaglineCallout>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-cream/85 font-sans leading-relaxed">
            Reach out today to consult with our physicians, schedule a certified blood sample collection, or arrange home nursing support across South Kolkata.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+917003799755"
              className="touch-target inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-coral text-ink font-bold text-sm hover:bg-coral-light transition-all shadow-sm active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 70037 99755</span>
            </a>

            <a
              href="https://wa.me/917003799755"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-ink font-bold text-sm hover:bg-cream-50 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-teal" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              to="/services"
              className="touch-target inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-cream font-bold text-sm transition-all"
            >
              <span>Explore All Services &rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
