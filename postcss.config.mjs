const config = {
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        custom: ["toutem", "sans-serif"],
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
