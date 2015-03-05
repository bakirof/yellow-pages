angular.module('app').directive('reviewPlaceItemDirective', function () {
  return {
    restrict: "E",
    templateUrl: "components/review/review-place-item.directive.html",
    controller:"ReviewPlaceItemController"
  }

});
