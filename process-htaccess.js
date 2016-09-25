// jshint node: true
'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

module.exports = function (config) {

	gulp.task('process-htaccess', function () {
		return gulp
			.src(config.src.htaccess)
			.pipe(rename('.htaccess'))
			.pipe(gulp.dest(config.dist.root));
	});

};

