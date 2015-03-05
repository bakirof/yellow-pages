'use strict';

describe('Controller: AuthController', function () {

  // load the controller's module
  beforeEach(module('test1App'));

  var AuthController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthController = $controller('AuthController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
