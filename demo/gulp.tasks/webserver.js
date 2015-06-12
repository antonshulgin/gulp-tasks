'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

module.exports = function (config) {
	return function () {
		return gulp.
			src(config.src).
			pipe(webserver(config.params));
	};
};
