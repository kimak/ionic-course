angular.module('places').filter('groupByFirstLetter',function(){
	return function(array) {
		return _.groupBy(array, function(n) {
			return n.name.substring(0,1);
		});
	};
});