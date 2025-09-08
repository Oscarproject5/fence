/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f1ea',
          100: '#e8e2d0',
          200: '#d1c5a1',
          300: '#b9a872',
          400: '#a28b43',
          500: '#8b6e14',
          600: '#6f5810',
          700: '#53420c',
          800: '#372c08',
          900: '#1c1604',
        },
        secondary: {
          50: '#f0f4f0',
          100: '#d9e5d9',
          200: '#b3cbb3',
          300: '#8db18d',
          400: '#679767',
          500: '#507950',
          600: '#3f5f3f',
          700: '#2f462f',
          800: '#1f2d1f',
          900: '#0f170f',
        },
        wood: {
          light: '#d4a574',
          DEFAULT: '#b8935f',
          dark: '#8b6d3f',
        },
        fence: {
          cedar: '#c19a6b',
          pine: '#d4a373',
          iron: '#4a4a4a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-fence.jpg')",
        'wood-texture': "url('/images/wood-texture.jpg')",
      },
    },
  },
  plugins: [],
}