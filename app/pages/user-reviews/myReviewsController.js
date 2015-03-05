angular.module('app').controller('myReviewsController', ['$scope', 'myReviews', '$cookies', function ($scope, myReviews, $cookies) {
  $scope.myReviews = myReviews.query({userId: $cookies.id});


}]);
