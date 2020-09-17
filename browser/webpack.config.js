// steve/media/webpack.config.js

'use strict'
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  entry: ['./app.ts'],

  output: {
    path: path.resolve(__dirname, '../../dist/demo'),
    filename: 'main.js'
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },

      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: ['\\.vue$'],
            }
          }
        ]
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }

    ]    
  },

  plugins: [
    new VueLoaderPlugin()
  ]

}
