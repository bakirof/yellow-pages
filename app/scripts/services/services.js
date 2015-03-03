angular.module('app')
  .factory('test', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/:db/:collection');
    }]);

angular.module('app')
  .factory('place', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/:db/:collection');
    }]);

angular.module('app')
  .factory('placeId', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/yellowDB/place/:id');
    }]);

angular.module('app')
  .factory('user', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/yellowDB/user');
    }]);

angular.module('app')
  .factory('userLike', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/yellowDB/user/:id');
    }]);

angular.module('app')
  .factory('userAdd', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/yellowDB/user/');
    }]);

angular.module('app')
  .factory('userReview', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/yellowDB/user/:id');
    }]);
angular.module('app')
  .factory('placeReview', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/yellowDB/place/:id');
    }]);

angular.module('app')
  .factory('review', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/yellowDB/review/');
    }]);
angular.module('app')
  .factory('reviewOut', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/yellowDB/review?query={"userPlaceId"%3A":idPlace"}');
    }]);
angular.module('app')
  .factory('myReviews', ['$resource',
    function ($resource) {
      return $resource('http://localhost:3000/yellowDB/review?query={"userId"%3A":userId"}');
    }]);

