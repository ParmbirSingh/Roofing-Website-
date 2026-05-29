/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        roof: {
          navy: "#172033",
          ink: "#263143",
          steel: "#526071",
          mist: "#eef3f7",
          frost: "#f7fafc",
          copper: "#b65528",
          copperDark: "#94431f",
          cedar: "#2f6f59",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 32, 51, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
