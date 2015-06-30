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

		logout:function(){

			//$unauth dosen't return a promise because it's a synchronous event
			//https://github.com/firebase/angularfire/issues/581
			auth.$unauth();

		},

		signUp: function (email, password) {

			var that = this;

			var promise = auth.$createUser({
				email: email,
				password: password
			}).then(function(authData) {

				promise = that.login(email,password);
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