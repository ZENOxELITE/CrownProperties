/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EFEBE2',
        ink: '#16233F',
        copper: {
          DEFAULT: '#5C7A66',
          light: '#7A9A86',
          dark: '#445E4D',
        },
        stamp: '#8B3A2F',
        border: {
          DEFAULT: '#C9C4B8',
          light: '#D8D3C7',
          dark: '#B0A99A',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
