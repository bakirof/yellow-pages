'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
angular.module('app')
  .controller('MainCtrl', ['$scope', '$cookies', 'user', function ($scope, $cookies, user) {
    $scope.inEx='Вход';
    $scope.test = user.query();
    $scope.in = function () {
      for (var i = 0; i < $scope.test.length; i++) {
        if ($scope.login == $scope.test[i].userEmail && $scope.pw == $scope.test[i].userPW) {
          //Логин-пароль правильные
          $cookies.au = true;
          $scope.login = undefined;
          $scope.pw = undefined;
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
      if($scope.au){
        delete $cookies["au"];
        console.log($cookies.au);
        $scope.au = false;
        $scope.inEx='Выход';
      }
      else{
        $scope.inEx='Вход';
      }

    }

  }]);
