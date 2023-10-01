/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'alice_blue': { DEFAULT: '#e3f2fd', 100: '#06375a', 200: '#0c6eb3', 300: '#2fa0f1', 400: '#89c9f7', 500: '#e3f2fd', 600: '#e8f5fd', 700: '#eef7fe', 800: '#f4fafe', 900: '#f9fcff' },
      'light_sky_blue': { DEFAULT: '#90caf9', 100: '#042b4b', 200: '#085695', 300: '#0c80e0', 400: '#45a6f5', 500: '#90caf9', 600: '#a6d4fa', 700: '#bcdffb', 800: '#d2eafd', 900: '#e9f4fe' },
      'argentinian_blue': { DEFAULT: '#64b5f6', 100: '#042642', 200: '#084c83', 300: '#0b71c5', 400: '#2395f2', 500: '#64b5f6', 600: '#84c4f8', 700: '#a2d2fa', 800: '#c1e1fb', 900: '#e0f0fd' },
      'dodger_blue': { DEFAULT: '#2196f3', 100: '#031e34', 200: '#063c69', 300: '#085a9d', 400: '#0b78d1', 500: '#2196f3', 600: '#4daaf6', 700: '#79bff8', 800: '#a6d4fa', 900: '#d2eafd' },
      'french_blue': { DEFAULT: '#1976d2', 100: '#05172a', 200: '#0a2f54', 300: '#0f467e', 400: '#145ea8', 500: '#1976d2', 600: '#3a91e8', 700: '#6bacee', 800: '#9cc8f3', 900: '#cee3f9' },
      'cobalt_blue': { DEFAULT: '#0d47a1', 100: '#030e20', 200: '#051d40', 300: '#082b60', 400: '#0a3a80', 500: '#0d47a1', 600: '#1264df', 700: '#4489f0', 800: '#82b0f5', 900: '#c1d8fa' }
    },
  },
  plugins: [require('flowbite/plugin')],
}