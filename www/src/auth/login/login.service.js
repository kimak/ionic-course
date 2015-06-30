angular.module('places').factory("LoginService", function (FirebaseService) {

	return {

		login: function() {

		},

		signUp:function(email, password){
			return FirebaseService.signUp(email,password);
		}
	}

});