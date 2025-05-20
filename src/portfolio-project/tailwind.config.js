module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify the paths to all of your template files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Dark background color
        secondary: '#2d3748', // Darker shade for elements
        accent: '#4a5568', // Accent color for buttons and highlights
        light: '#f7fafc', // Light color for text
        dark: '#2d3748', // Dark color for text
      },
    },
  },
  plugins: [],
}