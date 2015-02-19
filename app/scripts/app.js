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
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('state1', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('state1.home', {
        url: "/home",
        templateUrl: 'views/partials/home.html',
        controller: 'MainCtrl'
      })
      .state('state1.place', {
        url: "/place",
        templateUrl: 'views/partials/place.html',
        controller: 'place'
      })
      .state('state1.events', {
        url: "/events",
        templateUrl: 'views/partials/events.html',
        controller: 'MainCtrl'
      })
      .state('state1.discussion', {
        url: "/discussion",
        templateUrl: 'views/partials/discussion.html',
        controller: 'MainCtrl'
      })
      .state('state1.reviews', {
        url: "/reviews",
        templateUrl: 'views/partials/reviews.html',
        controller: 'MainCtrl'
      })
      .state('state2', {
        url: "/in",
        templateUrl: 'views/in.html',
        controller: 'AboutCtrl'
      })

  }]);
