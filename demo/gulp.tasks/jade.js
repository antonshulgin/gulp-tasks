'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');

module.exports = function (config) {
	return function () {
		return gulp.
			src(config.src).
			pipe(jade()).
			pipe(gulp.dest(config.dest));
	};
};
