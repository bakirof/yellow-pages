'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
angular.module('app')
  .controller('MainCtrl', ['$scope','$cookies',function ($scope,$cookies) {
   $cookies.yellow=true;
    if ($cookies.yellow==true){
     $scope.coo='yes';
   }
    else{
     $scope.coo='no';
   }
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

console.log($scope.search);


  }]);
