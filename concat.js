'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = function (config) {
	return function () {
		return gulp.
			src(config.src).
			pipe(concat(config.filename)).
			pipe(gulp.dest(config.dest));
	};
};
