/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // backgroundImage: theme => ({
      //   ...theme('backgroundImage'),
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      // }),
    },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}