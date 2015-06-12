'use strict';

var del = require('del');

module.exports = function (config) {
	del(config.src, config.callback);
};
