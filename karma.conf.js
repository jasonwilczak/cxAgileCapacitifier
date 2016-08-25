/* globals module */
// karma.conf.js
module.exports = function(config) {
	config.set({
		browsers: ['PhantomJS'],
		frameworks: ['systemjs','jasmine'],
		files: [
			'src/**/*spec.js'
		],
		//port: 9876,
		//logLevel: config.LOG_DEBUG,
		preprocessors: {
			'src/scripts/*.js': ['babel']
		},
		babelPreprocessor: {
			options: {
				presets: ['es2015'],
				sourceMap: 'inline'
			}
		},
		systemjs: {
			// Path to your SystemJS configuration file 
			//configFile: 'config.js',
			// Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries. 
			serveFiles: [
				'src/**/*.js',
				'node_modules/**/*.js'
			],
			config: {
				transpiler: null,
				paths: {
					'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js',
					'systemjs': 'node_modules/systemjs/dist/system.js',
					'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
					'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
				}
			}
		}
	});
};