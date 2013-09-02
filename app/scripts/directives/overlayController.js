'use strict';

angular.module('dinoplayerApp').directive('overlayController', function ($timeout, $rootScope) {
    return {
        //~ scope: {
            //~ isPlaying: '=isPlaying'
        //~ },
        restrict: 'E',
        template: '<span class="overlay">' +
            '<span class="overlaycontrol" ng-switch="isPlaying">' +
            '<img ng-switch-when="true" src="images/pause.png" ng-click="playPause()">' +
            '<img ng-switch-default src="images/play.png" ng-click="playPause()">' +
            '</span>' +
            '</span>',
        link: function postLink(scope, element, attrs) {
            scope.$on('controlchanged', function() {
                scope.isPlaying = $rootScope.isPlaying;
            });

            scope.playPause = function() {
                $rootScope.isControlVisible = -1;
                $rootScope.playPause();
                scope.isPlaying = $rootScope.isPlaying;
            };
        }
    };
});
