angular.module('app')
  .controller('placeId', ['$scope', 'placeId', '$stateParams', 'userReview', 'placeReview',
    function ($scope, placeId, $stateParams, userReview, placeReview) {

      $scope.place = placeId.get({id: $stateParams.id});

      console.log($scope.ordering);
      $(document).ready(function () {
        $('.placeId-comment2').hide();
        $('#addReview').click(function () {
          $('.placeId-comment2').fadeIn();
        });
      });
      var data = new Date();
      $scope.day = data.getDate();
      $scope.month = data.getMonth();
      $scope.year = data.getFullYear();
      $scope.hour = data.getHours();
      $scope.minutes = data.getMinutes();
      $scope.seconds = data.getSeconds();

      $scope.addReview = function () {

        if ($scope.userAddReview.$valid) {

          var addId = {
            placeId: $scope.place._id,
            text: $scope.comment,
            rating: $scope.placeRating
          };
          $scope.test[$scope.i].userReviews.push(addId);


          userReview.update({id: $scope.test[$scope.i]._id},
            {
              userName: $scope.test[$scope.i].userName,
              userEmail: $scope.test[$scope.i].userEmail,
              userPW: $scope.test[$scope.i].userPW,
              userImage: $scope.test[$scope.i].userImage,
              userLikePlace: $scope.test[$scope.i].userLikePlace,
              userReviews: $scope.test[$scope.i].userReviews
            });

          var add = {
            userId: $scope.test[$scope.i]._id,
            userName: $scope.test[$scope.i].userName,
            userImage: $scope.test[$scope.i].userImage,
            rating: $scope.placeRating,
            comment: $scope.comment,
            data: $scope.day + "." + $scope.month + "." + $scope.year,
            time: $scope.hour + ":" + $scope.minutes + ":" + $scope.seconds
          };
          $scope.place.reviews.push(add);

          placeReview.update(
            {id: $scope.place._id},
            {
              placeName: $scope.place.placeName,
              category: $scope.place.category,
              adres: $scope.place.adres,
              description: $scope.place.description,
              imageUrl: $scope.place.imageUrl,
              rating: $scope.place.rating,
              hours: $scope.place.hours,
              reviews: $scope.place.reviews
            }
          );
          location.reload();

        }
      };

    }]);

