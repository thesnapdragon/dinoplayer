'use strict';

angular.module('dinoplayerApp').controller('MainCtrl', ['$scope', '$timeout', '$rootScope', '$translate', function($scope, $timeout, $rootScope, $translate) {

    $scope.mediaUrl = "https://dl.dropboxusercontent.com/u/2920832/WaitWhat/";

    $scope.init = function(){
        var language = window.navigator.userLanguage || window.navigator.language;
        try {
            $translate.uses(language);
        } catch (error) {
            $translate.uses("en-US");
        }

        if ($rootScope.isPlaying == undefined) {
            $rootScope.isPlaying = false;
        }

        var rand = function() {
            return Math.random().toString(36).substr(2);
        };

        var token = function() {
            return rand() + rand() + rand() + rand();
        };
        if (typeof(Storage) !== undefined) {
            if (localStorage.dinoPlayerHash == undefined || localStorage.dinoPlayerHash == null) {
                localStorage.dinoPlayerHash = token();
            }
        } else {
            utils.status.show($translate('ERROR_BROWSER_NOT_SUPPORTED'));
        }

        if ($rootScope.authHash == undefined) {
            $rootScope.authHash = localStorage.dinoPlayerHash;
        }

        if (!$rootScope.isLoaded) {
            $scope.makeRequest($scope.mediaUrl + "list.json", 'list');
        }
    };

    $scope.initPlayer = function() {
        if ($rootScope.trackSwitchedTo > -1) {
            $scope.playTrack($rootScope.trackSwitchedTo);
            $rootScope.trackSwitchedTo = -1;
            $rootScope.isControlVisible = 0;
        }
    };

    $scope.$on('nosuchvalue', function(event, value) {
        $timeout($scope.detailsLoaded, 4000).then(null);
    });

    $scope.makeRequest = function(url, type) {
        var http_request = new XMLHttpRequest({mozSystem: true});
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('application/json');
        }
        if (!http_request) {
            utils.status.show($translate('ERROR_CAN_NOT_CONNECT'));
            return false;
        }
        http_request.onreadystatechange = function() {
            $scope.processResponse(http_request, type);
        };
        http_request.open('GET', url, true);
        http_request.send(null);
        return http_request;
    };

    $scope.processResponse = function(http_request, type) {
        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                switch(type) {
                    case 'list':
                        $scope.getPlaylist(http_request.responseText);
                        break;
                    case 'details':
                        $scope.getTrackDetails(http_request.responseText);
                        break;
                    case 'cover':
                        $scope.getCover(http_request.responseText);
                        break;
                }
            } else {
                utils.status.show($translate('ERROR_CAN_NOT_CONNECT'));
            }
        }
    };

    $scope.getPlaylist = function(playlist) {
        try {
            var playlist = JSON.parse(playlist);
        } catch (error) {
            utils.status.show($translate('ERROR_PARSING_PLAYLIST'));
        }
        $rootScope.playlist = new Array();
        for (var i = 0; i < playlist.length; i++) {
            var hash = {filename: playlist[i]};
            $rootScope.playlist.push(hash);
        }
        $rootScope.trackCounter = 0;
        $rootScope.detailsFetched = false;
        $scope.getTrack();
        $rootScope.isLoaded = true;
        $scope.$apply();
    };

    $rootScope.playPause = function() {
        if (!$rootScope.isLoaded) {
            utils.status.show($translate('ERROR_PLAYLIST_NOT_LOADED'));
            return;
        }
        if (!$rootScope.isPlaying) {
            $scope.getTrackIframe($rootScope.playlist[$rootScope.trackCounter].filename);
            $rootScope.audio.play();
            $rootScope.isPlaying = true;
        } else {
            $rootScope.audio.pause();
            $rootScope.isPlaying = false;
        }
    };

    $scope.getTrack = function() {
        $rootScope.audio = new Audio();
        $rootScope.audio.setAttribute('src', $scope.mediaUrl + $rootScope.playlist[$rootScope.trackCounter].filename);
        $rootScope.audio.setAttribute('preload', 'auto');
        $rootScope.progressBar = [0,0];
        $rootScope.coverUrl = $scope.mediaUrl + "index.html?type=cover&name=" + $rootScope.playlist[$rootScope.trackCounter].filename;

        //~ TODO: volume control
        // Get the HTML5 range input element and append audio volum adjustement on change
        //~ var volume = document.getElementById('volume');
        //~ volume.addEventListener('change', function(){
            //~ $rootScope.audio.volume = parseFloat(this.value / 10);
        //~ }, false);

        // time played
        $rootScope.audio.addEventListener("timeupdate", function() {
            $rootScope.playlist[$rootScope.trackCounter].currentTime = $rootScope.audio.currentTime;
            var play = parseInt(($rootScope.audio.currentTime/$rootScope.audio.duration)*100);
            $rootScope.progressBar[0] = play;
            var buff = $rootScope.progressBar[1];
            if (buff + play > 100) {
                $rootScope.progressBar[1] = 100 - play;
            }
            $scope.$apply();
        }, false);

        // duration
        $rootScope.audio.addEventListener('loadedmetadata', function() {
            $rootScope.playlist[$rootScope.trackCounter].length = $rootScope.audio.duration;
            $scope.$apply();
        }, false);

        // preloading
        $rootScope.audio.addEventListener('progress', function() {
            var buff = parseInt(($rootScope.audio.buffered.end($rootScope.audio.buffered.length-1)/$rootScope.audio.duration)*100);
            var play = $rootScope.progressBar[0];
            if (buff - play > 100) {
                buff = 100 - play;
            } else {
                buff = buff - play;
            }
            $rootScope.progressBar[1] = buff;
        }, false);

        // song ended
        $rootScope.audio.addEventListener('ended', function() {
            if($rootScope.trackCounter == $rootScope.playlist.length - 1) {
                //~ TODO: song end
            } else {
                $scope.nextTrack();
            }
        }, false);
    };

    $scope.getTrackIframe = function(name) {
        var iframe = document.getElementById("detailsIframe");
        iframe.src = $scope.mediaUrl + 'index.html?type=track&hash=' + $rootScope.authHash + '&name=' + name;
    };

    $scope.getTrackDetails = function(detailsJson) {
        var details = null;
        try {
            details = JSON.parse(detailsJson);
        } catch (error) {
            utils.status.show($translate('ERROR_PARSING_DETAILS'));
        }
        if (details['errors'] != undefined && details.errors.length > 0 && !$rootScope.detailsFetched) {
            $scope.$emit('nosuchvalue', 'error');
        } else {
            if (!$rootScope.detailsFetched && $rootScope.playlist[$rootScope.trackCounter].filename == details.filename) {
                $rootScope.playlist[$rootScope.trackCounter].details = details;
                $rootScope.detailsFetched = true;
                var getcoverparams = {'artist' : $rootScope.playlist[$rootScope.trackCounter].details.artist,
                    'album' : $rootScope.playlist[$rootScope.trackCounter].details.album};
                var url = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=74f369c06f5d9597b9658a7a1cfd62d9&format=json&" + $.param(getcoverparams);
                $scope.makeRequest(url, 'cover');
            } else {
                $scope.$emit('nosuchvalue', 'error');
            }
            $scope.$apply();
        }
    };

    $scope.detailsLoaded = function() {
        if (!$rootScope.isLoaded || $rootScope.isLoaded == undefined || $rootScope.detailsFetched) return;
        var getdetailsparams = { "hash" : $rootScope.authHash };
        var url = "http://thesnapdragon.herokuapp.com/getTrackDetails?" + $.param(getdetailsparams);
        $scope.makeRequest(url, 'details');
    };

    $scope.getCover = function(coverJson) {
        try {
            var cover = JSON.parse(coverJson);
        } catch (error) {
            utils.status.show($translate('ERROR_PARSING_DETAILS'));
        }
        if (cover.album != undefined && cover.album.image != undefined) {
            var img = cover.album.image[cover.album.image.length - 1];
            $rootScope.playlist[$rootScope.trackCounter].cover = img['#text'];
        }
    };

    $scope.backToPlayer = function(index) {
        $rootScope.trackSwitchedTo = index;
    };

    $scope.showControl = function() {
        if ($rootScope.isControlVisible == -2) return;
        if ($rootScope.isControlVisible == undefined || $rootScope.isControlVisible == 0) {
            $rootScope.isControlVisible = 1;
            $("#overlayController").fadeIn("fast");
            $scope.timeoutId = $timeout(function() {
                $("#overlayController").fadeOut("fast");
                $rootScope.isControlVisible = 0;
            }, 5000);
        } else if ($rootScope.isControlVisible == 1) {
            $("#overlayController").fadeOut("fast");
            $rootScope.isControlVisible = 0;
        } else {
            $timeout.cancel($scope.timeoutId );
            $rootScope.isControlVisible = 1;
            $timeout(function() {
                $("#overlayController").fadeOut("fast");
                $rootScope.isControlVisible = 0;
            }, 3000);
        }
    };

    $scope.dontShowControl = function() {
        $rootScope.isControlVisible = -2;
    };

    $scope.playTrack = function(index) {
        $rootScope.audio.pause();
        $rootScope.trackCounter = index;
        if ($rootScope.playlist[$rootScope.trackCounter].details == undefined) {
            $rootScope.detailsFetched = false;
            $scope.getTrackIframe($rootScope.playlist[$rootScope.trackCounter].filename);
            $scope.detailsLoaded();
        }
        $scope.getTrack();
        $rootScope.audio.play();
    };

    $scope.previousTrack = function() {
        if ($rootScope.trackCounter > 0) {
            $rootScope.trackCounter--;
            $scope.playTrack($rootScope.trackCounter);
        }
    };

    $scope.nextTrack = function() {
        if ($rootScope.trackCounter < $rootScope.playlist.length - 1) {
            $rootScope.trackCounter++;
            $scope.playTrack($rootScope.trackCounter);
        }
    };
}]);
