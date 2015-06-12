'use strict';

var del = require('del');

module.exports = function (config) {
	return function () {
		del(config.src, config.callback);
	};
};
