'use strict';

var del = require('del');

module.exports = function (config) {
	return function () {
		del.sync(config.src, { force: true }, config.callback);
	};
};
