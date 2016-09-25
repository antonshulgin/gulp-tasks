// jshint node: true
'use strict';

var gulp = require('gulp');

module.exports = function (config) {

	gulp.task('process-fonts', function () {
		return gulp
			.src(config.src.fonts)
			.pipe(gulp.dest(config.dist.root + 'fonts'));
	});

	gulp.task('watch-fonts', function () {
		gulp.watch(config.src.fonts, [
			'process-fonts'
		]);
	});

};


