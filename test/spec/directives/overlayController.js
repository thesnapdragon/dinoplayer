'use strict';

describe('Directive: overlayController', function () {
  beforeEach(module('dinoplayerApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<overlay-controller></overlay-controller>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the overlayController directive');
  }));
});
