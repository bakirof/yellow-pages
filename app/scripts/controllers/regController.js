angular.module('app').controller('regController', ["$scope", '$state', 'userAdd', function ($scope, $state, userAdd) {
  $scope.sign = function () {

    if ($scope.signUp.$valid) {
      userAdd.save(
        {
          userName: $scope.name,
          userLastName: $scope.family,
          userEmail: $scope.email,
          userPW: $scope.password,
          userImage: "images/default_user.png",
          userLikePlace: [],
          userReviews: []
        });
      $state.go('state2');
      location.reload();
    }


  };
}]);
