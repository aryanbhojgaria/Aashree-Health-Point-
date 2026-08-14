/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette tokens
        primary: {
          DEFAULT: '#769382', // Sage green base
          light: '#8FAAA0',
          dark: '#5B7767',
          subtle: '#E8EFEA',
          surface: '#F0F5F2',
        },
        secondary: {
          DEFAULT: '#C0C3B9', // Sage-gray base
          light: '#DCE0D7',
          dark: '#9FA397',
          subtle: '#EAECE6',
        },
        cream: {
          DEFAULT: '#F3EFE3', // Warm cream background
          50: '#FAF8F2',
          100: '#F3EFE3',
          200: '#E8E2D2',
          300: '#DDD5C0',
          muted: '#E5DFCD',
        },
        ink: {
          DEFAULT: '#2B2A26', // Warm ink/charcoal text
          light: '#484640',
          muted: '#6E6B62',
          subtle: '#99968D',
          border: '#DDD8CB',
        },
        accent: {
          DEFAULT: '#D96B43', // Warm terracotta/coral CTA
          hover: '#C25A33',
          active: '#A94B28',
          light: '#FBECE7',
          glow: 'rgba(217, 107, 67, 0.25)',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"DM Serif Display"', 'Georgia', 'serif'],
        display: ['"Fraunces"', '"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography tokens for small screen safety & rich desktop scaling
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.65rem + 1.1vw, 2.35rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3rem)',
        'fluid-5xl': 'clamp(2.75rem, 2.35rem + 2vw, 3.85rem)',
        'fluid-display': 'clamp(3.15rem, 2.65rem + 2.6vw, 4.75rem)',
      },
      minHeight: {
        'tap': '44px',
        'tap-lg': '48px',
      },
      minWidth: {
        'tap': '44px',
        'tap-lg': '48px',
      },
      boxShadow: {
        'warm-sm': '0 1px 2px 0 rgba(43, 42, 38, 0.05)',
        'warm': '0 4px 12px -2px rgba(43, 42, 38, 0.08), 0 2px 6px -1px rgba(43, 42, 38, 0.04)',
        'warm-lg': '0 12px 28px -4px rgba(43, 42, 38, 0.12), 0 4px 12px -2px rgba(43, 42, 38, 0.06)',
        'coral-glow': '0 8px 24px -4px rgba(217, 107, 67, 0.35)',
      },
      spacing: {
        'section-sm': '4rem',
        'section-md': '6rem',
        'section-lg': '8rem',
      }
    },
  },
  plugins: [],
}
