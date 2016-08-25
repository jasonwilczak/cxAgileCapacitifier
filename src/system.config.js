/* globals SystemJS */

SystemJS.config({
	baseUrl: './scripts',
	map: {
		'plugin-babel': './scripts/libs/systemjs-plugin-babel/plugin-babel.js',
		'systemjs-babel-build': './scripts/libs/systemjs-plugin-babel/systemjs-babel-browser.js'
	},
	transpiler: 'plugin-babel',
});