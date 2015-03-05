angular.module('app').controller('PlacePlaceController', ['$scope', '$rootScope', 'userLike', function ($scope, $rootScope, userLike) {
if($scope.test[$scope.i]){
  $scope.getLike = userLike.get({id: $scope.test[$scope.i]._id}).$promise.then(function (value) {
    $scope.like = true;
    $scope.getLike = value;
    for (var j = 0; j < $scope.getLike.userLikePlace.length; j++) {

      if ($scope.getLike.userLikePlace[j].id == $scope.place._id) {
        $scope.like = false;
        break;
      }
      else {
        $scope.like = true;
      }
    }


  });




}



  $scope.toggleLike = function (id) {
    $scope.like = false;
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
