import React from 'react';
import BrochureHeading from './BrochureHeading';
import TaglineCallout from './TaglineCallout';

/**
 * BrochurePanel (Modernized for Phase 1)
 * Clean, soft modern card container:
 * - Rounded corners (rounded-2xl)
 * - Soft shadow elevation, no heavy black borders
 * - Clean spacious padding
 * - Preserves content compatibility
 */
export default function BrochurePanel({
  title,
  titleAlign = 'left',
  titleSize = 'md',
  titleColor = 'ink',
  tagline,
  taglineAlign = 'left',
  taglineSize = 'md',
  taglineColor = 'ink',
  bg = 'white',
  border = 'none',
  shadow = 'card',
  children,
  className = '',
  ...props
}) {
  const bgClasses = {
    white: 'bg-white text-ink',
    cream: 'bg-cream-50 text-ink',
    'cream-50': 'bg-cream-50 text-ink',
    'cream-100': 'bg-cream-100 text-ink',
  }[bg] || 'bg-white text-ink';

  const borderClasses = {
    none: 'border-0',
    subtle: 'border border-black/[0.06]',
    ink: 'border border-ink/10',
    teal: 'border border-teal/20',
    maroon: 'border border-maroon/20',
  }[border] || 'border-0';

  const shadowClasses = {
    none: 'shadow-none',
    card: 'shadow-card hover:shadow-card-hover',
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
  }[shadow] || 'shadow-card hover:shadow-card-hover';

  return (
    <article
      className={`rounded-2xl ${bgClasses} ${borderClasses} ${shadowClasses} p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      {...props}
    >
      <div>
        {title && (
          <header className="mb-4">
            {typeof title === 'string' ? (
              <BrochureHeading
                as="h3"
                size={titleSize}
                align={titleAlign}
                color={titleColor}
              >
                {title}
              </BrochureHeading>
            ) : (
              title
            )}
          </header>
        )}

        <div className="space-y-3 text-sm sm:text-base leading-relaxed text-ink/80 font-sans">
          {children}
        </div>
      </div>

      {tagline && (
        <footer className="mt-6 pt-3 border-t border-black/[0.06]">
          {typeof tagline === 'string' ? (
            <TaglineCallout
              align={taglineAlign}
              size={taglineSize}
              color={taglineColor}
              underline={false}
            >
              {tagline}
            </TaglineCallout>
          ) : (
            tagline
          )}
        </footer>
      )}
    </article>
  );
}
