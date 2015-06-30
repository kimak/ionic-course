angular.module('places').factory("FriendsService", function ($http, $q) {

	return {

		getGroupedFriends: function () {

			var defer = $q.defer();
			this.getFriends().then(function(result){

				var grouped =_.groupBy(result.data, function(n) {
					return n.name.substring(0,1);
				});
				
				defer.resolve(grouped);

			},function(error){
				defer.reject(error);
			});
			return defer.promise;
		},

		getFriends: function() {
			return $http.get("api/friends.json");
		}
	}

});