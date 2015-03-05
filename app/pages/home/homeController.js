angular.module('app')
  .controller("homeController", ['$scope', 'place', '$rootScope', 'userLike', function ($scope, place, $rootScope, userLike) {
    $scope.sortReverse = true;
    $scope.limit = 2;
    $scope.likeReviews = place.query({db: 'yellowDB', collection: 'place'}).$promise.then(function (value) {
      $scope.likeReviews = value;
      if ($scope.test[$scope.i].userLikePlace.length != 0) {
        $scope.haveLikes = true;
      }
      else {
        $scope.haveLikes = false;
      }
    });



    $scope.deleteAllLikePlaces = function () {

      $scope.test[$scope.i].userLikePlace = [];
      $scope.haveLikes = false;


      userLike.update({id: $scope.test[$scope.i]._id},
        {
          userName: $scope.test[$scope.i].userName,
          userLastName: $scope.test[$scope.i].userLastName,
          userEmail: $scope.test[$scope.i].userEmail,
          userPW: $scope.test[$scope.i].userPW,
          userImage: $scope.test[$scope.i].userImage,
          userLikePlace: [],
          userReviews: $scope.test[$scope.i].userReviews
        });

    };


  }]);
