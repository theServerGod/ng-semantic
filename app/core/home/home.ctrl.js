(function() {
	'use strict';

	angular
		.module('app.core.home')
		.controller('HomeCtrl', HomeCtrl);

	function HomeCtrl() {
		// ViewModel
		var vm = this;

		// Used to show/hide UI loaders
		vm.isLoading = true;
		vm.msg = 'Welcome!';
		vm.test = {};
		vm.success = success;

		function success() {
			alert('Success!');
		}
	}
})();
