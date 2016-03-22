(function() {
	'use strict';

	angular
		.module('app.core.home', ['ui.router'])
		.config(routeConfig);

	function routeConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/core/home/home.tpl.html',
				controller: 'HomeCtrl',
				controllerAs: 'home'
			});
	}
})();
