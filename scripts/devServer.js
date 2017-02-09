import path from 'path';
import webpack from 'webpack';
import express from 'express';
import open from 'open';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config.babel';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(3000, (err) => {
	if (err) {
		/* eslint-disable no-console */
		console.log(err);
	}

	open(`http://localhost:${port}`);
});
