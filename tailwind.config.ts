import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF4500",
        "secondary-nav": "#001f3f",
        "background-light": "#f8f6f6",
        "background-dark": "#211111",
        "primary-hover": "#cc3700",
        "navy-light": "#003366",
        "navy-text": "#001f3f",
        "success": "#10B981",
        "warning": "#F59E0B",
        "danger": "#EF4444",
        "whatsapp": "#25D366",
        "cta-orange": "#FF4500",
      },
      fontFamily: {
        "display": ["Spline Sans", "Noto Sans", "sans-serif"],
        "body": ["Spline Sans", "Noto Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      }
    },
  },
  plugins: [],
}
export default config