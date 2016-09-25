// jshint node: true
'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');

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
