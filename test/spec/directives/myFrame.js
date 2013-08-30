'use strict';

describe('Directive: myFrame', function () {
  beforeEach(module('dinoplayerApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<my-frame></my-frame>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the myFrame directive');
  }));
});
