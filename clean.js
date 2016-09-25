// jshint node: true
'use strict';

var gulp = require('gulp');
var del = require('del');

module.exports = function (config) {
	var stuff = [
		config.dist.root
	];

	gulp.task('clean', function () {
		del.sync(stuff, {
			force: true
		});
	});
};
