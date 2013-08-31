'use strict';

angular.module('dinoplayerApp').directive('overlayController', function ($timeout, $rootScope) {
    return {
        //~ scope: {
            //~ isPlaying: '=isPlaying'
        //~ },
        restrict: 'E',
        template: '<span class="overlay">' +
            '<span class="overlaycontrol" ng-switch="isPlaying">' +
            '<img ng-switch-when="true" src="img/pause.png" ng-click="playPause()">' +
            '<img ng-switch-default src="img/play.png" ng-click="playPause()">' +
            '</span>' +
            '</span>',
        link: function postLink(scope, element, attrs) {
            if (scope.isPlaying) {
                scope.img = 'pause.png';
            } else {
                scope.img = 'play.png'
            }

            scope.$on('controlchanged', function() {
                scope.isPlaying = $rootScope.isPlaying;
            });

            scope.playPause = function() {
                $rootScope.isControlVisible = -1;
                scope.isPlaying = !scope.isPlaying;
                if (scope.isPlaying) {
                    scope.img = 'pause.png';
                } else {
                    scope.img = 'play.png'
                }

                $rootScope.playPause();
            };
        }
    };
});
