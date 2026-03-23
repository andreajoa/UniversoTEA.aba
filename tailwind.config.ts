import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:   "#4A90D9",
        secondary: "#7B5EA7",
        cta:       "#2ECC71",
        urgency:   "#FF6B35",
        pain:      "#FFF0F0",
      },
      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        display: ["Nunito", "sans-serif"],
      },
      animation: {
        pulse_cta: "pulse_cta 2s infinite",
        float:     "float 3s ease-in-out infinite",
      },
      keyframes: {
        pulse_cta: {
          "0%, 100%": { transform: "scale(1)",    boxShadow: "0 0 0 0 rgba(46,204,113,0.4)" },
          "50%":       { transform: "scale(1.03)", boxShadow: "0 0 0 12px rgba(46,204,113,0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)"  },
          "50%":       { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
