/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: { 'periwinkle': { DEFAULT: '#dddbff', 100: '#05005f', 200: '#0900be', 300: '#291eff', 400: '#837cff', 500: '#dddbff', 600: '#e4e2ff', 700: '#ebeaff', 800: '#f1f1ff', 900: '#f8f8ff' }, 'cool_gray': { DEFAULT: '#7d84b3', 100: '#171927', 200: '#2d324d', 300: '#444a74', 400: '#5b639a', 500: '#7d84b3', 600: '#989ec3', 700: '#b2b6d2', 800: '#cccee1', 900: '#e5e7f0' }, 'yinmn_blue': { DEFAULT: '#4d588d', 100: '#10121c', 200: '#1f2339', 300: '#2f3555', 400: '#3e4771', 500: '#4d588d', 600: '#6974ac', 700: '#8e97c1', 800: '#b4bad6', 900: '#d9dcea' }, 'delft_blue': { DEFAULT: '#1d2c67', 100: '#060915', 200: '#0c1229', 300: '#121a3e', 400: '#172353', 500: '#1d2c67', 600: '#2e45a2', 700: '#4e68cd', 800: '#899ade', 900: '#c4cdee' }, 'french_gray': { DEFAULT: '#cdd1df', 100: '#212534', 200: '#434b69', 300: '#65719c', 400: '#99a1be', 500: '#cdd1df', 600: '#d7dae6', 700: '#e1e3ec', 800: '#ebedf2', 900: '#f5f6f9' }, 'anti-flash_white': '#f3f4f7' },
  },
  plugins: [require('flowbite/plugin')],
}