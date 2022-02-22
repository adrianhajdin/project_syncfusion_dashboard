module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-blue': '#03C9D7',
        'light-gray': '#F7F7F7',
        'light-red': '#FB9678',
        'icon-light-blue': '#E5FAFB',
        'icon-light-orange': 'rgb(255, 244, 229)',
        'icon-light-red': 'rgb(253, 243, 245)',
        'icon-light-green': 'rgb(235, 250, 242)',
        'icon-green': '#00C292',
        orange: 'rgb(254, 201, 15)',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'blue-theme': '#1A97F5',
        'green-theme': '#03C9D7',
        'purple-theme': '#7352FF',
        'red-theme': '#FF5C8E',
        'indigo-theme': '#1E4DB7',
        'orange-theme': '#FB9678',
      },

      colors: {
        'light-blue': '#03C9D7',
        'icon-light-orange': 'rgb(254, 201, 15)',
        'icon-light-red': 'rgb(228, 106, 118)',
        'icon-light-green': 'rgb(0, 194, 146)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      duration: {
        3000: '3000',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
      },
    },
  },
  plugins: [],
};
