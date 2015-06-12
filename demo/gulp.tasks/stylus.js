'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');

module.exports = function (config) {
	return function () {
		return gulp.
			src(config.src).
			pipe(stylus()).
			pipe(gulp.dest(config.dest));
	};
};
