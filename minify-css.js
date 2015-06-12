'use strict';

var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

module.exports = function (config) {
	return gulp.
		src(config.src).
		pipe(minifyCss()).
		pipe(gulp.dest(config.dest));
};
