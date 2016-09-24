module.exports = {
	entry: [
		//'./source/App.js'
		// './source/App-form.js'
		// './source/App-redux2.js'
		// './source/App-redux-reducers.js'
		'./source/App-redux-async.js'
	],
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
	loaders: [
	  {
	    test: /\.jsx?$/,
	    exclude: /(node_modules|bower_components)/,
	    loader: 'babel-loader',
	    query: {
	      presets: ['react', 'es2015', 'stage-0'],
	      plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
	    }
	  }
	]
	}
};
