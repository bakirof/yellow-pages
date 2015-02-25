'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
angular.module('app')
  .controller('MainCtrl', ['$scope', '$cookies', 'user', '$state', function ($scope, $cookies, user, $state) {

    $scope.test = user.query();
    $scope.in = function () {
      for (var i = 0; i < $scope.test.length; i++) {
        if ($scope.login == $scope.test[i].userEmail && $scope.pw == $scope.test[i].userPW) {
          $cookies.au = true;
          $cookies.i=i;
          $state.go('state1.home', {}, {reload: true});
          location.reload();
          break;
        }
        else {
          delete $cookies["au"];
          delete $cookies["user"];
          delete $cookies["i"];
        }
      }
    };
    $scope.i=$cookies.i;
    $scope.au = $cookies.au;
    $scope.exit = function () {
      if ($scope.au) {
        delete $cookies["au"];
        delete $cookies["user"];
        delete $cookies["i"];
        $scope.au = false;
        location.reload();
      }
    };
    if ($scope.au) {
      $scope.inEx = "Выход";
    }
    else {
      $scope.inEx = "Вход";
    }


  }]);

