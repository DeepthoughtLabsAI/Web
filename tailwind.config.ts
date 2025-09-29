import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1100px',
        '2xl': '1100px',
      },
    },
    extend: {
      colors: {
        'bg-dark': '#1c1c1e',
        'bg-pane': '#242429',
        'bg-card': '#2c2c2e',
        'text-primary': '#e0e0e0',
        'text-muted': '#9e9e9e',
        'accent-blue': '#007acc',
        'accent-blue-hover': '#0095ff',
        'border-color': '#3a3a3c',
      },
    },
  },
  plugins: [],
}
export default config
