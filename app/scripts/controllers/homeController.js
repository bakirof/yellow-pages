angular.module('app')
  .controller("homeController", ['$scope', 'place', '$rootScope', function ($scope, place, $rootScope) {
    $scope.likeReviews = place.query({db: 'yellowDB', collection: 'place'});
    $scope.showLimit = true;

  }]);
