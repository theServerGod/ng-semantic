(function() {
	'use strict';

	angular
		.module('app.core.global', [])
		.controller('GlobalCtrl', GlobalCtrl);

	function GlobalCtrl($rootScope, $scope, config, logger, appModalService) {
		// ViewModel
		var vm = this;

		vm.appTitle = config.appTitle;
		vm.area = null;
		vm.modal = appModalService.action;
		vm.notify = logger;

		/**
		 * Listens to ui.router's stateChangeStart event to set the vm.area value,
		 * allowing templates to know what the base segment of the current app state is.
		 */
		$rootScope.$on('$stateChangeStart', function(e, newState, newParams, oldState, oldParams) {
			var startSegment;
			var startSegmentTest = /^(.*?)-/.exec(newState.name);
			vm.area = startSegmentTest ? startSegmentTest[1] :
				newState.url == '/' ? null :
				newState.name;
		});

	}
})();
