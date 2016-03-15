'use strict';

/**
 * Initialise Angular app
 */
var app = angular.module('app', [
	'ui.router',
	'app.common.uiInit',
	'app.common.loader',
	'app.common.loaderBox',
	'app.core.global',
	'app.core.home',
	'app.core.about',
]);

app.config(function($stateProvider, $urlRouterProvider) {

	// For any unmatched url, redirect to /
	$urlRouterProvider.otherwise('/');

	// States are defined in their corresponding module
});
