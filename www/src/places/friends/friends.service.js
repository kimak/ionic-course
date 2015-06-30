angular.module('places').factory("FriendsService", function ($http, $q,$filter) {

	return {

		getGroupedFriends: function () {

			return this.getFriends().then(function(result){
				return $filter('groupByFirstLetter')(result.data);
			});

		},

		getFriends: function() {
			return $http.get("api/friends.json");
		}
	}

});