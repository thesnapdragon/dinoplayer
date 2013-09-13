'use strict';

describe('Directive: eatClick', function () {
  beforeEach(module('dinoplayerApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<eat-click></eat-click>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the eatClick directive');
  }));
});
