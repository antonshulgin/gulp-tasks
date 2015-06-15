'use strict';

var connect = require('gulp-connect');

module.exports = function (config) {
	return function () {
		return connect.server(config);
	};
};
