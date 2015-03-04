angular.module('app').directive('itemsLikePlace', function () {
  return {
    restrict: "E",
    templateUrl: "views/partials/like/itemsLikePlace.html",
    controller:"itemsLikePlaceController"
  }

});
