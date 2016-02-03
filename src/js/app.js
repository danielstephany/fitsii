'use strict'

var fitsiiApp = angular.module('fitsiiApp', [
	'ngRoute',
	'ngAnimate',
	'fitsiiControllers'
]);

fitsiiApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/main.html'
		}).
		when('/articals', {
			templateUrl: 'partials/artical-list.html',
			controller: 'articalListCtrl'
		}).
		when('/articals/:articalId', {
			templateUrl: 'partials/artical.html',
			controller: 'articalCtrl'
		}).
		when('/yoga', {
			templateUrl: 'partials/yoga-list.html',
			controller: 'yogaListCtrl'
		}).
		when('/yoga/:poseId', {
			templateUrl: 'partials/pose.html',
			controller: 'poseCtrl'
		}).
		when('/hiit', {
			templateUrl: 'partials/hiit-list.html',
			controller: 'hiitListCtrl'
		}).
		when('/hiit/:moveId', {
			templateUrl: 'partials/move.html',
			controller: 'moveCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);













