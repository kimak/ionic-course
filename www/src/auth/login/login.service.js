angular.module('places').factory("LoginService", function ($rootScope,FirebaseService,$q) {

	return {

		userEmail : "",
		login: function(email,password) {
			var that = this;
			var promise = FirebaseService.login(email,password)
				.then(function(){

					that.userEmail = email;
					$rootScope.$broadcast("loginSuccess");
					return email;
				});
			return promise;
		},

		logout:function(){

			this.userEmail = "";
			FirebaseService.logout();

			//trigger promise because firebase logout doesn't return promise
			var defer = $q.defer();
			defer.resolve();
			return defer.promise;
		},

		signUp:function(email, password){
			var that = this;
			return FirebaseService.signUp(email,password)
			.then(function(){

				that.userEmail = email;
				$rootScope.$broadcast("loginSuccess");
				return email;
			});
		},

		requireAuth:function(){
			return FirebaseService.requireAuth();
		}
	}

});