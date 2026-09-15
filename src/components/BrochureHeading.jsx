import React from 'react';

/**
 * BrochureHeading
 * Replicates the official brochure's confident serif, uppercase,
 * bold, underlined section header treatment (e.g., "DOCTOR CONSULTATION AT HOME").
 */
export default function BrochureHeading({
  children,
  as: Component = 'h2',
  size = 'md',
  align = 'center',
  color = 'ink',
  underline = true,
  className = '',
  ...props
}) {
  const sizeClasses = {
    sm: 'text-base sm:text-lg tracking-wide',
    md: 'text-lg sm:text-xl md:text-2xl tracking-wide',
    lg: 'text-xl sm:text-2xl md:text-3xl tracking-wide',
    xl: 'text-2xl sm:text-3xl md:text-4xl tracking-wider',
  }[size] || 'text-lg sm:text-xl md:text-2xl tracking-wide';

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align] || 'text-center';

  const colorClasses = {
    ink: 'text-ink',
    teal: 'text-teal',
    maroon: 'text-maroon',
    coral: 'text-coral-dark',
  }[color] || 'text-ink';

  const underlineClass = underline
    ? 'underline decoration-[1.5px] sm:decoration-2 underline-offset-[5px] decoration-current'
    : '';

  return (
    <Component
      className={`font-serif font-bold uppercase transition-colors ${sizeClasses} ${alignClasses} ${colorClasses} ${underlineClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
