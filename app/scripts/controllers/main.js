'use strict';

/**
 * @ngdoc function
 * @name knightriderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the knightriderApp
 */
angular.module('knightriderApp')
  .controller('MainCtrl', function ($scope, $http) {
	$http.get('http://168.16.222.103:8080/users').
		then(function(response) {
			$scope.users = response.data;
			console.log($scope.users);
		});
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
  });
