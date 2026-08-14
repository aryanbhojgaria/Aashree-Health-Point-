import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqItems = [
  {
    question: "What types of lab tests do you offer?",
    answer: "We offer a comprehensive range of NABL-certified diagnostic tests including Complete Blood Count (CBC), Thyroid Profile, Lipid Profile, HbA1c, Liver & Kidney Function Tests, Urine & Stool Routine, Blood Sugar (Fasting/PP), Vitamin D, B12, and many more. Contact us for the full test menu and pricing."
  },
  {
    question: "How does home blood sample collection work?",
    answer: "Simply call us or send a WhatsApp message to schedule a convenient time. Our certified phlebotomist will visit your home with sterile equipment, collect the required samples, and transport them safely to our NABL-certified lab. Reports are delivered digitally within the standard turnaround time."
  },
  {
    question: "How long does it take to get test reports?",
    answer: "Most routine blood test reports are ready within 12–24 hours. Specialized tests may take 2–3 days. We send reports digitally via WhatsApp or email as soon as they're ready, so you don't need to visit the clinic to collect them."
  },
  {
    question: "Do you provide home doctor visits?",
    answer: "Yes, we offer scheduled home doctor visits for elderly patients, those with mobility challenges, and post-operative or bedridden patients. Call our clinic to arrange a convenient appointment. Home visit availability depends on the doctor's schedule."
  },
  {
    question: "What are the clinic timings?",
    answer: "We are open Monday to Saturday from 9:00 AM to 1:00 PM and 5:00 PM to 9:00 PM. On Sundays, we operate from 9:00 AM to 1:00 PM (evening closed). For home sample collection, timings can be arranged upon request."
  },
];

function FaqItem({ item, isOpen, onToggle, index, isVisible }) {
  return (
    <div 
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen 
          ? 'bg-cream border-primary/30 shadow-warm' 
          : 'bg-cream-50 border-ink-border/60 hover:border-primary/20 hover:shadow-warm-sm'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 60}ms` : '0ms',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 500ms ease-out ${isVisible ? index * 60 : 0}ms, transform 500ms ease-out ${isVisible ? index * 60 : 0}ms, background-color 300ms, border-color 300ms, box-shadow 300ms`
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl group"
        aria-expanded={isOpen}
      >
        <span className={`text-fluid-sm sm:text-fluid-base font-semibold leading-snug transition-colors duration-200 ${
          isOpen ? 'text-primary-dark' : 'text-ink group-hover:text-primary-dark'
        }`}>
          {item.question}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-primary text-white rotate-180' 
            : 'bg-primary-subtle text-primary group-hover:bg-primary group-hover:text-white'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      {/* Expandable answer panel */}
      <div 
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ 
          maxHeight: isOpen ? '300px' : '0px',
          opacity: isOpen ? 1 : 0 
        }}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
          <div className="pl-0 sm:pl-1 border-l-2 border-primary/20 ml-0">
            <p className="text-fluid-sm text-ink-light leading-relaxed font-sans pl-4">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="relative bg-[#ECEFEA] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-ink-border/50 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-secondary/12 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          className={`text-center space-y-3 mb-10 sm:mb-14 transition-all duration-700 ease-out ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 motion-reduce:translate-y-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle text-primary-dark text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-warm-sm">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-fluid-2xl sm:text-fluid-3xl lg:text-fluid-4xl font-serif font-bold text-ink leading-tight">
            Frequently Asked <span className="text-primary-dark">Questions</span>
          </h2>
          <p className="text-fluid-sm sm:text-fluid-base text-ink-light leading-relaxed font-sans max-w-xl mx-auto">
            Quick answers to the most common queries about our clinic, lab services, and home care.
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              isVisible={isSectionInView}
            />
          ))}
        </div>

        {/* Bottom CTA prompt */}
        <div 
          className={`mt-10 sm:mt-12 text-center transition-all duration-700 ease-out ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 motion-reduce:translate-y-0'
          }`}
          style={{ transitionDelay: isSectionInView ? '350ms' : '0ms' }}
        >
          <p className="text-sm text-ink-muted mb-3 font-sans">
            Still have questions? We're happy to help.
          </p>
          <a
            href="https://wa.me/919443343502"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-warm hover:bg-primary-dark hover:scale-[1.03] hover:shadow-xl active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-4.5 h-4.5" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
