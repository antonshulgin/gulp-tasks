'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

module.exports = function (config) {
	return function () {
		var task = gulp.
			src(config.src).
			pipe(webserver(config.params));

		if (config.callback) { task.pipe(config.callback()); }
		return task;
	};
};
