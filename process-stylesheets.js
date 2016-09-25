// jshint node: true
// jshint esnext: true
'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

module.exports = function (config) {

	gulp.task('process-stylesheets', function () {
		return gulp
			.src(config.src.styl)
			.pipe(stylus())
			.pipe(concat(config.dist.filenames.css))
			.pipe(cleanCss())
			.pipe(gulp.dest(config.dist.root));
	});

	gulp.task('watch-stylesheets', function () {
		gulp.watch(config.src.styl, ['process-stylesheets']);
	});

};
