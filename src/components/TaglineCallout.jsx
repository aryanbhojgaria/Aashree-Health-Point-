import React from 'react';

/**
 * TaglineCallout
 * Replicates the brochure's prominent closing callout at the bottom of each service block.
 * Distinctly styled: larger, bold, uppercase, underlined, and either centered or right-aligned.
 * (e.g., "RECOVER FASTER", "DON'T WAIT. VACCINATE", "So no more queuing and no more waiting.")
 */
export default function TaglineCallout({
  children,
  align = 'center',
  size = 'lg',
  color = 'ink',
  underline = true,
  uppercase = true,
  className = '',
  ...props
}) {
  const alignClasses = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end',
  }[align] || 'text-center justify-center';

  const sizeClasses = {
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl md:text-2xl',
    xl: 'text-xl sm:text-2xl md:text-3xl',
  }[size] || 'text-lg sm:text-xl md:text-2xl';

  const colorClasses = {
    ink: 'text-ink',
    teal: 'text-teal',
    maroon: 'text-maroon',
    coral: 'text-coral-dark',
  }[color] || 'text-ink';

  const underlineClass = underline
    ? 'underline decoration-[1.5px] sm:decoration-2 underline-offset-[6px] decoration-current'
    : '';

  const caseClass = uppercase ? 'uppercase' : '';

  return (
    <div className={`w-full flex pt-3 sm:pt-4 ${alignClasses}`}>
      <span
        className={`font-serif font-bold tracking-wider ${sizeClasses} ${colorClasses} ${underlineClass} ${caseClass} ${className}`}
        {...props}
      >
        {children}
      </span>
    </div>
  );
}
