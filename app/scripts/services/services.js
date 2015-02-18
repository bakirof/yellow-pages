angular.module('app')
  .factory('test', ['$resource',
  function ($resource) {
    return $resource('http://localhost:3000/:db/:collection');
  }]);

