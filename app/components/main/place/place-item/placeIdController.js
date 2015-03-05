angular.module('app')
  .controller('placeIdController', ['$scope', 'placeId', '$stateParams', 'userReview',
    function ($scope, placeId, $stateParams, userReview) {

      $scope.uId = $scope.comment.userId;
      $scope.reviewId = userReview.get({id: $scope.uId}).$promise.then(function (value) {
        $scope.reviewId = value;

      });



    }]);
