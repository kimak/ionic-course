angular.module('places')
	.controller('MenuCtrl', function($scope,LoginService,$state,$ionicSideMenuDelegate) {


		$scope.logout=function(){

			LoginService.logout()
				.then(function(){
					
					$ionicSideMenuDelegate.toggleRight();
					$state.go('login');

				});

		};

	});


