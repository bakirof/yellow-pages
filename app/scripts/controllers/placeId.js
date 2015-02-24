angular.module('app')
  .controller('placeId', ['$scope', 'placeId','$stateParams',
    function ($scope, placeId, $stateParams) {
      $scope.place=placeId.get({id:$stateParams.id});

    }]);
