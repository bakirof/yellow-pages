angular.module('app')
  .directive("placeMap", function () {
    return {
      restrict: 'E',
      templateUrl: "views/maps.html"
    }
  });
