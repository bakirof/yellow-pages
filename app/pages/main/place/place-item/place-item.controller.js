angular.module('app')
  .controller('PlaceItemController', ['$scope', 'placeId', '$stateParams', 'review', 'reviewOut', 'userReview',
    function ($scope, placeId, $stateParams, review, reviewOut, userReview) {
      $scope.place = placeId.get({id: $stateParams.id});
      $scope.reviews = reviewOut.query({idPlace: $stateParams.id});


    }]);
