angular.module('app').controller('ReviewHomeItemController', ['$scope', 'userReview',function ($scope, userReview) {
  $scope.uId = $scope.item.userId;
  $scope.reviewId = userReview.get({id: $scope.uId}).$promise.then(function (value) {
    $scope.reviewId = value;

  });

}]);
