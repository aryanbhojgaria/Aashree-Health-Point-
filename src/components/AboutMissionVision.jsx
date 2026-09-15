import React from 'react';
import BrochureHeading from './BrochureHeading';
import TaglineCallout from './TaglineCallout';
import { Target, Compass, Award, Users, CheckCircle2 } from 'lucide-react';

export default function AboutMissionVision() {
  return (
    <section id="about" className="relative bg-coral py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center">
          <BrochureHeading as="h2" size="lg" align="center" color="ink">
            ABOUT US &bull; OUR PURPOSE
          </BrochureHeading>
          <p className="text-xs sm:text-sm text-ink/80 mt-2 max-w-xl mx-auto font-sans">
            Founded with a commitment to bring world-class, humane medical attention into the hearts of homes and communities.
          </p>
        </div>

        {/* Tri-Fold Brochure Layout (2 / 3 Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* COLUMN 1 (5 cols): Mission & Vision Cards (Tri-Fold Left Flap) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* OUR MISSION */}
            <div className="bg-cream border-[1.5px] border-ink p-6 sm:p-7 shadow-brochure flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <BrochureHeading as="h3" size="sm" align="left" color="maroon">
                    OUR MISSION
                  </BrochureHeading>
                  <Target className="w-5 h-5 text-maroon shrink-0" />
                </div>
                <p className="font-serif text-lg sm:text-xl text-ink font-bold leading-snug">
                  To provide high quality and compassionate care to you or your loved ones.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-ink/15 text-xs text-ink/75 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon" />
                <span>Patient-first holistic care and continuous monitoring</span>
              </div>
            </div>

            {/* OUR VISION */}
            <div className="bg-cream border-[1.5px] border-ink p-6 sm:p-7 shadow-brochure flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <BrochureHeading as="h3" size="sm" align="left" color="teal">
                    OUR VISION
                  </BrochureHeading>
                  <Compass className="w-5 h-5 text-teal shrink-0" />
                </div>
                <p className="font-serif text-lg sm:text-xl text-ink font-bold leading-snug">
                  To provide affordable health care facility to everyone, everywhere.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-ink/15 text-xs text-ink/75 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Universal access to early diagnosis and clinical support</span>
              </div>
            </div>

            {/* Inspiring Health Tagline Box */}
            <div className="bg-cream border-[1.5px] border-ink p-4 text-center shadow-brochure">
              <span className="font-serif italic font-bold text-xl sm:text-2xl text-ink">
                [Inspiring Health]
              </span>
            </div>

          </div>

          {/* COLUMN 2 (7 cols): Official Brochure "ABOUT US" Text Panel */}
          <div className="lg:col-span-7 bg-cream border-[1.5px] border-ink p-6 sm:p-8 md:p-10 shadow-brochure flex flex-col justify-between">
            <div>
              <div className="border-b border-ink/15 pb-4 mb-5">
                <BrochureHeading as="h3" size="md" align="left" color="teal">
                  ABOUT US
                </BrochureHeading>
                <span className="text-xs font-sans text-ink/70 font-semibold block mt-1">
                  Aashree Health Point &bull; Comprehensive Health Care Under One Roof
                </span>
              </div>

              {/* Exact Brochure Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-ink/90 font-sans leading-relaxed">
                <p>
                  <strong className="font-semibold text-ink">Aashree Health Point</strong> was built to provide comprehensive health care under one roof as per your or your loved one’s comfort. We are the only organization which is being headed by an experienced medical professional.
                </p>
                <p>
                  We also focus on preventive care along with early detection and prompt treatment.
                </p>
                <p>
                  We provide compassionate care with advanced healthcare solutions.
                </p>
                <p>
                  At Aashree Health Point, with modern diagnostic facilities, skilled clinicians and skilled staff, we work together to ensure that each patient receives personalized attention and quality care.
                </p>
              </div>

              {/* Key takeaways callout strip */}
              <div className="mt-6 pt-5 border-t border-ink/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-ink">
                <div className="flex items-start gap-2 bg-coral/15 p-2.5 border border-ink/20">
                  <Award className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                  <span><strong>Doctor Headed:</strong> Direct oversight by senior medical physician</span>
                </div>
                <div className="flex items-start gap-2 bg-coral/15 p-2.5 border border-ink/20">
                  <Users className="w-4 h-4 text-maroon mt-0.5 shrink-0" />
                  <span><strong>Personalized:</strong> Tailored home visits, lab testing, and nursing</span>
                </div>
              </div>
            </div>

            {/* Bottom Tagline Callout */}
            <footer className="mt-6 pt-3 border-t border-ink/15">
              <TaglineCallout align="center" size="lg" color="ink">
                YOUR HEALTH IS OUR PRIORITY
              </TaglineCallout>
            </footer>
          </div>

        </div>

      </div>
    </section>
  );
}
