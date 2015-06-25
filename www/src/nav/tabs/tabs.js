angular.module('places')
	.config(function ($stateProvider) {

		$stateProvider

			// setup an abstract state for the tabs directive
			.state('tab', {
				url: "/tab",
				abstract: true,
				templateUrl: "src/nav/menu/menu.html"
			})
			// Each tab has its own nav history stack:
			.state('tab.my-place', {
				url: '/my-place',
				data:{
					title:"My place"
				},
				views: {
					'tab-my-place': {
						templateUrl: 'src/places/mines/my-place.html',
						controller:'MyPlaceCtrl'
					}
				}
			})
			.state('tab.add-place', {
				url: '/add-place',
				data:{
					title:"Add place"
				},
				views: {
					'tab-add-place': {
						templateUrl: 'src/places/add/add-place.html'
					}
				}
			})
			.state('tab.around-me', {
				url: '/around-me',
				data:{
					title:"Around me"
				},
				views: {
					'tab-around-me': {
						templateUrl: 'src/places/around/around-me.html',
						controller:'AroundMeCtrl'
					}
				}
			})
			.state('tab.friends', {
				url: '/friends',
				data:{
					title:"Friends"
				},
				views: {
					'tab-friends': {
						templateUrl: 'src/places/friends/friends.html',
						controller:'FriendsCtrl'
					}
				}
			});

	});