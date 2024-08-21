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
    // colors: {
    //   'primary': '#1d2c67',
    //   'primary-light': '#2e45a2',
    //   'accent': '#DDDBFF',
    //   'off-white': '#f3f4f7'
    // }
    colors: {
      'primary': '#3498db',
      'primary-light': '#86BBD8',
      'accent': '#DDDBFF',
      'off-white': '#f3f4f7',
      'info': '#9EE493'
    }
  },
  plugins: [require('flowbite/plugin')],
}