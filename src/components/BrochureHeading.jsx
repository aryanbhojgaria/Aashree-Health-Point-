import React from 'react';

/**
 * BrochureHeading (Modernized for Phase 1)
 * Elegant, confident serif heading with optional subtle underline.
 * Clean, spacious modern healthcare feel without forced clutter.
 */
export default function BrochureHeading({
  children,
  as: Component = 'h2',
  size = 'md',
  align = 'center',
  color = 'ink',
  underline = false,
  uppercase = false,
  className = '',
  ...props
}) {
  const sizeClasses = {
    sm: 'text-lg sm:text-xl tracking-normal',
    md: 'text-xl sm:text-2xl md:text-3xl tracking-tight',
    lg: 'text-2xl sm:text-3xl md:text-4xl tracking-tight',
    xl: 'text-3xl sm:text-4xl md:text-5xl tracking-tight',
  }[size] || 'text-xl sm:text-2xl md:text-3xl tracking-tight';

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
    cream: 'text-cream',
  }[color] || 'text-ink';

  const underlineClass = underline
    ? 'underline decoration-2 underline-offset-8 decoration-maroon/50'
    : '';

  const caseClass = uppercase ? 'uppercase tracking-wide' : '';

  return (
    <Component
      className={`font-serif font-bold transition-colors ${sizeClasses} ${alignClasses} ${colorClasses} ${underlineClass} ${caseClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
