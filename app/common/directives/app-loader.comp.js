'use strict';

/**
 * App UI component that displays a loader over the content it is siblings with
 *
 * EXAMPLE 1: <app-loader></app-loader>
 * EXAMPLE 2: <app-loader dimmer="show" loader-size="large"></app-loader>
 */
angular.module('app.common.loader', [])
.component('appLoader', {
	bindings: {
		loaderSize: '@',
		dimmer: '@',
	},
	controller: function() {
		if (this.dimmer && this.dimmer == 'show') {
			this.isDimmer = true;
		} else {
			this.isDimmer = false;
		}
	},
	template: '<div ng-if="$ctrl.isDimmer" class="ui active dimmer"><div class="ui {{ $ctrl.loaderSize }} text loader">Loading</div></div>' +
						'<div ng-if="!$ctrl.isDimmer" class="ui {{ $ctrl.loaderSize }} active text loader">Loading</div>',
});
