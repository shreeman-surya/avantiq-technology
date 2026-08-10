/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1B33",
        slate: "#5B6B85",
        paper: "#FFFFFF",
        mist: "#F5F8FC",
        border: "#E4EAF3",
        navy: {
          DEFAULT: "#0B2A57",
          dark: "#081D3E",
        },
        blue: {
          DEFAULT: "#2857D6",
          light: "#3E6FF0",
          soft: "#EDF2FE",
        },
        cyan: {
          DEFAULT: "#17B8CE",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 20px -6px rgba(11, 27, 51, 0.10)",
        card: "0 4px 28px -8px rgba(11, 27, 51, 0.14)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0B2A57 0%, #2857D6 60%, #17B8CE 130%)",
        "cta-gradient": "linear-gradient(120deg, #0B2A57 0%, #2857D6 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
}
