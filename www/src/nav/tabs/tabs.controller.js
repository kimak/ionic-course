"use strict";

angular.module('places')
	.controller('TabsCtrl', function($scope,$ionicModal) {

		$scope.openModal= function(){

			$ionicModal.fromTemplateUrl('src/places/more/more.modal.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});

		}

	});