/* globals SystemJS */

SystemJS.config({
	baseUrl: './',
	map: {
		'plugin-babel': './scripts/libs/systemjs-plugin-babel/plugin-babel.js',
		'systemjs-babel-build': './scripts/libs/systemjs-plugin-babel/systemjs-babel-browser.js',
		'app.utility': './scripts/utility.js'
	},
	transpiler: 'plugin-babel',
});