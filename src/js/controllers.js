'use strict'

var fitsiiControllers = angular.module('fitsiiControllers', []);

fitsiiControllers.controller('articalListCtrl', ['$scope', '$http',
	function($scope, $http) {
	  $http.get("mock/articals.json").success(function(data) {
	  	$scope.mock = data;
  	})
	
  	$scope.order = 'age';
}]);

fitsiiControllers.controller('articalCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.get('mock/articals/' + $routeParams.articalId + '.json').success(function(data) {
			$scope.artical = data;
		})
		$scope.articalId = $routeParams.articalId;
}]);

fitsiiControllers.controller('yogaListCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('mock/poses.json').success(function(data) {
			$scope.poses = data;
		})
}]);

fitsiiControllers.controller('poseCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.get('mock/poses/' + $routeParams.poseId + '.json').success(function(data) {
			$scope.pose = data;
		})
		$scope.poseId = $routeParams.poseId;
}]);

fitsiiControllers.controller('hiitListCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('mock/hiit-list.json').success(function(data) {
			$scope.moves = data;
		})
}]);

fitsiiControllers.controller('moveCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.get('mock/hiit/' + $routeParams.moveId + '.json').success(function(data) {
			$scope.move = data;
		})
		$scope.moveId = $routeParams.moveId;
}]);

