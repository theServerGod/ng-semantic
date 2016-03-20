'use strict';

angular.module('app.core.home', [
	'ui.router',
])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/core/home/home.tpl.html',
			controller: 'homeCtrl',
			controllerAs: 'home'
		});
})
.controller('homeCtrl', function() {
	// ViewModel
	var vm = this;

	// Used to show/hide UI loaders
	vm.isLoading = true;

	// FIXME: Remove these test definitions
	vm.msg = 'Welcome!';
	vm.test = {};
	vm.success = function() {
		alert('Success!');
	};

});
