(function() {
	'use strict';

	angular
		.module('app.common.logger', [])
		.factory('logger', logger);

	logger.$inject = ['$log', 'toastr'];

	function logger($log, toastr) {
		var service = {
			showToasts: true,

			error: error,
			info: info,
			success: success,
			warning: warning,

			// straight to console; bypass toastr
			log: $log.log
		};

		toastr.options = {
			"closeButton": true,
			"debug": false,
			"newestOnTop": true,
			"progressBar": true,
			"positionClass": "toast-top-right",
			"preventDuplicates": false,
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		}

		return service;

		function error(message, data, title) {
			toastr.error(message, title);
			$log.error('Error: ' + message, data);
		}

		function info(message, data, title) {
			toastr.info(message, title);
			$log.info('Info: ' + message, data);
		}

		function success(message, data, title) {
			toastr.success(message, title);
			$log.info('Success: ' + message, data);
		}

		function warning(message, data, title) {
			toastr.warning(message, title);
			$log.warn('Warning: ' + message, data);
		}
	}
})();
