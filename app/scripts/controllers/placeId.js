angular.module('app')
  .controller('placeId', ['$scope', 'placeId', '$stateParams', 'review', 'reviewOut','userReview',
    function ($scope, placeId, $stateParams, review, reviewOut,userReview) {
      $scope.place = placeId.get({id: $stateParams.id});
      $scope.reviews = reviewOut.query({idPlace: $stateParams.id});
      $scope.userId = userReview.query({id: $scope.uId});

    }]);
