angular.module('app').controller('likePlaceController', ['$scope', 'reviewOut', function ($scope, reviewOut) {
  $scope.reviews = reviewOut.query({idPlace: $scope.count.id});
  
}]);
