angular.module('places')
	.controller('MenuCtrl', function($rootScope,$scope,LoginService,$state,$ionicSideMenuDelegate) {

		$scope.userName = LoginService.userEmail;

		$scope.logout=function(){

			LoginService.logout()
				.then(function(){
					
					$ionicSideMenuDelegate.toggleRight();
					$state.go('login');

				});

		};


		$rootScope.$on("loginSuccess",function(){
			$scope.userName = LoginService.userEmail;
		});

	});


