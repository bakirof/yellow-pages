angular.module('app').directive('like', function () {
  return {
    restrict: "E",
    templateUrl: "components/main/place/like.html",
    controller:"LikeController"
  }

});
