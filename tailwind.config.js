/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '600': '600px',
       }
    },
    colors: {
      'pf-gray' : '#232323',
      'pf-mint' : '#B5FFD3',
      'pf-white' : '#F5F5F5',
      'pf-blue' : '#508CA4',
      'pf-green' : '#0A8754',
      'pf-field' : '#E1E1E1',
      'pf-white' : '#FFFFFF',
      'pf-light-gray' : '#F2F2F2'
    }
  },
  plugins: [],
}

