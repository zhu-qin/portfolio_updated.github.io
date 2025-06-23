const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for the application
  entry: './src/components/Entry.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean the output directory before each build
  },

  // Mode: development or production
  mode: 'development',

  // Module rules for loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regex to match .js and .jsx files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel to transpile
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for ES6 and React
          },
        },
      },
      {
        test: /\.css$/, // Regex to match .css files
        use: ['style-loader', 'css-loader'], // Loaders for handling CSS
      },
    ],
  },

  // Resolve extensions for modules
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },

  // Development server configuration
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve from the dist directory
    compress: true, // Enable gzip compression
    port: 3000, // Port for the server
    open: true, // Open the browser automatically
    hot: true, // Enable hot module replacement
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for the HTML file
      filename: 'index.html', // Output HTML file name
    }),
  ],

  devtool: 'source-map'
};
