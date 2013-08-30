'use strict';

angular.module('dinoplayerApp').filter('timeFilter', function () {
    return function(input) {
        if (input == undefined || input == null) {
            return "00:00";
        }
        var minutes = parseInt((parseInt(input) / 60) % 60);
        var seconds = parseInt(parseInt(input) % 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    };
});
