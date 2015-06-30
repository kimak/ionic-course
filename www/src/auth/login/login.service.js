angular.module('places').factory("LoginService", function (FirebaseService) {

	return {

		login: function(email,password) {
			return FirebaseService.login(email,password);
		},

		signUp:function(email, password){
			return FirebaseService.signUp(email,password);
		},

		requireAuth:function(){
			return FirebaseService.requireAuth();
		}
	}

});