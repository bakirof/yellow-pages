angular.module('app').directive('likePlace', function () {
  return {
    restrict: "E",
    templateUrl: "views/partials/like/likePlace.html",
    controller:"likePlaceController"
  }

});
