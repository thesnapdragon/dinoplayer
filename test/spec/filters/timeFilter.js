'use strict';

describe('Filter: timeFilter', function () {

  // load the filter's module
  beforeEach(module('dinoplayerApp'));

  // initialize a new instance of the filter before each test
  var timeFilter;
  beforeEach(inject(function ($filter) {
    timeFilter = $filter('timeFilter');
  }));

  it('should return the input prefixed with "timeFilter filter:"', function () {
    var text = 'angularjs';
    expect(timeFilter(text)).toBe('timeFilter filter: ' + text);
  });

});
