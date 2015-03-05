angular.module('app').controller('UserReviewsController', ['$scope', 'myReviews', '$cookies', function ($scope, myReviews, $cookies) {
  $scope.myReviews = myReviews.query({userId: $cookies.id});


}]);
