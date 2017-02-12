const webpack  = require('webpack')
const minify   = require('yargs').argv.minify
const copy     = require('copy-webpack-plugin')
const html     = require('html-webpack-plugin')
const progress = require('progress-bar-webpack-plugin')
const path     = require('path')

module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: './index.js',
	output: {
    path: path.resolve(__dirname, 'dist/app'),
    filename: 'app.min.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
	module: {
		loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
			{ 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        } 
      }
		]
	},
	plugins: [
    new html({ hash: true, minify: false, inject: 'head', template: 'index.html' }),
    new progress(),
    (minify)? new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }): () => {}
	]
}