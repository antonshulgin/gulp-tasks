// jshint node: true
// jshint esnext: true
'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');

module.exports = function(config) {

	gulp.task('process-javascript-vendor', function () {
		return gulp
			.src(config.vendor.js)
			.pipe(concat(config.vendor.filenames.js))
			.pipe(gulp.dest(config.dist.root));
	});

};
