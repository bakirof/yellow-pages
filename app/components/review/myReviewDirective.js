angular.module('app').directive('reviewDirective', function () {
  return {
    restrict: "E",
    templateUrl: "components/review/reviewDir.html",
    controller:"myRwDirController"
  }

});
