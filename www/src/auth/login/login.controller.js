angular.module('places')
	.controller('LoginCtrl', function($scope, $ionicLoading,$ionicModal,LoginService,$state) {



		$scope.login=function(){

			$ionicLoading.show();

			LoginService.login($scope.email,$scope.password)
				.then(function(){

					$state.go('tab.my-place');
					$ionicLoading.hide();
				});
		};


		$scope.openSignUp= function(){

			$ionicModal.fromTemplateUrl('src/auth/signup/signup.modal.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});
		}


	});


