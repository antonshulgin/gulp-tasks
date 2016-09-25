// jshint node: true
// jshint esnext: true
'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');

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
