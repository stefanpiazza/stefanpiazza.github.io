module.exports = {
	entry: './src/js/index.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{	
				test: /\.(svg|jpg)$/,
				loader: 'url'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!postcss!sass'
			}
		]	
	},
	watch: true
}