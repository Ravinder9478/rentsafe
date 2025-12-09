/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A2FCC',
        'primary-dark': '#3a24a8',
        'primary-light': '#6b4eff',
        accent: '#3b82f6',
        'bg-primary': '#ffffff',
        'bg-secondary': '#f9fafb',
        'bg-tertiary': '#f3f4f6',
        'bg-purple': '#4A2FCC',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
        'text-light': '#ffffff',
        border: '#e5e7eb',
        'border-primary': '#4A2FCC',
        'border-search': '#7356FF',
        'badge-orange': '#FF6B35',
      },
    },
  },
  plugins: [],
}
