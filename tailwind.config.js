/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8ECF4',
          100: '#C9D2E3',
          200: '#93A5C7',
          300: '#5D78AB',
          400: '#2E4A8F',
          500: '#0F1E3A',
          600: '#0D1A33',
          700: '#0A1528',
          800: '#08101E',
          900: '#050B15',
        },
        emerald: {
          50: '#E7F8F0',
          100: '#C5EDD9',
          200: '#8FDBB3',
          300: '#52C98C',
          400: '#2DB574',
          500: '#1FA463',
          600: '#178A52',
          700: '#126E42',
          800: '#0D5332',
          900: '#083821',
        },
        sunshine: {
          50: '#FEF6E4',
          100: '#FDE9C0',
          200: '#FBD584',
          300: '#FAC445',
          400: '#F6C445',
          500: '#E0A82E',
          600: '#B88524',
          700: '#8F6619',
          800: '#6B4D12',
          900: '#47330C',
        },
        gray: {
          50: '#F5F6F8',
          100: '#E6E8EC',
          200: '#D1D5DC',
          300: '#B0B7C2',
          400: '#8A93A1',
          500: '#6B7585',
          600: '#545D6B',
          700: '#424A56',
          800: '#2F353F',
          900: '#1C2028',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-down': 'fadeDown 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
