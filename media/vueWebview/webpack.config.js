// steve/media/webpack.config.js

var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// console.log( `webpack __dirname ${__dirname}`);

module.exports = {
  entry: './src/app.ts',
  mode: "development",
  output: {
    path: path.resolve(__dirname, '../../media/dist/vueWebview'),
    filename: 'app.js'
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
