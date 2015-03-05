angular.module('app').controller('myRwDirController', ['$scope', 'placeReview', function ($scope, placeReview) {

  $scope.place = placeReview.get({id: $scope.review.userPlaceId});

}]);
