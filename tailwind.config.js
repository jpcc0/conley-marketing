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
    backgroundColor: {
      'base':'#3C3D42',
      'crazy':'#9CCD62',
      'secondary':'#F6F8E2',
      'turtle':'#E0DDCA',
    },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}