angular.module('app').directive('reviewHomeItemDirective', function () {
  return {
    restrict: "E",
    templateUrl: "components/review/review-home-item.directive.html",
    controller:"ReviewHomeItemController"
  }

});
