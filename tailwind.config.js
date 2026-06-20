// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38BDF8",
        accent: "#818CF8",
        midnight: "#0F172A",
        void: "#05070D",
        glow: {
          cyan: "#38BDF8",
          violet: "#818CF8",
          blue: "#3B82F6",
        },
        glass: {
          surface: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.10)",
          hover: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
        "4xl": "80px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(56,189,248,0.3)",
        "glow-violet": "0 0 20px rgba(129,140,248,0.3)",
        "glow-sm": "0 0 10px rgba(56,189,248,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass-lg": "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "orb-pulse": "orb-pulse 8s ease-in-out infinite",
        "orb-drift": "orb-drift 12s ease-in-out infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
        "fade-in": "fade-in 1s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "orb-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.1)" },
        },
        "orb-drift": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 30px) scale(0.95)" },
          "100%": { transform: "translate(10px, -10px) scale(1.02)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
