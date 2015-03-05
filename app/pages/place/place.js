angular.module('app')
  .controller('place', ['$scope', 'place', 'userLike',
    function ($scope, place, userLike) {
      $scope.places = place.query({db: 'yellowDB', collection: 'place'});
      $scope.toggleLike = function (id) {

        var addId = {
          id: id
        };

        $scope.test[$scope.i].userLikePlace.push(addId);

        userLike.update({id: $scope.test[$scope.i]._id},
          {
            userName: $scope.test[$scope.i].userName,
            userLastName: $scope.test[$scope.i].userLastName,
            userEmail: $scope.test[$scope.i].userEmail,
            userPW: $scope.test[$scope.i].userPW,
            userImage: $scope.test[$scope.i].userImage,
            userLikePlace: $scope.test[$scope.i].userLikePlace,
            userReviews: $scope.test[$scope.i].userReviews
          });
      }
    }]);
