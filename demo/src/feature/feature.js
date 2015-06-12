(function () {
	// jshint latedef: false
	'use strict';

	var module = angular.module('app.feature', []);

	module.config([
		'$routeProvider',
		routeProvider
	]);

	function routeProvider($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/feature/feature.html'
		});
	}
})();
