angular.module('app').directive('reviewUserReviewDirective', function () {
  return {
    restrict: "E",
    templateUrl: "components/review/review-user-review.directive.html",
    controller:"ReviewUserReviewController"
  }

});
