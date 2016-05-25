'use strict';

describe('Service: annonce', function () {

  // load the service's module
  beforeEach(module('transaldisAngularGruntApp'));

  // instantiate service
  var annonce;
  beforeEach(inject(function (_annonce_) {
    annonce = _annonce_;
  }));

  it('should do something', function () {
    expect(!!annonce).toBe(true);
  });

});
