angular.module('app').directive('itemsLikePlace', function () {
  return {
    restrict: "E",
    templateUrl: "components/review/itemsLikePlace.html",
    controller:"itemsLikePlaceController"
  }

});
