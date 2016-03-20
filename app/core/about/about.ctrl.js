'use strict';

angular.module('app.core.about', [
	'ui.router',
])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('about', {
			url: '/about',
			templateUrl: '/core/about/about.tpl.html',
			controller: 'aboutCtrl',
			controllerAs: 'about'
		});
})
.controller('aboutCtrl', function() {

});
