'use strict';

angular.module('app.core.home', [
	'ui.router',
])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'core/home/home.tpl.html',
			controller: 'homeCtrl'
		});
})
.controller('homeCtrl', function($scope) {
	$scope.isLoading = true;
	$scope.msg = 'Welcome!';
	$scope.test = {};

	$scope.success = function() {
		alert('Success!');
	};

	$scope.toggleModal = function() {
		$('#modalTest').modal('toggle');
	};
});
