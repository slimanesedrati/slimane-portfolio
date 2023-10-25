/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        md: "750px",
      },
    },
    extend: {
      backgroundSize: {
        over: "200% 200%",
      },
      fontFamily: {
        replicate: ["Space Grotesk", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
        "syne-mono": ["Syne Mono", "monospace"],
      },
      borderRadius: {
        dot: "30% 70% 62% 38% / 30% 30% 70% 70% ",
      },
      animation: {
        rad: "rad 5s ease infinite",
      },
      keyframes: {
        rad: {
          "0%": {
            borderRadius: "30% 70% 62% 38% / 30% 30% 70% 70%",
          },
          "25%": {
            borderRadius: "58% 42% 18% 82% / 76% 54% 46% 24% ",
          },
          "75%": {
            borderRadius: "76% 24% 42% 58% / 52% 30% 70% 48% ",
          },
          "100%": {
            borderRadius: "30% 70% 62% 38% / 30% 30% 70% 70%",
          },
        },
      },
    },
  },
  plugins: [],
};
