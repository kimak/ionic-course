"use strict";

angular.module('places')
	.controller('HeaderCtrl', function($rootScope,$scope,$state) {

		//properties
		$scope.enabled = false;
		$scope.title = "";

		//events
		$rootScope.$on('$stateChangeSuccess',
			function(event, toState, toParams, fromState, fromParams){

				if(toState.data) $scope.title = toState.data.title;
				$scope.enabled = !$state.is("login");

			});

	});
