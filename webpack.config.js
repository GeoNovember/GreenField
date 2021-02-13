const path = require('path');
const srcPath = path.resolve(__dirname, 'client', 'src');
const distPath = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  watch: true,
  entry: path.resolve(__dirname, 'client/src/index.jsx'),
  output: {
    path: distPath,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [path.join(__dirname, './node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', 'babel-preset-es2015']
          }
        }
      }
    ]
  }
};