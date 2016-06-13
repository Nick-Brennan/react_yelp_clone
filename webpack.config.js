const webpack = require('webpack');
const fs = require('fs');
const path = require('path'),
	  join = path.join,
	  resolve = path.resolve;

const getConfig = require('hjs-webpack');
const root = resolve(__dirname);
const src = join(root, 'src');
const modules = join(root, 'node_modules');
const dist = join(root, 'dist');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

const cssModuleNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

var config = getConfig({
	in: join(__dirname, 'src/app.js'),
	out: join(__dirname, 'dist'),
	clearBeforeBuild: true
});

config.postcss = [].concat([
		require('precss')({}),
		require('autoprefixer')({}),
		require('cssnano')({})
	]);

module.exports = config;