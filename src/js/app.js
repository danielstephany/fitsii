'use strict'
var fitsiiApp = angular.module('fitsiiApp', []);

fitsiiApp.controller('articalListCtrl', function($scope, $http) {
  $http.get("mock/articals.json").success(function(data) {
  	$scope.mock = data;
  })

  	$scope.order = 'age';
});