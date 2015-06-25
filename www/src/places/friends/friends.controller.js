angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService) {

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		FriendsService.getFriends().then(function(data){

			$scope.friends = data;
			$ionicLoading.hide();

		});


	});
