angular.module('app').directive('like', function () {
  return {
    restrict: "E",
    templateUrl: "views/partials/like/like.html",
    controller:"likeController"
  }

});
