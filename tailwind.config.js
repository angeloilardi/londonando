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
      'primary': '#1976D2',
      'primary-light': '#64B5F6',
      'accent': '#F28722',
      'accent-light': '#FFD7C4',
      'off-white': '#f3f4f7',
      'info': '#'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      'mobile-landscape': {
        'raw': '(max-height: 640px)'
      }
    }
  },
  plugins: [require('flowbite/plugin')],
}