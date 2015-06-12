'use strict';

var requireDir = require('require-dir');

var gulp   = require('gulp');
var config = require('./gulp.config.json');
var tasks  = requireDir('./gulp.tasks/', { camelcase: true });

// clean up the project
gulp.task('clean', tasks.clean({
	src: [
		config.dist.root,
		config.tmp.root
	]
}));

// jade --> html
// store the output in dist/ as a bunch of files with original hierarchy
gulp.task('compile-jade', tasks.jade({
	src:  config.src.jade,
	dest: config.dist.root
}));

// stylus --> css
// store the output in tmp/ as a bunch of files with original hierarchy
gulp.task('compile-stylus', tasks.stylus({
	src:  config.src.stylus,
	dest: config.tmp.root
}));

// concatenate project css
// store the output in tmp/ as app.css (uncompressed yet)
gulp.task('concat-css', ['compile-stylus'], tasks.concat({
	src:      config.tmp.css,
	filename: config.dist.filenames.css,
	dest:     config.tmp.root
}));

// concatenate vendor css, if any present (in our case it's Eric Meyer's reset.css)
// store the output in dist/ as vendor.css
gulp.task('concat-css-vendor', tasks.concat({
	src:      config.vendor.css,
	filename: config.vendor.filenames.css,
	dest:     config.dist.root
}));

// minify project css (uncompressed app.css that we saved in tmp/)
// store the output in dist/ as app.css
gulp.task('minify-css', ['concat-css'], tasks.minifyCss({
	src:  config.tmp.root + config.dist.filenames.css,
	dest: config.dist.root
}));

// concatenate project js
// store the output in tmp/ as app.js (uncompressed yet)
gulp.task('concat-js', tasks.concat({
	src:      config.src.js,
	filename: config.dist.filenames.js,
	dest:     config.tmp.root
}));

// concatenate vendor js
// store the output in dist/ as vendor.js
gulp.task('concat-js-vendor', tasks.concat({
	src:      config.vendor.js,
	filename: config.vendor.filenames.js,
	dest:     config.dist.root
}));

// minify project js (uncompressed app.js we saved in tmp/)
// store the output in dist/ as app.js
gulp.task('uglify', ['concat-js'], tasks.uglify({
	src:  config.tmp.root + config.dist.filenames.js,
	dest: config.dist.root
}));

// build the project
gulp.task('build', [
	'clean',
	'compile-jade',
	'compile-stylus',
	'concat-css',
	'concat-css-vendor',
	'minify-css',
	'concat-js',
	'concat-js-vendor',
	'uglify'
]);

// serve
gulp.task('serve', ['build'], tasks.webserver({
	src: config.dist.root,
	params: {
		livereload: false,
		open: true,
		fallback: 'app.html',
		directoryList: {
			enabled: false
		}
	}
}));

gulp.task('default', ['serve']);
