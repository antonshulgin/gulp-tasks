'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

module.exports = function (config) {
	return function () {
		var task = gulp.
			src(config.src).
			pipe(templateCache(config.params)).
			pipe(gulp.dest(config.dest));

		if (config.callback) { task.pipe(config.callback()); }
		return task;
	};
};
