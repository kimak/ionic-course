"use strict";

angular.module('places')
	.controller('MyPlaceCtrl', function($rootScope,$scope,$state) {

		var list =[
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/2'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/3'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/4'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/5'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/6'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/7'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/8'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/9'
			}
		];

		//duplicate data to test performance
		for (var i = 0; i < 5; i++) {
			list = list.concat(list.slice(0))
		}
		//properties
		$scope.list = list;

		$scope.ok = true;


	});