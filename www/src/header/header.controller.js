"use strict";

angular.module('places')
	.controller('HeaderCtrl', function($rootScope,$scope,$state) {

		//properties
		$scope.enabled = _isEnabled();
		$scope.title = _getTitle();

		//events
		$rootScope.$on('$stateChangeSuccess',
			function(event, toState, toParams, fromState, fromParams){

				$scope.title = _getTitle();
				$scope.enabled = _isEnabled();

		});

		//privates
		function _isEnabled(){
			return !$state.is("login");
		};

		function _getTitle(){
			return ($state.$current.data) ? $state.$current.data.title : "";
		};

	});