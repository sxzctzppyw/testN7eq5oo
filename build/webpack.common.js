const CopyPlugin = require('copy-webpack-plugin');
const development = process.env.NODE_ENV === 'development';
const Fiber = require('fibers');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminPngquant = require('imagemin-pngquant');
const path = require('path');
const sass = require('sass');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    example: [
      './src/js/example.js',
      './src/scss/example.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              configFile: 'build/.eslintrc.json'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'build'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              /* TODO: source map not working properly */
              implementation: sass,
              fiber: Fiber
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'src/img',
        to: 'img',
        ignore: [
          'index.html'
        ]
      }
    ]),
    new ImageminPlugin({
      disable: development,
      plugins: [
        imageminMozjpeg({
          quality: 80
        }),
        imageminPngquant({
          quality: [0.8, 0.8]
        })
      ]
    }),
    new CleanWebpackPlugin()
  ]
};
