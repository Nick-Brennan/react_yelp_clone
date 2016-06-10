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

var config = getConfig({
	in: join(__dirname, 'src/app.js'),
	out: join(__dirname, 'dist'),
	clearBeforeBuild: true
});

module.exports = config;