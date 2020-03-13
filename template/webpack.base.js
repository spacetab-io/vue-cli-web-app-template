const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.ts',
      '.d.ts',
    ],
    alias: {
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader'
      },
    ]
  }
};
