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
    'ui.router',
    'ymaps'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('state1', {
        templateUrl: 'pages/main/main.html',
        controller: 'AuthController'
      })
      .state('state1.home', {
        url: "/home",
        templateUrl: 'pages/main/home/home.html',
        controller: 'HomeController'

      })
      .state('state1.place', {
        url: "/place",
        templateUrl: 'pages/main/place/place.html',
        controller: 'PlaceController'

      })
      .state('state1.events', {
        url: "/events",
        templateUrl: 'pages/main/events/events.html',
        controller: 'AuthController'
      })
      .state('state1.discussion', {
        url: "/discussion",
        templateUrl: 'pages/main/discussion/discussion.html',
        controller: 'AuthController'
      })
      .state('state1.reviews', {
        url: "/reviews",
        templateUrl: 'views/partials/reviews.html',
        controller: 'AuthController'
      })
      .state('state1.placeOne', {
        url: '/place/:id',
        templateUrl: 'pages/main/place/place-item/place.html',
        controller: 'PlaceItemController'
      })
      .state('state2', {
        url: "/in",
        templateUrl: 'pages/auth/auth.html',
        controller: 'AuthController',
        reload: true,
        inherit: false
      })
      .state('state3', {
        url: "/reg",
        templateUrl: 'pages/registration/reg.html',
        controller: 'AuthController'
      })
      .state('state1.settings', {
        url: "/settings",
        templateUrl: 'pages/user-settings/settings.html',
        controller: 'SettingsController'
      })
      .state('state1.myReviews', {
        url: "/my-reviews",
        templateUrl: 'pages/user-reviews/reviews.html',
        controller: 'MyReviewsController'
      })
  }])
  .config(['$resourceProvider', function ($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs

    $resourceProvider.defaults.actions.update = {method: "PUT"}
  }]);
