angular.module('places')
	.config(function ($stateProvider) {

		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'src/login/login.html'
		});

	});