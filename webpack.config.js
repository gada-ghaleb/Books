const path = require('path');

module.exports = {
  entry: './public/src',
  mode:"development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};