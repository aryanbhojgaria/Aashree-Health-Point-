/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official Brochure Color Tokens
        // Background/primary brand color: coral/terracotta #D98878
        coral: {
          DEFAULT: '#D98878',
          light: '#E6A395',
          dark: '#C27160',
          subtle: '#F6DDD8',
          deep: '#A34F40',
        },
        // Deep teal: #1A4D4D (used in logo, headings, "About Us" style headers)
        teal: {
          DEFAULT: '#1A4D4D',
          light: '#2B6A6A',
          dark: '#113535',
          subtle: '#E2EDED',
          surface: '#F0F6F6',
        },
        // Maroon/wine: #7A1F3D (used in logo accent, "HEALTH POINT" wordmark)
        maroon: {
          DEFAULT: '#7A1F3D',
          light: '#993053',
          dark: '#59122A',
          subtle: '#F5E3E8',
          surface: '#FAF0F3',
        },
        // Cream/off-white: #F0E4D0 (used as card/panel background against coral)
        cream: {
          DEFAULT: '#F0E4D0',
          50: '#FAF6EF',
          100: '#F5ECE0',
          200: '#F0E4D0',
          300: '#E4D3BA',
          muted: '#DEC8AA',
          border: '#D3BFA4',
        },
        // Dark ink text: near-black brown #2B1810 for body copy on cream/white panels
        ink: {
          DEFAULT: '#2B1810',
          light: '#4B3327',
          muted: '#6F5447',
          subtle: '#9A7E70',
          border: '#2B1810',
        },

        // Semantic aliases for cross-compatibility
        primary: {
          DEFAULT: '#D98878', // Coral background/brand primary
          light: '#E6A395',
          dark: '#C27160',
          subtle: '#F6DDD8',
        },
        secondary: {
          DEFAULT: '#1A4D4D', // Deep teal
          light: '#2B6A6A',
          dark: '#113535',
          subtle: '#E2EDED',
        },
        accent: {
          DEFAULT: '#7A1F3D', // Maroon / wine
          light: '#993053',
          dark: '#59122A',
          subtle: '#F5E3E8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
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
        'brochure': '0 2px 8px -1px rgba(43, 24, 16, 0.08), 0 1px 3px -1px rgba(43, 24, 16, 0.04)',
        'brochure-md': '0 6px 16px -2px rgba(43, 24, 16, 0.12), 0 2px 6px -1px rgba(43, 24, 16, 0.06)',
        'brochure-lg': '0 12px 28px -4px rgba(43, 24, 16, 0.16), 0 4px 12px -2px rgba(43, 24, 16, 0.08)',
        'teal-glow': '0 8px 24px -4px rgba(26, 77, 77, 0.35)',
        'maroon-glow': '0 8px 24px -4px rgba(122, 31, 61, 0.35)',
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
