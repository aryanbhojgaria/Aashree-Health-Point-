import React, { useRef } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import AnimatedStat from './AnimatedStat';

export default function Hero() {
  const primaryPhone = "7003799755";
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  // Subtle slow parallax for background glow element only
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 24]
  );

  // Staggered child variants (300-450ms, natural ease-out)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.05,
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
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-coral-wash via-cream-50 to-cream-100/50 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Subtle Slow Parallax Background Element Only */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-coral/15 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Modern Medical Cross Emblem */}
        <motion.div variants={itemVariants} className="flex justify-center mb-5">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FAF0ED] shadow-card flex items-center justify-center relative">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
              <div className="absolute w-8 sm:w-9 h-3 bg-teal rounded-sm" />
              <div className="absolute w-3 h-8 sm:h-9 bg-teal rounded-sm" />
              <div className="absolute w-3.5 h-3.5 bg-maroon rounded-full border-2 border-[#FAF0ED]" />
            </div>
          </div>
        </motion.div>

        {/* Brand Wordmark & Taglines */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-teal tracking-tight leading-none">
            Aashree
          </h1>
          <div className="font-sans font-bold text-sm sm:text-base md:text-lg tracking-[0.25em] text-maroon uppercase">
            HEALTH POINT
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium uppercase tracking-widest text-ink/60">
            Affirmity &bull; Accuracy &bull; Affordable
          </div>
          <div className="font-serif italic text-base sm:text-lg text-ink/75 pt-1">
            [Inspiring Health]
          </div>
        </motion.div>

        {/* Condensed One-Line Intro */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-base sm:text-lg text-ink/80 font-sans leading-relaxed mt-5 sm:mt-6"
        >
          Doctor-headed comprehensive clinical care, NABL diagnostics, and personalized home medical services in Brahmapur, Kolkata.
        </motion.p>

        {/* Primary Call / WhatsApp Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto"
        >
          <a
            href={`tel:+91${primaryPhone}`}
            className="touch-target w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-teal hover:bg-teal-dark text-cream font-sans font-bold text-sm sm:text-base rounded-xl shadow-card hover:shadow-card-hover transition-all active:scale-[0.98]"
            aria-label={`Call Aashree Health Point at ${primaryPhone}`}
          >
            <Phone className="w-4 h-4" />
            <span>Call Now ({primaryPhone})</span>
          </a>

          <a
            href={`https://wa.me/91${primaryPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#FAF0ED] hover:bg-[#F5E5E0] text-ink font-sans font-bold text-sm sm:text-base rounded-xl shadow-card hover:shadow-card-hover transition-all active:scale-[0.98]"
            aria-label="WhatsApp Aashree Health Point"
          >
            <MessageCircle className="w-4 h-4 text-teal" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>

        {/* Credibility Stats Strip with Count-Up Animation */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-black/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          <AnimatedStat value="15" suffix="+" label="Specialized Services" />
          <AnimatedStat value="24" suffix="x7" label="Continuous Support" />
          <AnimatedStat value="50" suffix="%" label="Max Lab Savings" />
          <AnimatedStat value="100" suffix="%" label="NABL Accredited Labs" />
        </motion.div>

      </motion.div>
    </section>
  );
}
