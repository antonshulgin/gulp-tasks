// jshint node: true
// jshint esnext: true
'use strict';

const gulp = require('gulp');

module.exports = function (config) {

	gulp.task('process-assets', function () {
		return gulp
			.src(config.src.assets)
			.pipe(gulp.dest(config.dist.root));
	});

	gulp.task('watch-assets', function () {
		gulp.watch(config.src.assets, [
			'process-assets'
		]);
	});

};
