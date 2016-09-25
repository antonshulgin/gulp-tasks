// jshint node: true
// jshint esnext: true
'use strict';

const gulp = require('gulp');
const del = require('del');

module.exports = function (config) {
	const stuff = [
		config.dist.root
	];

	gulp.task('clean', function () {
		del.sync(stuff, {
			force: true
		});
	});
};
