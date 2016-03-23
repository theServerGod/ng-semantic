(function() {
	'use strict';

	var appConfig = angular.module('app');

	// Config must always be defined BEFORE `.value('config', config)`
	var config = {
		appTitle: 'App Title',
		version: '1.0.0'
	};

	appConfig.value('config', config);
	appConfig.config(routeConfig);
	appConfig.config(toastrConfig);

	/**
	 * Initial / default route configuration
	 */
	function routeConfig($stateProvider, $urlRouterProvider) {
		// States are defined in their corresponding module

		// For any unmatched url, redirect to /
		$urlRouterProvider.otherwise('/');
	}

	/**
	 * toastr lib configuration
	 */
	function toastrConfig(toastr) {
		toastr.options = {
			"closeButton": true,
			"debug": false,
			"newestOnTop": true,
			"progressBar": true,
			"positionClass": "toast-top-right",
			"preventDuplicates": false,
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		};
	}
})();
