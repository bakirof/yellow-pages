angular.module('app')
  .controller("homeController", ['$scope', 'place', '$rootScope', 'userLike', function ($scope, place, $rootScope, userLike) {
    $scope.likeReviews = place.query({db: 'yellowDB', collection: 'place'});
    $scope.showLimit = true;
    $scope.deleteAllLikePlaces = function () {
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
      location.reload();
    };


  }]);
