(function () {
	// jshint latedef: false
	'use strict';

	var module = angular.module('app', [
		'ngRoute',
		'app.feature'
	]);

	module.config([
		'$routeProvider',
		routeProvider
	]);

	module.config([
		'$locationProvider',
		locationProvider
	]);

	function routeProvider($routeProvider) {
		$routeProvider.otherwise({ redirectTo: '/' });
	}

	function locationProvider($locationProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});
	}

})();
