angular.module('app').directive('reviewDirective', function () {
  return {
    restrict: "E",
    templateUrl: "views/partials/review/reviewDir.html",
    controller:"myRwDirController"
  }

});
