/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#F8F9F5',
          card: '#FFFFFF',
          border: '#E8EFE8',
          text: '#172E26',
          muted: '#65756B',
          subtle: '#8C9C92',
        },
        forest: {
          50: '#F0F6F2',
          100: '#E1EDE5',
          200: '#C2DBCB',
          300: '#94C1A5',
          400: '#529772',
          500: '#2A6B53',
          600: '#215743',
          700: '#1A4334',
          800: '#143327',
        },
        biome: {
          ocean: '#2A9D8F',
          oceanBg: '#E7F6F5',
          forest: '#2D6A4F',
          forestBg: '#E9F5ED',
          canyon: '#C98B4B',
          canyonBg: '#FEF8EE',
          alpine: '#5E6B7A',
          alpineBg: '#EEF2F7',
          city: '#DD6245',
          cityBg: '#FDF1ED',
          glacier: '#3F819A',
          glacierBg: '#EAF5F9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace']
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(23, 46, 38, 0.04)',
        'soft-md': '0 4px 16px rgba(23, 46, 38, 0.06)',
        'soft-lg': '0 8px 24px rgba(23, 46, 38, 0.08)',
        'float': '0 12px 32px rgba(23, 46, 38, 0.12)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px'
      }
    },
  },
  plugins: [],
}
