// jshint node: true
'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');

module.exports = function (config) {

	gulp.task('process-templates', function () {
		return gulp
			.src(config.src.pug)
			.pipe(pug())
			.pipe(gulp.dest(config.dist.root));
	});

	gulp.task('watch-templates', function () {
		gulp.watch(config.src.pug, ['process-templates']);
	});

};
