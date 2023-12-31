/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fox: "#DF7251",
        elegant: "#4E233E",
        vintage: "#C2B1A0",
      },
    },
  },
  plugins: [],
};
