/* globals module */
// karma.conf.js
module.exports = function(config) {
	config.set({
		browsers: ['PhantomJS'],
		frameworks: ['jasmine'],
		files: [
			'src/**/*spec.js'
		]
	});
};