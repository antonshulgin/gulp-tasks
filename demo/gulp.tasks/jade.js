'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');

module.exports = function (config) {
	return function () {
		var task =  gulp.
			src(config.src).
			pipe(jade()).
			pipe(gulp.dest(config.dest));

		if (config.callback) { task.pipe(config.callback()); }
		return task;
	};
};
