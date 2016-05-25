'use strict';

describe('Controller: AnnonceCtrl', function () {

  // load the controller's module
  beforeEach(module('transaldisAngularGruntApp'));

  var AnnonceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnnonceCtrl = $controller('AnnonceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AnnonceCtrl.awesomeThings.length).toBe(3);
  });
});
