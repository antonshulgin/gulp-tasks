// jshint node: true
// jshint esnext: true
'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');

module.exports = function (config) {

	gulp.task('process-stylesheets-vendor', function () {
		return gulp
			.src(config.vendor.css)
			.pipe(concat(config.vendor.filenames.css))
			.pipe(gulp.dest(config.dist.root));
	});

};
