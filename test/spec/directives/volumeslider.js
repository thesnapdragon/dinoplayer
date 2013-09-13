'use strict';

describe('Directive: volumeslider', function () {
  beforeEach(module('dinoplayerApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<volumeslider></volumeslider>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the volumeslider directive');
  }));
});
