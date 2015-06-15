'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function (config) {
	return function () {
		var task = gulp.
			src(config.src).
			pipe(uglify()).
			pipe(gulp.dest(config.dest));

		if (config.callback) { task.pipe(config.callback()); }
		return task;
	};
};
