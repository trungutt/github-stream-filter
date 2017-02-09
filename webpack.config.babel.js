import path from 'path';
import webpack from 'webpack';

const devtool = 'cheap-module-eval-source-map';
const entry = [
	'webpack-hot-middleware/client?reload=true',
	path.join(__dirname, 'src/index'),
];
const output = {
	path: path.join(__dirname, '/dist'),
	filename: 'bundle.js',
	publicPath: '/',
};
const devServer = {
	contentBase: path.resolve(__dirname, 'src'),
};
const scriptLoader = {
	loaders: ['react-hot-loader', 'babel-loader'],
	include: path.resolve(__dirname, 'src'),
	exclude: /node_modules/,
	test: /\.jsx$|\.js$/,
};
const plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
];
const resolve = {
	extensions: ['.js', '.jsx'],
};

export default {
	devtool,
	entry,
	output,
	devServer,
	module: { loaders: [scriptLoader] },
	plugins,
	resolve,
};
