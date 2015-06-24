angular.module('places')
	.config(function ($stateProvider) {

		$stateProvider

			// setup an abstract state for the tabs directive
			.state('tab', {
				url: "/tab",
				abstract: true,
				templateUrl: "src/tabs/tabs.html"
			})
			// Each tab has its own nav history stack:
			.state('tab.my-place', {
				url: '/my-place',
				data:{
					title:"My place"
				},
				views: {
					'tab-my-place': {
						templateUrl: 'src/tabs/views/0_my-place.html'
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
						templateUrl: 'src/tabs/views/1_add-place.html'
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
						templateUrl: 'src/tabs/views/2_around-me.html'
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
						templateUrl: 'src/tabs/views/3_friends.html'
					}
				}
			});

	});