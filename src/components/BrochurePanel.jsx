import React from 'react';
import BrochureHeading from './BrochureHeading';
import TaglineCallout from './TaglineCallout';

/**
 * BrochurePanel (ServiceCard)
 * Replicates the exact layout pattern from the official Aashree Health Point brochure:
 * - Subtle thin dark border
 * - Cream (#F0E4D0) or white background panel
 * - Sits cleanly on the coral (#D98878) page background
 * - Bold underlined section title
 * - Content area for short paragraphs, lists, or procedures
 * - Bold underlined bottom tagline callout (centered or right-aligned)
 */
export default function BrochurePanel({
  title,
  titleAlign = 'center',
  titleSize = 'md',
  titleColor = 'ink',
  tagline,
  taglineAlign = 'center',
  taglineSize = 'lg',
  taglineColor = 'ink',
  bg = 'cream',
  border = 'ink',
  shadow = 'sm',
  children,
  className = '',
  ...props
}) {
  const bgClasses = {
    cream: 'bg-cream text-ink',
    'cream-50': 'bg-cream-50 text-ink',
    'cream-100': 'bg-cream-100 text-ink',
    white: 'bg-white text-ink',
  }[bg] || 'bg-cream text-ink';

  const borderClasses = {
    ink: 'border-[1.5px] border-ink',
    'ink-subtle': 'border border-ink/60',
    teal: 'border-[1.5px] border-teal',
    maroon: 'border-[1.5px] border-maroon',
    none: 'border-0',
  }[border] || 'border-[1.5px] border-ink';

  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-brochure',
    md: 'shadow-brochure-md',
  }[shadow] || 'shadow-brochure';

  return (
    <article
      className={`rounded-none ${bgClasses} ${borderClasses} ${shadowClasses} p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-brochure-md ${className}`}
      {...props}
    >
      <div>
        {title && (
          <header className="mb-4 sm:mb-5 pb-1">
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

        <div className="space-y-3 sm:space-y-3.5 text-sm sm:text-base leading-relaxed text-ink/90 font-sans">
          {children}
        </div>
      </div>

      {tagline && (
        <footer className="mt-5 sm:mt-7 pt-2 border-t border-ink/15">
          {typeof tagline === 'string' ? (
            <TaglineCallout
              align={taglineAlign}
              size={taglineSize}
              color={taglineColor}
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

// Named alias for direct ServiceCard imports
export { BrochurePanel as ServiceCard };
