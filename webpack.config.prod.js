const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    bundle: './index.js',
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].min.js'
  },
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1'
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          'url-loader?limit=8192'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'], // Specify the common bundle's name
      filename: '[name]-[chunkhash].min.js',
      minChunks: Infinity
    }),

    new ExtractTextPlugin({
      filename: 'build.min.css',
      allChunks: true
    }),

    // compile time plugins
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  ]
};