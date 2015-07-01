angular.module('places')
	.controller('AddPlaceCtrl', function($scope,$ionicPlatform, $cordovaCamera) {

	$scope.imageSrc = "";

	$scope.openPicture = function(){

		//docs : http://ngcordova.com/docs/plugins/camera/
		// https://github.com/apache/cordova-plugin-camera/#cameraoptions

		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 100,
			targetHeight: 100,
			saveToPhotoAlbum: false
		};

		// avoid promise to send null data if camera is not supported
		// https://github.com/driftyco/ng-cordova/blob/master/src/plugins/camera.js
		if(navigator.camera){

			$cordovaCamera.getPicture(options).then(function(imageData) {

				$scope.imageSrc  = "data:image/jpeg;base64," + imageData;

			}, function(err) {
				// error
				alert("error : "+err);
			});

		}else{
			console.log("Camera plugin not available in the browser.")
		}

	}

});