const path = require('path');

module.exports = {
  entry: './src/index.js', // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'main.js', // Output filename
  },
  // Add any additional configurations, loaders, or plugins here
};
