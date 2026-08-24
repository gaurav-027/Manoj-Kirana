/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#12372A",
        leaf: "#1F5A43",
        cream: "#F7F5EF",
        orange: "#D8893D",
        ink: "#17231D",
        muted: "#66736B",
        line: "rgba(18, 55, 42, 0.14)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 70px rgba(18, 55, 42, 0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        dash: "dash 1.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
