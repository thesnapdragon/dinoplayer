'use strict';

describe('Filter: titleFilter', function () {

  // load the filter's module
  beforeEach(module('dinoplayerApp'));

  // initialize a new instance of the filter before each test
  var titleFilter;
  beforeEach(inject(function ($filter) {
    titleFilter = $filter('titleFilter');
  }));

  it('should return the input prefixed with "titleFilter filter:"', function () {
    var text = 'angularjs';
    expect(titleFilter(text)).toBe('titleFilter filter: ' + text);
  });

});
