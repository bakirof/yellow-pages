angular.module('app')
  .controller('placeIdController', ['$scope', 'placeId', '$stateParams', 'review',
    function ($scope, placeId, $stateParams, review) {
      $scope.place = placeId.get({id: $stateParams.id});
      $scope.uId = $scope.comment.userId;
      console.log($scope.userId);

    }]);
