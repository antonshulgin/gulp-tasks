'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function (config) {
	return gulp.
		src(config.src).
		pipe(uglify()).
		pipe(gulp.dest(config.dest));
};
