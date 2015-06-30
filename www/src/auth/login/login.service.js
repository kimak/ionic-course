angular.module('places').factory("LoginService", function (FirebaseService,$q) {

	return {

		login: function(email,password) {
			return FirebaseService.login(email,password);
		},

		logout:function(){

			FirebaseService.logout();

			//trigger promise because firebase logout doesn't return promise
			var defer = $q.defer();
			defer.resolve();
			return defer.promise;
		},

		signUp:function(email, password){
			return FirebaseService.signUp(email,password);
		},

		requireAuth:function(){
			return FirebaseService.requireAuth();
		}
	}

});