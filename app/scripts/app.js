'use strict';

angular.module('dinoplayerApp', ['ui.bootstrap', 'pascalprecht.translate', 'angular-gestures'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
                .otherwise({
                redirectTo: '/'
            });
    })
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en-US', {
            'MENU': 'Menu',
            'PLAYLIST': 'Playlist',
            'ERROR_PLAYLIST_NOT_LOADED_': 'Playlist has not been loaded!',
            'ERROR_BROWSER_NOT_SUPPORTED': 'Browser not supported!',
            'ERROR_CAN_NOT_CONNECT': 'Error while connecting!',
            'ERROR_PARSING_PLAYLIST': 'Error while parsing playlist!',
            'ERROR_PARSING_DETAILS': 'Error while parsing details'
        });

        var huTranslation = {
            'MENU': 'Menü',
            'PLAYLIST': 'Lejátszólista',
            'ERROR_PLAYLIST_NOT_LOADED': 'A lejátszólista még nem töltődött be!',
            'ERROR_BROWSER_NOT_SUPPORTED': 'Böngésző nem támogatott!',
            'ERROR_CAN_NOT_CONNECT': 'Hiba történt a csatlakozás során!',
            'ERROR_PARSING_PLAYLIST': 'Hiba történt a lejátszólista olvasásánál',
            'ERROR_PARSING_DETAILS': 'Hiba történt a szám részleteinek olvasásánál'
        };
        $translateProvider.translations('hu', huTranslation);
        $translateProvider.translations('hu-HU', huTranslation);

        $translateProvider.preferredLanguage('hu-HU');
}]);
