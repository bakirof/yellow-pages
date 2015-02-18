'use strict';

/**
 * @ngdoc overview
 * @name test1App
 * @description
 * # test1App
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider',function ($routeProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/in', {
          templateUrl: 'views/in.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

  }]);
