angular.module('app').directive('placeDirective', function () {
  return {
    restrict: "E",
    templateUrl: "components/review/placeDir.html",
    controller:"placeIdController"
  }

});
