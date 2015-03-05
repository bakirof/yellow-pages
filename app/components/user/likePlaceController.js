angular.module('app').controller('likePlaceController', ['$scope', 'reviewOut', function ($scope, reviewOut) {
  $scope.reviews = reviewOut.query({idPlace: $scope.count.id}).$promise.then(function (value) {
    $scope.reviews = value;
    $scope.showLimit = true;
    if ($scope.limit < $scope.reviews.length) {
      $scope.showLimit = true;
    }
    else {
      $scope.showLimit = false;
    }
    $scope.more = function () {
      $scope.limit += 3;
      if ($scope.limit < $scope.reviews.length) {
        $scope.showLimit = true;
      }
      else {
        $scope.showLimit = false;
      }
    }
  });


}]);
