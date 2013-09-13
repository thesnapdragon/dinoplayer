'use strict';

angular.module('dinoplayerApp').directive('volumeslider', ['$rootScope', function($rootScope) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="volumecontrol">' +
        '<button class="volumebutton" ng-click="toggleSlider()"/><br/>' +
        '<input id="volumeslider" type="text" value="" data-slider-min="100" data-slider-max="00" data-slider-step="1" data-slider-orientation="vertical" data-slider-tooltip="show"/>' +
        '</div>',
        link: function ($scope, element, attrs) {
            var slider = $('#volumeslider').slider();
            $('.slider').toggle();

            slider.on('slide', function(event) {
                $rootScope.audio.volume = parseFloat(event.value / 100);
                $scope.$apply();
            });

            $scope.toggleSlider = function() {
                if (!$rootScope.isPlaying) return;
                $('.slider').toggle();
            };
        }
    };
}]);
