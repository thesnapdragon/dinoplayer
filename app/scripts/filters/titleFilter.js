'use strict';

angular.module('dinoplayerApp').filter('titleFilter', function () {
    return function (input) {
        String.prototype.capitalize = function() {
            return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        };
        return input.capitalize();
    };
});
