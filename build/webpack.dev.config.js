module.exports = {
  entry: './src/kdu',
  output: {
    path: './dist',
    filename: 'kdu.js',
    library: 'Kdu',
    libraryTarget: 'umd'
  },
  devtool: '#source-map'
}
