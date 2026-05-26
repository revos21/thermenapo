/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary-rgb) / <alpha-value>)',
          light: 'var(--primary-light)',
          dark: 'rgb(var(--primary-dark-rgb) / <alpha-value>)',
        },
        accent: {
          soft: 'rgb(var(--accent-soft-rgb) / <alpha-value>)',
          muted: 'rgb(var(--accent-soft-muted-rgb) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}

