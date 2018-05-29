const path = require('path');
const webpack  =  require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require( 'extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [require('@babel/plugin-proposal-object-rest-spread')]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				include: path.join(__dirname, 'css'),
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html')
		}),
		new ExtractTextPlugin('styles.css')
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 4000
	}
};