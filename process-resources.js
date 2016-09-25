// jshint node: true
'use strict';

var gulp = require('gulp');

module.exports = function (config) {

	gulp.task('process-resources', function () {
		return gulp
			.src(config.src.resources)
			.pipe(gulp.dest(config.dist.root));
	});

	gulp.task('watch-resources', function () {
		gulp.watch(config.src.resources, [
			'process-resources'
		]);
	});

};

