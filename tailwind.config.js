/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modernized Brand Color Tokens
        // Warm primary canvas & background washes
        coral: {
          DEFAULT: '#D98878',
          light: '#E6A395',
          dark: '#C27160',
          subtle: '#FAF0ED',
          wash: '#FDF7F5',
          deep: '#A34F40',
        },
        // Deep teal: #1A4D4D (anchors, major headers, primary actions)
        teal: {
          DEFAULT: '#1A4D4D',
          light: '#2B6A6A',
          dark: '#113535',
          subtle: '#EAF2F2',
          surface: '#F4F8F8',
        },
        // Maroon/wine: #7A1F3D (accents, wordmark, badges)
        maroon: {
          DEFAULT: '#7A1F3D',
          light: '#993053',
          dark: '#59122A',
          subtle: '#F9ECEF',
          surface: '#FCF5F7',
        },
        // Cream/off-white: #F0E4D0 (cards, surfaces, neutral backdrop)
        cream: {
          DEFAULT: '#F0E4D0',
          50: '#FAF7F2',
          100: '#F5EFE5',
          200: '#F0E4D0',
          300: '#E2D3BC',
          muted: '#DFCFB8',
          border: 'rgba(43, 24, 16, 0.08)',
        },
        // Dark ink text: near-black brown #2B1810 for readable modern typography
        ink: {
          DEFAULT: '#2B1810',
          light: '#4B3327',
          muted: '#6F5447',
          subtle: '#9A7E70',
          border: 'rgba(43, 24, 16, 0.1)',
        },

        // Semantic aliases
        primary: {
          DEFAULT: '#D98878',
          light: '#E6A395',
          dark: '#C27160',
          subtle: '#FAF0ED',
        },
        secondary: {
          DEFAULT: '#1A4D4D',
          light: '#2B6A6A',
          dark: '#113535',
          subtle: '#EAF2F2',
        },
        accent: {
          DEFAULT: '#7A1F3D',
          light: '#993053',
          dark: '#59122A',
          subtle: '#F9ECEF',
        },
      },
      fontFamily: {
        serif: ['"Lora"', 'Georgia', 'serif'],
        display: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
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
        // Modern, soft elevation
        'card': '0 2px 10px -2px rgba(43, 24, 16, 0.04)',
        'card-hover': '0 14px 30px -4px rgba(43, 24, 16, 0.08), 0 4px 12px -2px rgba(43, 24, 16, 0.03)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 16px 40px rgba(0, 0, 0, 0.06)',
        'teal-glow': '0 8px 24px -4px rgba(26, 77, 77, 0.25)',
        'maroon-glow': '0 8px 24px -4px rgba(122, 31, 61, 0.25)',
      },
      spacing: {
        'section-sm': '3.5rem',
        'section-md': '5rem',
        'section-lg': '7rem',
      }
    },
  },
  plugins: [],
}
