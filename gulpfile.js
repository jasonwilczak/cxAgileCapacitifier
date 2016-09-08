/* globals __dirname, process */
'use strict';

//variables
const gulp = require('gulp');
const KarmaServer = require('karma').Server;
const eslint = require('gulp-eslint');
const clean = require('gulp-clean');
const fs = require('fs');
const jsonFile = require('jsonfile');
const Builder = require('systemjs-builder');
const path = require('path');

const filesToMove = [
	'./src/content/**/*',
	'!./src/scripts/.js',
	'!./src/scripts/**/*.js',
	'./src/manifest.json',
	'./src/icon.png',
	'./src/popup.html'
];
let karmaServerOptions = {
	configFile: __dirname + '/karma.conf.js'
};

//tasks
gulp.task('default',()=>{

});
gulp.task('lint',()=>{
	log('Starting linting...');
	return gulp.src(['src/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
gulp.task('test',['lint'],(done)=>{
	log('Starting testing...');
	karmaServerOptions.singleRun = true;
	new KarmaServer(karmaServerOptions, done).start();
});
gulp.task('watch',(done)=>{
	new KarmaServer(karmaServerOptions, done).start();
});
gulp.task('clean',()=>{
	log('Cleaning dist folder...');
	return gulp.src(['dist/*','!dist/*.js'], {read:false})
  .pipe(clean());
});
gulp.task('move',['clean'],()=>{
	log('Moving files from src to dist');
	gulp.src(filesToMove, { base: './src/' })
  .pipe(gulp.dest('dist'));
});
gulp.task('build',['clean'],()=>{
	log('Starting build process...');
	let builder = new Builder();
	builder.config({
		baseUrl: './src/scripts',
		map: {
			'plugin-babel': 'src/scripts/libs/systemjs-plugin-babel/plugin-babel.js',
			'systemjs-babel-build': 'src/scripts/libs/systemjs-plugin-babel/systemjs-babel-browser.js',
		},
		transpiler: 'plugin-babel',
	});
	builder.buildStatic('src/scripts/popup.js','dist/scripts/popup.js',{sourceMaps:true,runtime:false});
});
gulp.task('build-minor',['increment-version-minor','build','move'],()=>{
	log('Building minor version');
});
gulp.task('build-major',['increment-version-major','build','move'],()=>{
	log('Building major version');
});
gulp.task('increment-version-minor', ()=>{
	incrementVersion(false,true);
});
gulp.task('increment-version-major', ()=>{
	incrementVersion(true,false);
});

function log(message) {
	process.stdout.write(message);
}
function incrementVersion(isMajor, isMinor) {
	
    //docString is the file from which you will get your constant string
	const file = './src/manifest.json';
	const manifestObject = getManifestObject(file);
	const currentVersionNumber = getVersionNumber(manifestObject);
    //...Split the version number string into elements so you can bump the one you want
	const versionParts = currentVersionNumber.split('.');
	const vArray = {
		vMajor : versionParts[0],
		vMinor : versionParts[1]
	};

	if(isMajor) {
		vArray.vMajor = parseInt(vArray.vMajor) + 1;
		vArray.vMinor = 0;
	}
	if(isMinor) {
		vArray.vMinor = parseInt(vArray.vMinor) + 1;
	}
	const periodString = '.';

	const newVersionNumber = vArray.vMajor + periodString + vArray.vMinor;
	manifestObject.version = newVersionNumber; 
	jsonFile.writeFileSync(file, manifestObject,{spaces:2});
}
function getManifestObject(file) {
	const docString = fs.readFileSync(file, 'utf8');
	const manifestObject = JSON.parse(docString);
	return manifestObject;
}
function getVersionNumber(manifestObject) {
	return manifestObject.version;
}
