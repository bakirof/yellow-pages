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
          //Логин-пароль правильные
          $cookies.au = true;
          $scope.login = undefined;
          $scope.pw = undefined;
          $scope.au = $cookies.au;
          $state.go('state1.home', {}, {reload: true});

          location.reload();

        }
        else {
          $cookies.au = false;
          $scope.login = undefined;
          $scope.pw = undefined;

        }
      }
    };
    $scope.au = $cookies.au;

    $scope.exit = function () {
      if ($scope.au) {
        delete $cookies["au"];
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

