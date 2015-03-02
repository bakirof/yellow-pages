angular.module("app").controller('settingsGroupController', ['$scope', 'userLike', function ($scope, userLike) {
  $scope.newNameClick = function () {
    if ($scope.newNameForm.$valid) {
      userLike.update(
        {id: $scope.test[$scope.i]._id},
        {
          userName: $scope.newName,
          userLastName: $scope.test[$scope.i].userLastName,
          userEmail: $scope.test[$scope.i].userEmail,
          userPW: $scope.test[$scope.i].userPW,
          userImage: $scope.test[$scope.i].userImage,
          userLikePlace: $scope.test[$scope.i].userLikePlace,
          userReviews: $scope.test[$scope.i].userReviews
        }
      );
      location.reload();
    }

  };
  $scope.newLastNameClick = function () {
    if ($scope.newLastNameForm.$valid) {
      userLike.update(
        {id: $scope.test[$scope.i]._id},
        {
          userName: $scope.test[$scope.i].userName,
          userLastName: $scope.newLastName,
          userEmail: $scope.test[$scope.i].userEmail,
          userPW: $scope.test[$scope.i].userPW,
          userImage: $scope.test[$scope.i].userImage,
          userLikePlace: $scope.test[$scope.i].userLikePlace,
          userReviews: $scope.test[$scope.i].userReviews
        }
      );
      location.reload();
    }
  };
  $scope.newEmailClick = function () {
    if ($scope.newEmailForm.$valid) {
      userLike.update(
        {id: $scope.test[$scope.i]._id},
        {
          userName: $scope.test[$scope.i].userName,
          userLastName: $scope.test[$scope.i].userLastName,
          userEmail: $scope.newEmail,
          userPW: $scope.test[$scope.i].userPW,
          userImage: $scope.test[$scope.i].userImage,
          userLikePlace: $scope.test[$scope.i].userLikePlace,
          userReviews: $scope.test[$scope.i].userReviews
        }
      );
      location.reload();
    }
  };


}]);

