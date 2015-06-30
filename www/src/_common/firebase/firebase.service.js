angular.module('places').factory("FirebaseService", function ($firebaseAuth) {

	var ref = new Firebase('https://ionic-places.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	return {

		login: function (email,password) {

			var promise = auth.$authWithPassword({
				email: email,
				password: password
			}).catch(function(error) {

				alert("FirebaseService. Authentication failed:" + error);
				return promise;
			});

			return promise;
		},

		signUp: function (email, password) {

			var promise = auth.$createUser({
				email: email,
				password: password
			}).then(function(authData) {
				console.log("created in as:", authData.uid);

				return promise;
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		},

		requireAuth : function(){
			return auth.$requireAuth();
		}
	}

});