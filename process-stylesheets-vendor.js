// jshint node: true
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = function (config) {

	gulp.task('process-stylesheets-vendor', function () {
		return gulp
			.src(config.vendor.css)
			.pipe(concat(config.vendor.filenames.css))
			.pipe(gulp.dest(config.dist.root));
	});

};
