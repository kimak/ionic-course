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
			.state('tab.new_spot', {
				url: '/new_spot',
				views: {
					'tab-new_spot': {
						templateUrl: 'src/tabs/views/tab-new_spot.html'
					}
				}
			})
			.state('tab.spotted_list', {
				url: '/spotted_list',
				views: {
					'tab-spotted_list': {
						templateUrl: 'src/tabs/views/tab-spotted_list.html'
					}
				}
			})
			.state('tab.friends', {
				url: '/friends',
				views: {
					'tab-friends': {
						templateUrl: 'src/tabs/views/tab-friends.html'
					}
				}
			})
			.state('tab.around_me', {
				url: '/around_me',
				views: {
					'tab-around_me': {
						templateUrl: 'src/tabs/views/tab-around_me.html'
					}
				}
			});

	});