angular.module('app').directive('reviewHomeDirective', function () {
  return {
    restrict: "E",
    templateUrl: "components/review/review-home.directive.html",
    controller:"ReviewHomeController"
  }

});
