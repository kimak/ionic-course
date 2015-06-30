angular.module('places').factory("FirebaseService", function ($firebaseAuth) {

	var ref = new Firebase('https://ionic-places.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	return {

		login: function (email,password) {

			//log with email and password
		},

		signUp: function (email, password) {

			var promise = auth.$createUser({
				email: email,
				password: password
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		}
	}

});