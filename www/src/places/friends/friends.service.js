angular.module('places').factory("FriendsService", function ($http, $q) {

	return {
		getFriends: function () {

			var defer = $q.defer();

			$http.get("api/friends.json").then(function (obj) {

				//make some structuration modification here

				defer.resolve(obj.data);

			}, function (error) {
				defer.reject(error);
			});

			return defer.promise;
		}
	}

});