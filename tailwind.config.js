module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'cool-blue': '#007bff', // A bright blue color
        'vibrant-purple': '#6e40c9', // A vibrant purple color
        'warm-orange': '#ff6f61', // A warm orange color
      },
      fontFamily: {
        'headline': ['"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'], // Custom font stack for headlines
        'body': ['Georgia', 'Times New Roman', 'serif'], // A classic serif font stack for body text
      },
      boxShadow: {
        'cool': '0 4px 14px 0 rgba(0, 123, 255, 0.39)', // A blue-tinted shadow for a cool effect
      },
      spacing: {
        '128': '32rem', // An extra large spacing option
      },
      borderRadius: {
        'xl': '1rem', // Extra large border radius for rounded elements
      }
    },
  },
  plugins: [],
}

