/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        oled: "#000000",
        surface: {
          dark: "#050508",
          card: "rgba(255, 255, 255, 0.03)",
          hover: "rgba(255, 255, 255, 0.06)",
          active: "rgba(255, 255, 255, 0.09)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(255, 255, 255, 0.2)",
        },
        accent: {
          rust: "#f97316",
          postgres: "#336791",
          nginx: "#009639",
          docker: "#2496ed",
          redis: "#dc2626",
          go: "#00add8",
          typescript: "#3178c6",
          cyan: "#38bdf8",
          emerald: "#10b981",
          violet: "#8b5cf6",
        }
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "'Prompt'",
          "'Anuphan'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Rounded'",
          "'SF Pro Display'",
          "system-ui",
          "sans-serif"
        ],
        rounded: [
          "'Plus Jakarta Sans'",
          "'Prompt'",
          "'Anuphan'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Rounded'",
          "sans-serif"
        ],
        mono: [
          "'JetBrains Mono'",
          "'SF Mono'",
          "ui-monospace",
          "monospace"
        ]
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
        'radial-cobalt': 'radial-gradient(circle at 50% 50%, rgba(14, 116, 144, 0.15) 0%, rgba(0, 0, 0, 0) 65%)',
        'radial-violet': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 65%)',
        'gradient-text': 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.78) 100%)',
        'gradient-text-subtle': 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 100%)',
        'gradient-apple-warm': 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-highlight': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'dock': '0 20px 50px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
        'soft': '0 12px 36px -4px rgba(0, 0, 0, 0.5), 0 4px 12px -2px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333333%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-33.333333%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    },
  },
  plugins: [],
};
