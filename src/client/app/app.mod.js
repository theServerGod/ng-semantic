(function() {
	'use strict';

	/**
	 * Initialise/bootstrap Angular app
	 */
	angular
		.module('app', [
			/*
			 * External Angular modules
			 */
			'ui.router',

			/*
			 * App shared modules
			 */
			'app.common.layout',
			'app.common.modal',
			'app.common.logger',
			'app.common.uiInit',
			'app.common.loader',

			/*
			 * Feature areas
			 */
			'app.core.global',
			'app.core.home',
			'app.core.about',
		])

		/*
		 * Declare required non-Angular third party libraries
		 */
		.constant('lodash', _)
		.constant('moment', moment)
		.constant('toastr', toastr);
})();
