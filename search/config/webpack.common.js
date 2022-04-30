const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.js'),
  output: { path: path.join(__dirname, '..', 'dist') },
  mode: 'development',
  devServer: {
    port: 3005,
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html')
    }),
    new ModuleFederationPlugin({
      name: 'search',
      filename: 'remoteSearch.js',
      exposes: {
        './searchIndex': './src/bootstrap'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}