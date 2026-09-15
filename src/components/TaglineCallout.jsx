import React from 'react';

/**
 * TaglineCallout (Modernized for Phase 1)
 * Reserved for subtle, impactful brand accents rather than harsh stamps:
 * - Soft typography (no forced underline or all-caps by default)
 * - Flexible alignment and sizing
 */
export default function TaglineCallout({
  children,
  align = 'center',
  size = 'md',
  color = 'teal',
  underline = false,
  uppercase = false,
  className = '',
  ...props
}) {
  const alignClasses = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end',
  }[align] || 'text-center justify-center';

  const sizeClasses = {
    sm: 'text-xs sm:text-sm',
    md: 'text-sm sm:text-base',
    lg: 'text-base sm:text-lg',
    xl: 'text-lg sm:text-xl font-serif',
  }[size] || 'text-sm sm:text-base';

  const colorClasses = {
    ink: 'text-ink/80',
    teal: 'text-teal font-semibold',
    maroon: 'text-maroon font-semibold',
    coral: 'text-coral-dark font-semibold',
  }[color] || 'text-teal font-semibold';

  const underlineClass = underline
    ? 'underline decoration-1 underline-offset-4 decoration-current/40'
    : '';

  const caseClass = uppercase ? 'uppercase tracking-wider' : '';

  return (
    <div className={`w-full flex pt-2 ${alignClasses}`}>
      <span
        className={`font-sans ${sizeClasses} ${colorClasses} ${underlineClass} ${caseClass} ${className}`}
        {...props}
      >
        {children}
      </span>
    </div>
  );
}
