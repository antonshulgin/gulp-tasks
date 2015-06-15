'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');

module.exports = function (config) {
	return function () {
		var task = gulp.
			src(config.src).
			pipe(stylus(config.params)).
			pipe(gulp.dest(config.dest));

		if (config.callback) { task.pipe(config.callback()); }
		return task;
	};
};
