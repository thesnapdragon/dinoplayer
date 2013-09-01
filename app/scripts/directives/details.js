'use strict';

angular.module('dinoplayerApp').directive('details', function () {
    return {
        scope: {
            track: '=track'
        },
        replace: true,
        restrict: 'E',
        template: '<div ng-switch="track.details">' +
            '<span ng-switch-when="undefined">' +
            '<strong>{{track.filename}}</strong>' +
            '</span>' +
            '<span ng-switch-default>' +
            '<p>{{track.details.artist | titleFilter}} - {{track.details.album | titleFilter}}</p>' +
            '<strong>{{track.details.title | titleFilter}}</strong>' +
            '</span>' +
            '</div>'
    };
});
