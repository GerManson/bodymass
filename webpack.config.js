const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';
const HOT = process.env.NODE_ENV === 'hot';

module.exports = {
  entry: {
    public: [
      ...PROD ? [] : HOT ? [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client'
      ] : [],
      'babel-polyfill',
      'whatwg-fetch',
      './src/public/index.js'
    ],
    dashboard: [
      ...PROD ? [] : HOT ? [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client'
      ] : [],
      'babel-polyfill',
      'whatwg-fetch',
      './src/dashboard/index.js'
    ]
  },
  output: {
    publicPath: '/static',
    path: path.resolve(__dirname, 'build'),
    filename: '[name]/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: [
              'react-hot-loader/babel'
            ]
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: PROD ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }]
        }) : [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: PROD ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: { modules: false }
          }
        }) : [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: false }
          }
        ],
        include: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons/commons.js',
      minChunks: 2
    }),
    new CopyWebpackPlugin([
      { from: './src/public/index.html', to: './public/index.html' },
      { from: './src/dashboard/index.html', to: './dashboard/index.html' },
      { from: './src/common/img', to: './public/img' }
    ]),
    ...(PROD ? [
      new ExtractTextPlugin('[name]/styles.css')
    ] : [ // ALL BUT PROD
    ]),
    ...(HOT ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ] : [ // ALL BUT HOT
      new CleanWebpackPlugin(['build'])
    ])
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
};
