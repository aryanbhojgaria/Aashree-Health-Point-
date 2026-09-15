import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * ServiceCard (Modernized for Phase 1)
 * Clean, spacious healthcare startup card:
 * - Icon / small illustration in a soft tinted pill
 * - Short title (clean sans-serif font-bold)
 * - 1-sentence description
 * - NO border
 * - Soft shadow on hover only
 * - Rounded corners (rounded-2xl)
 */
export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  accentColor = 'teal', // 'teal' | 'maroon' | 'coral'
  className = '',
  badge,
  children,
}) {
  const accentStyles = {
    teal: {
      iconBg: 'bg-teal/10 text-teal',
      hoverText: 'group-hover:text-teal',
      badgeBg: 'bg-teal/10 text-teal',
    },
    maroon: {
      iconBg: 'bg-maroon/10 text-maroon',
      hoverText: 'group-hover:text-maroon',
      badgeBg: 'bg-maroon/10 text-maroon',
    },
    coral: {
      iconBg: 'bg-coral/15 text-coral-dark',
      hoverText: 'group-hover:text-coral-dark',
      badgeBg: 'bg-coral/15 text-coral-dark',
    },
  }[accentColor] || {
    iconBg: 'bg-teal/10 text-teal',
    hoverText: 'group-hover:text-teal',
    badgeBg: 'bg-teal/10 text-teal',
  };

  const CardContent = (
    <div
      className={`group relative bg-white rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 flex flex-col justify-between h-full ${className}`}
    >
      <div>
        {/* Header: Icon + optional badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          {Icon && (
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${accentStyles.iconBg}`}>
              <Icon className="w-6 h-6 shrink-0" />
            </div>
          )}

          {badge && (
            <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${accentStyles.badgeBg}`}>
              {badge}
            </span>
          )}

          {href && !badge && (
            <div className="w-8 h-8 rounded-full bg-cream-50 flex items-center justify-center text-ink/40 group-hover:text-ink group-hover:bg-cream-100 transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          )}
        </div>

        {/* Short Title */}
        <h3 className={`font-sans font-bold text-lg sm:text-xl text-ink leading-snug tracking-tight transition-colors ${accentStyles.hoverText}`}>
          {title}
        </h3>

        {/* 1-Sentence Description */}
        {description && (
          <p className="text-sm sm:text-base text-ink/70 font-sans leading-relaxed mt-2">
            {description}
          </p>
        )}

        {children}
      </div>

      {href && (
        <div className="pt-4 mt-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink/80 group-hover:text-teal transition-colors">
            <span>Learn more</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-2xl">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
