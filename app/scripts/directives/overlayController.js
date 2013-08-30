'use strict';

angular.module('dinoplayerApp').directive('overlayController', function ($timeout, $rootScope) {
    return {
        scope: {
            isPlaying: '=isPlaying'
        },
        restrict: 'E',
        template: '<span class="overlay">' +
            '<img src="img/{{img}}" alt="overlayController" ng-click="playPause()"/>' +
            '</span>',
        link: function postLink(scope, element, attrs) {
            if (scope.isPlaying) {
                scope.img = 'pause.png';
            } else {
                scope.img = 'play.png'
            }

            scope.playPause = function() {
                $rootScope.isControlVisible = -1;
                scope.isPlaying = !scope.isPlaying;
                if (scope.isPlaying) {
                    scope.img = 'pause.png';
                } else {
                    scope.img = 'play.png'
                }

                $rootScope.playPause();
            }
        }
    };
});
