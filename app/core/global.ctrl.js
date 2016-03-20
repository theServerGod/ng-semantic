'use strict';

angular.module('app.core.global', [])
.controller('globalCtrl', function($scope, $rootScope, APP_TITLE) {
	// ViewModel
	var vm = this;
	vm.APP_TITLE = APP_TITLE;
	vm.area = null;

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

	/**
	 * Performs given action on any modals that match the given selector.
	 * @param {string} selector - modal element used to perform the given action on
	 * @param {string} [action=toggle] - Action supported by modal: e.g. 'show', 'hide', 'toggle'.
	 */
	vm.modal = function(selector, action) {
		action = action || 'toggle';

		// Selector and action param must be a string, else exit function
		if (!angular.isString(selector) || !angular.isString(action)) return;

		angular.element(selector).modal(action);
	};

});
