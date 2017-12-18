const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        loaders: ["style-loader", "css-loader", "stylus-loader",{
          loader: 'vuetify-loader',
          options: {
            theme: path.resolve(__dirname, '../src/stylus/')
          }
        }],
        include: path.resolve(__dirname, '../src')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src/')
    }
  },
}
