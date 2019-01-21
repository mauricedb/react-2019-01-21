const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
