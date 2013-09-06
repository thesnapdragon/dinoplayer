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
            'SETTINGS': 'Settings',
            'SAVE': 'Save',
            'WARNING': 'Warning!',
            'WARNING_MSG': 'If you haven\'t prepared your music folder yet, setup ',
            'WARNING_MSG2': '!',
            'MEDIAURL': 'Media URL',
            'SERVICE_SELECT': 'Select your cloud storage: ',
            'MEDIA_SELECT': 'Add a music folder: ',
            'HELP': 'Help',
            'HELP_PLAYPAUSE': 'Play or pause current track',
            'HELP_NEXTTRACK': 'Change to next track',
            'HELP_PREVIOUSTRACK': 'Change to previous track',
            'ERROR_PLAYLIST_NOT_LOADED': 'Playlist has not been loaded!',
            'ERROR_BROWSER_NOT_SUPPORTED': 'Browser not supported!',
            'ERROR_CAN_NOT_CONNECT': 'Error while connecting!',
            'ERROR_PARSING_SETTINGS': 'Error while pasing settings',
            'ERROR_NO_MEDIAURL': 'Please add a music folder first'
        });

        var huTranslation = {
            'MENU': 'Menü',
            'PLAYLIST': 'Lejátszólista',
            'SETTINGS': 'Beállítások',
            'SAVE': 'Mentés',
            'WARNING': 'Figyelem!',
            'WARNING_MSG': 'Ha még nem készítetted elő a zenemappád, telepítsd a ',
            'WARNING_MSG2': '-t!',
            'MEDIAURL': 'Média URL',
            'SERVICE_SELECT': 'Válaszd ki a tárhely szolgáltatód: ',
            'MEDIA_SELECT': 'Add meg a mappa elérési útját: ',
            'HELP': 'Súgó',
            'HELP_PLAYPAUSE': 'Aktuális szám lejátszása vagy megállítása',
            'HELP_NEXTTRACK': 'Következő szám',
            'HELP_PREVIOUSTRACK': 'Előző szám',
            'ERROR_PLAYLIST_NOT_LOADED': 'A lejátszólista még nem töltődött be!',
            'ERROR_BROWSER_NOT_SUPPORTED': 'Böngésző nem támogatott!',
            'ERROR_CAN_NOT_CONNECT': 'Hiba történt a csatlakozás során!',
            'ERROR_PARSING_SETTINGS': 'Hiba történt a beállítások olvasásánál',
            'ERROR_NO_MEDIAURL': 'Kérlek adj hozzá először egy zenemappát'
        };
        $translateProvider.translations('hu', huTranslation);
        $translateProvider.translations('hu-HU', huTranslation);

        $translateProvider.preferredLanguage('hu-HU');
}]);
