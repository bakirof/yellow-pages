angular.module('app').directive('likePlace', function () {
  return {
    restrict: "E",
    templateUrl: "components/review/likePlace.html",
    controller:"likePlaceController"
  }

});
