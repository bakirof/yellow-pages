angular.module('app').directive('placeDirective', function () {
  return {
    restrict: "E",
    templateUrl: "views/partials/place/placeDir.html",
    controller:"placeIdController"
  }

});
