(function() {
	'use strict';

	angular
		.module('app.common.modalService', [])
		.factory('appModalService', modalService);

	function modalService() {
		var service = {
			action: action
		};

		return service;

		/**
		 * Performs given action on any modals that match the given selector.
		 * @param {string} selector - modal element used to perform the given action on
		 * @param {string} [action=toggle] - Action supported by modal: e.g. 'show', 'hide', 'toggle'.
		 */
		function action(selector, action) {
			action = action || 'toggle';

			// Selector and action param must be a string, else exit function
			if (!angular.isString(selector) || !angular.isString(action)) return;

			angular.element(selector).modal(action);
		}
	}
})();
