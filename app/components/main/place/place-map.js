angular.module('app')
  .directive("placeMap", function () {
    return {
      restrict: 'E',
      templateUrl: "components/main/place/maps.html"
    }
  });
