var webpack = require('webpack')
var banner = require('./banner')

module.exports = {
  entry: './src/kdu',
  output: {
    path: './dist',
    filename: 'kdu.js',
    library: 'Kdu',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
}
