const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3003,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        remote1: 'remote1@http://localhost:3000/remoteEntry.js',
        remote2: 'remote2@http://localhost:3001/remoteEntry.js',
        remote3: 'remote3@http://localhost:3002/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};