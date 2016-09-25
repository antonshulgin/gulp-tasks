// jshint node: true
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

module.exports = function (config) {

	gulp.task('process-javascript', function () {
		return gulp
			.src(config.src.js)
			.pipe(jshint())
			.pipe(jshint.reporter('default'))
			.pipe(sourcemaps.init())
			.pipe(concat(config.dist.filenames.js))
			.pipe(uglify())
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(config.dist.root));
	});

	gulp.task('watch-javascript', function () {
		gulp.watch(config.src.js, [
			'process-javascript'
		]);
	});

};
