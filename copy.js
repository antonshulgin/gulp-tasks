'use strict';

var gulp = require('gulp');

module.exports = function (config) {
	return function () {
		var task = gulp.
			src(config.src).
			pipe(gulp.dest(config.dest));

		if (config.callback) { task.pipe(config.callback()); }
		return task;
	};
};
