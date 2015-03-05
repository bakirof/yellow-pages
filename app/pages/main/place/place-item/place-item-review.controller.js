angular.module('app')
  .controller('PlaceItemReviewController', ['$scope', 'placeId', '$stateParams', 'review', 'reviewOut',
    function ($scope, placeId, $stateParams, review, reviewOut) {

      var data = new Date();
      $scope.day = data.getDate();
      $scope.month = data.getMonth() + 1;
      $scope.year = data.getFullYear();
      $scope.hour = data.getHours();
      $scope.minutes = data.getMinutes();
      $scope.seconds = data.getSeconds();

      $scope.addReview = function () {

        if ($scope.userAddReview.$valid) {
          review.save(
            {
              userId: $scope.test[$scope.i]._id,
              userPlaceId: $stateParams.id,
              text: $scope.comment,
              rating: $scope.placeRating,
              date: $scope.day + "." + $scope.month + "." + $scope.year,
              time: $scope.hour + ":" + $scope.minutes
            }
          );
          location.reload();

        }
      };

    }]);

