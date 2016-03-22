(function() {
	'use strict';

	angular
		.module('app.core.about', ['ui.router'])
		.config(routeConfig);

	function routeConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('about', {
				url: '/about',
				templateUrl: '/core/about/about.tpl.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			});
	}
})();
