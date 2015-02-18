'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the test1App
 */
angular.module('app')
  .controller('AboutCtrl', ['$scope', 'test',
    function ($scope, test) {
    console.log(  $scope.ok=test.query({db:'mydb', collection:'testData'}));

    }]);
