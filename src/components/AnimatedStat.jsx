import React, { useEffect, useState, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * AnimatedStat
 * Counts up smoothly from 0 to value when scrolled into view.
 * Respects prefers-reduced-motion (displays final value immediately).
 */
export default function AnimatedStat({
  value,
  prefix = '',
  suffix = '',
  label,
  duration = 1.2,
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const shouldReduceMotion = useReducedMotion();

  // Extract integer value from string/number
  const numericTarget = parseInt(String(value).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(numericTarget);
      return;
    }

    if (!isInView) return;

    let startTimestamp = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Natural ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeOut * numericTarget));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(numericTarget);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericTarget, duration, shouldReduceMotion]);

  return (
    <div ref={ref} className="text-center p-3 sm:p-4">
      <div className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-teal tracking-tight">
        {prefix}
        {shouldReduceMotion ? numericTarget : displayValue}
        {suffix}
      </div>
      {label && (
        <div className="font-sans font-medium text-xs sm:text-sm text-ink/75 mt-1 leading-snug">
          {label}
        </div>
      )}
    </div>
  );
}
