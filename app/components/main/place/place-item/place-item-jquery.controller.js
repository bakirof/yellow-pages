angular.module('app')
  .controller('PlaceItemJqueryController', function () {

    $(document).ready(function () {
      $('.placeId-comment2').hide();
      var toggleText = $('#addReview').text();
      $('#addReview').click(function () {
        $('.placeId-comment2').slideToggle();
      });
    });


  });





