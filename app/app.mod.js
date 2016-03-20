'use strict';

/**
 * Initialise Angular app
 */
angular
	.module('app', [
		'ui.router',
		'app.common.uiInit',
		'app.common.loader',
		'app.common.loaderBox',
		'app.core.global',
		'app.core.home',
		'app.core.about',
	])
	.constant('APP_TITLE', 'App Title')
	.config(function($stateProvider, $urlRouterProvider) {

		// For any unmatched url, redirect to /
		$urlRouterProvider.otherwise('/');

		// States are defined in their corresponding module
	});
