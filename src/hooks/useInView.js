import { useState, useEffect, useRef } from 'react';

/**
 * Lightweight, performant IntersectionObserver hook for scroll-triggered entrance animations.
 * Automatically checks for prefers-reduced-motion and falls back gracefully.
 *
 * @param {Object} options IntersectionObserverInit options
 * @param {boolean} once Whether to trigger only once
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }, once = true) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, show immediately without waiting for scroll
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) {
          observer.unobserve(element);
        }
      } else if (!once) {
        setIsVisible(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, once]);

  return [ref, isVisible];
}
