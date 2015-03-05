angular.module('app')
  .directive("placeMapDirective", function () {
    return {
      restrict: 'E',
      templateUrl: "components/main/place/place-item/place-item-map-directive.html",
      controller:'PlaceItemMapController'
    }
  });
