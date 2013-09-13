'use strict';

angular.module('dinoplayerApp').directive('eatClick', function () {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
            event.stopPropagation();
        });
    }
});
