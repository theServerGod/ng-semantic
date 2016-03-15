'use strict';

angular.module('app.core.global', [])
.controller('globalCtrl', function($scope, $rootScope) {
	$scope.area = null;

	/**
	 * Listens to ui.router's stateChangeStart event to set the $scope.area value,
	 * allowing templates to know what the current app state is.
	 */
	$rootScope.$on('$stateChangeStart', function(e, newState, newParams, oldState, oldParams) {
		var startSegment;
		var startSegmentTest = /^(.*?)-/.exec(newState.name);
		$scope.area = startSegmentTest ? startSegmentTest[1] :
			newState.url == '/' ? null :
			newState.name;
	});

});
