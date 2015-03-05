angular.module('app').controller('MyReviewsController', ['$scope', 'myReviews', '$cookies', function ($scope, myReviews, $cookies) {
  $scope.myReviews = myReviews.query({userId: $cookies.id});


}]);
