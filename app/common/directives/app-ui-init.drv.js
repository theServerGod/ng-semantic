'use strict';

/**
 * Initialises Semantic UI's UI components, given the component name
 *
 * EXAMPLE 1 (Element): <app-ui-init app-ui-component="dropdown"></app-ui-init>
 * EXAMPLE 2 (Attribute): <select ng-model="select" class="ui search fluid dropdown" app-ui-init="dropdown">
 */
angular.module('app.common.uiInit', [])
.directive('appUiInit', function() {
	return {
		restrict: 'EA',
		link: function(scope, element, attrs) {
			switch (attrs.appUiComponent || attrs.appUiInit) {
				case 'accordion':
					$('.ui.accordion').accordion();
					break;
				case 'cardsHover':
					$('.special.cards .image').dimmer({
						on: 'hover'
					});
					break;
				case 'dropdown':
					$('.ui.dropdown').dropdown();
					break;
			}

			// Hide the element from the DOM
			element.css({
				display: 'none',
			});
		},
	};
});
