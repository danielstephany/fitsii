'use strict'
var fitsiiApp = angular.module('fitsiiApp', []);

fitsiiApp.controller('articalListCtrl', function($scope, $http) {
  $http.get("db/articals.json").success(function(data) {
  	$scope.articals = data;
  })

  	$scope.order = 'age';
});