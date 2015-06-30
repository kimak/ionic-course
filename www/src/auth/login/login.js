angular.module('places')
	.config(function ($stateProvider) {

		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'src/auth/login/login.html',
			controller:'LoginCtrl'
		});

	});