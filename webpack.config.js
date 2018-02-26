var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');

const path = require('path');

var plugins = [new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body'
    })];

plugins.push (
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
        sourceMap: false
    })
);

module.exports = {
    entry: './src/index.js',
    	output: {
        	path: path.resolve(__dirname, 'build'),
        	filename: 'app.bundle.js'
    	},	
	module: {
		rules: [
        	{ test: /\.js$/,
        	loader: "babel-loader",
            options: {
                presets: ['es2015', 'react']
            }
    		},  
    		{ test: /\.css$/,
        	use: [
            	{ loader: 'style-loader'},
                { loader: 'css-loader',
                options: {
                    modules: true}
            	}
        	]
    		}
		]
	},
    plugins  
};