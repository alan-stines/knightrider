'use strict';

describe('Controller: RidesCtrl', function () {

  // load the controller's module
  beforeEach(module('knightriderApp'));

  var RidesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RidesCtrl = $controller('RidesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RidesCtrl.awesomeThings.length).toBe(3);
  });
});
