const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  
  entry: {
    devTools: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:8080',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server'
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
    ],
    bundle: './index.js',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  
  devtool: "cheap-eval-source-map",
  
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
        use: [
          'style-loader',
          'css-loader?sourceMap&-minimize',
          'postcss-loader'
        ]
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
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // Specify the common bundle's name
      minChunks: Infinity
    })
  ]
};