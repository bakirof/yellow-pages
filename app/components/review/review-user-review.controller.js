angular.module('app').controller('ReviewUserReviewController', ['$scope', 'placeReview', function ($scope, placeReview) {

  $scope.place = placeReview.get({id: $scope.review.userPlaceId});

}]);
