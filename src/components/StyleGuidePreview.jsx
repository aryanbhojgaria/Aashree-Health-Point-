import React, { useState } from 'react';
import BrochureHeading from './BrochureHeading';
import BrochurePanel from './BrochurePanel';
import TaglineCallout from './TaglineCallout';
import { Palette, Type, LayoutGrid, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';

export default function StyleGuidePreview({ onSwitchToSite }) {
  const [copiedHex, setCopiedHex] = useState(null);

  const copyToClipboard = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const colors = [
    {
      name: 'Coral / Terracotta',
      hex: '#D98878',
      tailwind: 'bg-coral',
      textSample: 'text-ink',
      role: 'Primary brand & full-page background color in brochure',
      usage: 'Page backgrounds, brand hero framing, warm primary canvas',
      isLight: true,
    },
    {
      name: 'Deep Teal',
      hex: '#1A4D4D',
      tailwind: 'bg-teal',
      textSample: 'text-cream',
      role: 'Logo wordmark ("Aashree"), primary headings, key anchors',
      usage: 'Logos, primary headings, navigation accents, active states',
      isLight: false,
    },
    {
      name: 'Maroon / Wine',
      hex: '#7A1F3D',
      tailwind: 'bg-maroon',
      textSample: 'text-cream',
      role: 'Logo accent & "HEALTH POINT" wordmark',
      usage: 'Secondary brand marks, badges, critical alerts, CTAs',
      isLight: false,
    },
    {
      name: 'Cream / Off-White',
      hex: '#F0E4D0',
      tailwind: 'bg-cream',
      textSample: 'text-ink',
      role: 'Card/panel background sitting on the coral page canvas',
      usage: 'Service card panels, logo badge backdrops, content containers',
      isLight: true,
    },
    {
      name: 'Dark Ink',
      hex: '#2B1810',
      tailwind: 'bg-ink',
      textSample: 'text-cream',
      role: 'Near-black brown text for body copy and thin card borders',
      usage: 'Body copy on cream panels, 1.5px structural borders, subtitles',
      isLight: false,
    },
  ];

  const taglines = [
    'So no more queuing and no more waiting.',
    'STAY HOME STAY SAFE',
    'RECREATING HOPE',
    'DELIVERING HOPE',
    'RECOVER FASTER',
    'DON’T WAIT. VACCINATE',
    'WITH YOU TILL LAST BREATH',
    'CONVENIENT AND EFFORTLESS',
    'QUICK AND ACUURATE',
    'GET TESTED BE SURE',
    'EMBRACING LIFE',
    'REDEFINING HEALTH CARE',
    'CHOOSE HEALTH CHOOSE HAPPINESS',
    'YOUR HEALTH IS OUR PRIORITY',
  ];

  return (
    <div className="min-h-screen bg-coral text-ink font-sans selection:bg-teal selection:text-cream">
      {/* Top Banner with mode switcher */}
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-ink/20 px-4 sm:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal text-cream text-xs font-serif font-bold">
              AH
            </span>
            <div>
              <h1 className="font-serif font-bold text-lg text-ink leading-tight">
                Brochure Design System
              </h1>
              <p className="text-xs text-ink/70">
                Official Company Brochure Tokens &amp; Components Preview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs bg-teal/10 text-teal px-2.5 py-1 rounded border border-teal/20 font-medium">
              Sanity-Check Mode
            </span>
            {onSwitchToSite && (
              <button
                type="button"
                onClick={onSwitchToSite}
                className="text-xs bg-ink text-cream hover:bg-teal px-3 py-1.5 rounded transition-colors font-medium cursor-pointer"
              >
                View Existing Site Flow
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Preview Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* Intro Card */}
        <section className="bg-cream border-[1.5px] border-ink p-6 sm:p-8 shadow-brochure">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-maroon font-bold">
                <Sparkles className="w-4 h-4" />
                Color &amp; Typography Overhaul
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                Company Brochure Design Tokens
              </h2>
              <p className="text-ink/80 text-sm sm:text-base leading-relaxed">
                The previous sage-green palette has been completely replaced with the official brochure tokens extracted from the PDF: Coral/Terracotta (<code className="bg-coral/30 px-1 py-0.5 rounded text-ink font-semibold">#D98878</code>) background canvas, Deep Teal (<code className="bg-teal/15 px-1 py-0.5 rounded text-teal font-semibold">#1A4D4D</code>), Maroon (<code className="bg-maroon/15 px-1 py-0.5 rounded text-maroon font-semibold">#7A1F3D</code>), Cream panels (<code className="bg-ink/10 px-1 py-0.5 rounded text-ink font-semibold">#F0E4D0</code>), and Dark Ink (<code className="bg-ink/10 px-1 py-0.5 rounded text-ink font-semibold">#2B1810</code>).
              </p>
            </div>

            {/* Authentic Brand Lockup Simulation from Brochure Page 1 */}
            <div className="bg-cream border-[1.5px] border-ink p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-sm w-full md:w-auto min-w-[240px]">
              <div className="w-12 h-12 flex items-center justify-center relative mb-2">
                <div className="absolute inset-0 bg-teal/20 rounded-full scale-110" />
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute w-7 h-2.5 bg-teal rounded-sm" />
                  <div className="absolute w-2.5 h-7 bg-teal rounded-sm" />
                  <div className="absolute w-3 h-3 bg-maroon rounded-full border border-cream" />
                </div>
              </div>
              <span className="font-serif font-black text-2xl tracking-tight text-teal">
                Aashree
              </span>
              <span className="font-sans font-bold text-xs tracking-[0.25em] text-maroon mt-0.5">
                HEALTH POINT
              </span>
              <span className="text-[9px] tracking-widest text-ink/70 font-semibold uppercase mt-1">
                AFFIRMITY . ACCURACY . AFFORDABLE
              </span>
              <span className="text-[11px] font-serif italic text-ink/80 mt-2">
                [Inspiring Health]
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 1: COLOR SWATCHES */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-ink" />
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink">
              1. Color Swatches (Brochure Exact)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {colors.map((color) => (
              <div
                key={color.hex}
                className="bg-cream border-[1.5px] border-ink p-4 shadow-brochure flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-full h-24 rounded-none border border-ink/40 flex items-center justify-center p-3 relative transition-transform hover:scale-[1.02]`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className={`font-mono text-xs font-bold ${color.textSample} px-2 py-1 bg-black/20 rounded backdrop-blur-sm`}>
                      {color.hex}
                    </span>
                  </div>

                  <div className="mt-3">
                    <h4 className="font-serif font-bold text-base text-ink">
                      {color.name}
                    </h4>
                    <span className="text-xs font-mono text-ink/70 block mt-0.5">
                      {color.tailwind}
                    </span>
                    <p className="text-xs text-ink/80 mt-2 leading-snug">
                      {color.role}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-ink/15 flex items-center justify-between">
                  <span className="text-[11px] text-ink/60 italic font-sans">
                    {color.usage.split(',')[0]}
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(color.hex)}
                    className="p-1 text-ink/70 hover:text-teal transition-colors cursor-pointer"
                    title="Copy hex code"
                  >
                    {copiedHex === color.hex ? (
                      <Check className="w-4 h-4 text-teal" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: TYPOGRAPHY & HEADINGS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-ink" />
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink">
              2. Typography &amp; Brochure Headings
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Heading Treatments */}
            <div className="bg-cream border-[1.5px] border-ink p-6 shadow-brochure space-y-6">
              <div className="border-b border-ink/15 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-maroon">
                  Brochure Heading Styles (Serif + Bold + Underlined)
                </span>
                <p className="text-xs text-ink/70 mt-1">
                  Replicating the underlined caps-style headers across brochure pages
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono text-ink/60 uppercase block mb-1">
                    Centered (Primary Service Title - Size Large):
                  </span>
                  <BrochureHeading as="h2" size="lg" align="center" color="ink">
                    DOCTOR CONSULTATION AT HOME
                  </BrochureHeading>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-ink/60 uppercase block mb-1">
                    Centered (Standard Service Title - Size Medium):
                  </span>
                  <BrochureHeading as="h3" size="md" align="center" color="ink">
                    ONLINE DOCTOR CONSULTATION
                  </BrochureHeading>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-ink/60 uppercase block mb-1">
                    Left Aligned (Informational Sections - Deep Teal):
                  </span>
                  <BrochureHeading as="h3" size="md" align="left" color="teal">
                    ABOUT US
                  </BrochureHeading>
                </div>

                <div className="flex flex-wrap gap-6 pt-2">
                  <div>
                    <span className="text-[11px] font-mono text-ink/60 uppercase block mb-1">
                      Our Mission (Maroon):
                    </span>
                    <BrochureHeading as="h4" size="sm" align="left" color="maroon">
                      OUR MISSION
                    </BrochureHeading>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-ink/60 uppercase block mb-1">
                      Our Vision (Deep Teal):
                    </span>
                    <BrochureHeading as="h4" size="sm" align="left" color="teal">
                      OUR VISION
                    </BrochureHeading>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Scales */}
            <div className="bg-cream border-[1.5px] border-ink p-6 shadow-brochure space-y-6">
              <div className="border-b border-ink/15 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal">
                  Font Family Stack &amp; Readability
                </span>
                <p className="text-xs text-ink/70 mt-1">
                  Playfair Display (Editorial Serif) paired with Plus Jakarta Sans (Readable Body)
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-serif font-bold text-ink block">
                    Playfair Display (Serif Headings)
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-ink leading-snug mt-1">
                    Compassionate care with advanced healthcare solutions under one roof.
                  </p>
                </div>

                <div className="pt-2 border-t border-ink/10">
                  <span className="text-xs font-sans font-bold text-ink block">
                    Plus Jakarta Sans (Body Copy - Regular &amp; Medium)
                  </span>
                  <p className="font-sans text-sm text-ink/90 leading-relaxed mt-1">
                    Aashree Health Point was built to provide comprehensive health care under one roof as per your or your loved one’s comfort. We are the only organization headed by an experienced medical professional with modern diagnostic facilities and skilled clinicians.
                  </p>
                </div>

                <div className="pt-2 border-t border-ink/10">
                  <span className="text-xs font-sans font-bold text-ink block">
                    List &amp; Feature Format
                  </span>
                  <ul className="text-xs font-sans text-ink/80 space-y-1 mt-1.5 list-disc list-inside">
                    <li>Accurate and reliable NABL accredited reports</li>
                    <li>24 x 7 availability of trained nurses for home care</li>
                    <li>Specialized physician home visits and tele-consultations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: REUSABLE BROCHURE PANEL / SERVICE CARD */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-ink" />
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink">
              3. Reusable BrochurePanel / ServiceCard Components
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-ink/85">
            These bordered panels sit on top of the coral page canvas, exactly mimicking the layout and styling from pages 2–9 of the brochure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example 1: Doctor Consultation */}
            <BrochurePanel
              title="DOCTOR CONSULTATION AT HOME"
              tagline="So no more queuing and no more waiting."
              taglineAlign="center"
              taglineSize="lg"
            >
              <p>
                Comprehensive care with our Physicians for all your health needs. Physician visits at your home are very vital particularly for the elderly, individuals with morbidity, or those who are recovering from surgery.
              </p>
              <p>
                To diagnose and treat a variety of common medical disorders, Physicians are essential. As the patient’s initial point of contact, they manage chronic conditions, provide preventive care, and promptly refer patients when specialized intervention is needed.
              </p>
              <p className="font-medium text-ink">
                Contact today for a planned visit of our Physician at your doorstep.
              </p>
            </BrochurePanel>

            {/* Example 2: Physiotherapy */}
            <BrochurePanel
              title="PHYSIOTHERAPY AND REHABILITATION AT HOME"
              tagline="RECOVER FASTER"
              taglineAlign="center"
              taglineSize="xl"
            >
              <p>
                Our trained physiotherapists at home provide expert care to enhance the quality of life. In collaboration with our doctors and nurses, they provide speedy recovery and address challenges from illness, injury, disability, or aging in the comfort of your home.
              </p>
              <p>
                Our physiotherapists play a vital role in improving mobility, managing pain, and post-surgical speedy recovery for chronic conditions.
              </p>
              <p>
                They help in reducing the progression of disease, restoring strength, and preventing further complications resulting in enhancing overall quality of life.
              </p>
            </BrochurePanel>

            {/* Example 3: Adult Vaccination */}
            <BrochurePanel
              title="ADULT VACCINATION AT HOME"
              tagline="DON'T WAIT. VACCINATE"
              taglineAlign="center"
              taglineSize="xl"
            >
              <p>
                With increasing incidence of communicable diseases, adult vaccination plays a vital role in maintaining quality of life and declining morbidity, mortality, and hospital admission.
              </p>
              <div>
                <p className="font-bold text-ink mb-1.5">Our Vaccines Include:</p>
                <div className="grid grid-cols-2 gap-1 text-xs sm:text-sm">
                  <span>1) Influenza Vaccine</span>
                  <span>2) Pneumococcal Vaccine</span>
                  <span>3) Tetanus Toxoid</span>
                  <span>4) Rabies</span>
                  <span>5) Meningococcal</span>
                  <span>6) Shingles Vaccine</span>
                  <span>7) HPV Vaccine</span>
                  <span>8) Typhoid Vaccine</span>
                </div>
              </div>
            </BrochurePanel>

            {/* Example 4: Senior Citizen Subscription (Right aligned tagline demo) */}
            <BrochurePanel
              title="SENIOR CITIZEN HEALTH CARE SUBSCRIPTION"
              tagline="RECREATING HOPE"
              taglineAlign="center"
              taglineSize="xl"
            >
              <p>
                Our Elder Care subscription is a customized healthcare and support plan designed specifically for elderly individuals to ensure their wellbeing and comfort care while living independently at home.
              </p>
              <div className="space-y-2 text-xs sm:text-sm pt-1">
                <div>
                  <span className="font-bold text-teal block underline decoration-1 underline-offset-2">
                    1) Professional Medical Support
                  </span>
                  <p className="text-ink/80 mt-0.5">
                    Regular health monitoring (vitals, medical management), chronic care for diabetes and hypertension, and 24x7 doctor access.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-teal block underline decoration-1 underline-offset-2">
                    2) Emergency Support
                  </span>
                  <p className="text-ink/80 mt-0.5">
                    24x7 availability of trained nurses to handle emergencies with hospital and ambulance coordination.
                  </p>
                </div>
              </div>
            </BrochurePanel>
          </div>
        </section>

        {/* SECTION 4: TAGLINE CALLOUT GALLERY */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-ink" />
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink">
              4. Brochure Tagline Callout Showcase
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-ink/85">
            Every major service block in the brochure closes with an underlined, capitalized tagline statement:
          </p>

          <div className="bg-cream border-[1.5px] border-ink p-6 sm:p-8 shadow-brochure">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              {taglines.map((tagline, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b border-ink/15 pb-4 last:border-b-0"
                >
                  <span className="text-xs font-mono text-ink/60 mr-4">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 text-center">
                    <TaglineCallout
                      align="center"
                      size={tagline.length > 25 ? 'md' : 'lg'}
                      color={idx % 3 === 1 ? 'teal' : idx % 3 === 2 ? 'maroon' : 'ink'}
                    >
                      {tagline}
                    </TaglineCallout>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Sanity-Check Checklist */}
        <section className="bg-cream border-[1.5px] border-ink p-6 shadow-brochure">
          <h4 className="font-serif font-bold text-lg text-ink mb-3">
            Sanity-Check Verification Checklist
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-ink/90">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
              <span>Full page canvas matches Coral/Terracotta #D98878</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
              <span>Deep Teal #1A4D4D &amp; Maroon #7A1F3D registered as primary tokens</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
              <span>Cream #F0E4D0 panels sit cleanly on coral background</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
              <span>Near-black brown ink #2B1810 used for body text &amp; borders</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
              <span>Playfair Display serif loaded for confident brochure headings</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
              <span>Reusable BrochureHeading, TaglineCallout &amp; BrochurePanel components ready</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-xs text-ink/75 border-t border-ink/20">
        Aashree Health Point &bull; Affirmity. Accuracy. Affordable &bull; Style Guide Preview
      </footer>
    </div>
  );
}
