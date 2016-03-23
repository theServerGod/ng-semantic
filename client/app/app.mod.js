(function() {
	'use strict';

	/**
	 * Initialise/bootstrap Angular app
	 */
	angular
		.module('app', [
			'ui.router',
			'app.common.layout',
			'app.common.modal',
			'app.common.logger',
			'app.common.uiInit',
			'app.common.loader',
			'app.core.global',
			'app.core.home',
			'app.core.about',
		])

		/*
		 * Declare required non-Angular third party libraries
		 */
		.constant('toastr', toastr);
})();
