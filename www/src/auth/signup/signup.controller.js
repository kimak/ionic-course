angular.module('places')
	.controller('SignupCtrl', function($scope,LoginService,$state) {


		$scope.signUp=function(){

			LoginService.signUp($scope.email,$scope.password)
				.then(function(){

					$scope.closeModal();

					$state.go('tab.my-place');

			});

		};

	});


