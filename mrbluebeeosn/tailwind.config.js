/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1.2rem',   // 12px
      base: '1.6rem', // 16px  
      lg: '1.8rem',   // 18px
      xl: '2.4rem',   // 24px
      '2xl': '3.2rem',  // 32px
      '3xl': '4.0rem',  // 40px
      '4xl': '4.8rem',  // 48px
      '5xl': '6.4rem',  // 64px
      '6xl': '8.0rem',  // 80px
    },
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      tertiary: 'var(--tertiary-color)',
      accent: 'var(--accent-color)',
    },
  },
  plugins: [],
}
