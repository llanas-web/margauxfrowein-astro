/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Poiret One", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        "fit-25": "repeat(auto-fit, minmax(25rem, 1fr))",
      },
      boxShadow: {
        all: "0 .15rem .5rem rgba(3,8,20,.1),0 .075rem .175rem rgba(2,8,20,.1);",
      },
    },
  },
  plugins: [],
};
