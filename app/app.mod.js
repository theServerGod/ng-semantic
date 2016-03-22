(function() {
	'use strict';

	/**
	 * Initialise/bootstrap Angular app
	 */
	angular
		.module('app', [
			'ui.router',
			'app.common.modalService',
			'app.common.logger',
			'app.common.uiInit',
			'app.common.loader',
			'app.common.loaderBox',
			'app.core.global',
			'app.core.home',
			'app.core.about',
		])
		.constant('toastr', toastr)
		.constant('APP_TITLE', 'App Title')
		.config(routeConfig);

	function routeConfig($stateProvider, $urlRouterProvider) {
		// States are defined in their corresponding module

		// For any unmatched url, redirect to /
		$urlRouterProvider.otherwise('/');
	}
})();
