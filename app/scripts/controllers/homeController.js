angular.module('app')
  .controller("homeController", ['$scope', 'place', function ($scope, place) {
    $scope.likeReviews = place.query({db: 'yellowDB', collection: 'place'});

  }]);
