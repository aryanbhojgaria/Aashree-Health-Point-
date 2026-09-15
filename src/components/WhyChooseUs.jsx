import React from 'react';
import BrochureHeading from './BrochureHeading';
import { 
  UserCheck, 
  Heart, 
  Clock, 
  BadgePercent, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const reasons = [
  {
    icon: UserCheck,
    label: 'Doctor-Led Leadership',
    accent: 'bg-teal/10 text-teal',
  },
  {
    icon: Heart,
    label: 'Patient-Centric Care',
    accent: 'bg-maroon/10 text-maroon',
  },
  {
    icon: Clock,
    label: '24x7 Support',
    accent: 'bg-teal/10 text-teal',
  },
  {
    icon: BadgePercent,
    label: 'Affordable Pricing',
    accent: 'bg-maroon/10 text-maroon',
  },
  {
    icon: Building2,
    label: 'All Services Under One Roof',
    accent: 'bg-teal/10 text-teal',
  },
  {
    icon: ShieldCheck,
    label: 'NABL Certified Lab',
    accent: 'bg-maroon/10 text-maroon',
  },
];

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 12 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF0ED]">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-teal block">
            Quality Assurance
          </span>
          <BrochureHeading as="h2" size="lg" align="center" color="teal">
            Why Choose Us
          </BrochureHeading>
          <p className="text-sm sm:text-base text-ink/70 font-sans">
            Built around your convenience, safety, and continuous medical well-being.
          </p>
        </div>

        {/* Staggered Scroll-Triggered Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream-50 hover:bg-cream-100/70 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card min-h-[110px]"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 ${item.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-sans font-bold text-xs sm:text-sm text-ink leading-snug">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
