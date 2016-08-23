/* globals __dirname, process */
'use strict';

//variables
const gulp = require('gulp');
const KarmaServer = require('karma').Server;
const eslint = require('gulp-eslint');

let karmaServerOptions = {
	configFile: __dirname + '/karma.conf.js'
};

//tasks
gulp.task('default',()=>{

});
gulp.task('lint',()=>{
	log('Starting linting...');
	return gulp.src(['src/*.js','src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
gulp.task('test',(done)=>{
	log('Starting testing...');
	karmaServerOptions.singleRun = true;
	new KarmaServer(karmaServerOptions, done).start();
});
gulp.task('watch',(done)=>{
	new KarmaServer(karmaServerOptions, done).start();
});
gulp.task('build',['lint','test'],()=>{
	log('Starting build process...');
});

function log(message) {
	process.stdout.write(message);
}