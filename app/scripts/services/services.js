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
