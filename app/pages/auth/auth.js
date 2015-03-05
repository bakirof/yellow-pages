'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:AuthController
 * @description
 * # AuthController
 * Controller of the test1App
 */
angular.module('app')
  .controller('AuthController', ['$scope', '$cookies', '$rootScope', 'user', '$state', function ($scope, $cookies, $rootScope, user, $state) {

    $scope.test = user.query().$promise.then(function(val){
      $scope.test=val;
      if ($scope.test[$scope.i].userLikePlace.length != 0) {
        $scope.haveLikes = true;
      }
      else {
        $scope.haveLikes = false;
      }

    });
    $scope.in = function () {
      for (var i = 0; i < $scope.test.length; i++) {
        if ($scope.login == $scope.test[i].userEmail && $scope.pw == $scope.test[i].userPW) {
          $cookies.au = true;
          $cookies.i=i;
          $cookies.id=$scope.test[i]._id;
          $state.go('state1.home', {}, {reload: true});
          setTimeout(function(){location.reload()},10);
          break;
        }
        else {
          delete $cookies["au"];
          delete $cookies["user"];
          delete $cookies["i"];
          delete $cookies["id"];
        }
      }
    };

    $scope.i=$cookies.i;
    $rootScope.i=$scope.i;
    $rootScope.id=$cookies.id;
    $scope.au = $cookies.au;
    $rootScope.au=$scope.au;
    $scope.exit = function () {
      if ($scope.au) {
        delete $cookies["au"];
        delete $cookies["user"];
        delete $cookies["i"];
        delete $cookies["id"];
        $scope.au = false;
        setTimeout(function(){location.reload()},10);
      }
    };
    if ($scope.au) {
      $scope.inEx = "Выход";
    }
    else {
      $scope.inEx = "Вход";
    }


  }]);

