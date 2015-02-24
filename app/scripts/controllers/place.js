angular.module('app')
  .controller('place', ['$scope', 'place',
    function ($scope, place) {
      $scope.places = place.query({db: 'yellowDB', collection: 'place'});
      $scope.rel = function () {
      };


    }]);
