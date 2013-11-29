'use strict';

angular.module('dinoplayerApp', ['ui.bootstrap', 'pascalprecht.translate', 'angular-gestures'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/howto', {
                templateUrl: 'views/howto.html',
                controller: 'HowtoCtrl'
            })
                .otherwise({
                redirectTo: '/'
            });
    })
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en-US', {
            'MENU': 'Menu',
            'PLAYLIST': 'Playlist',
            'ABOUT': 'About',
            'HOWTO': 'How-to',
            'SETTINGS': 'Settings',
            'SAVE': 'Save',
            'WARNING': 'Warning!',
            'WARNING_MSG': 'If you haven\'t prepared your music folder yet, setup ',
            'WARNING_MSG2': '!',
            'MEDIAURL': 'Media URL',
            'SERVICE_SELECT': 'Select your cloud storage: ',
            'SERVICE_OTHER': 'Other web storage',
            'MEDIA_SELECT': 'Add a music folder: ',
            'HELP': 'Help',
            'HELP_PLAYPAUSE': 'Play or pause current track',
            'HELP_NEXTTRACK': 'Change to next track',
            'HELP_PREVIOUSTRACK': 'Change to previous track',
            'VERSION': 'Version',
            'INFORMATION': 'Information',
            'CREATEDBY': 'Created by',
            'CHANGELOG': 'Changelog',
            'LICENCE': 'Licence',
            'READMORE': 'Read more',
            'INSTRUCTION1': 'Copy music into a public available folder (eg. Dropbox\'s Public folder)!',
            'INSTRUCTION2': 'Install DinoPlayer Helper!',
            'INSTRUCTION3': 'Select your music storage service in Settings! (Dropbox / Other service)',
            'INSTRUCTION4': 'Add your music folder (see examples below)!',
            'INSTRUCTION5': 'Save settings & enjoy the music!',
            'MUSICFOLDER_EXAMPLES': 'Music folder examples',
            'ERROR_PLAYLIST_NOT_LOADED': 'Playlist has not been loaded!',
            'ERROR_BROWSER_NOT_SUPPORTED': 'Browser not supported!',
            'ERROR_CAN_NOT_CONNECT': 'Error while connecting!',
            'ERROR_PARSING_SETTINGS': 'Error while pasing settings',
            'ERROR_NO_MEDIAURL': 'Please add a music folder first'
        });

        var huTranslation = {
            'MENU': 'Menü',
            'PLAYLIST': 'Lejátszólista',
            'ABOUT': 'Információ',
            'HOWTO': 'How-to',
            'SETTINGS': 'Beállítások',
            'SAVE': 'Mentés',
            'WARNING': 'Figyelem!',
            'WARNING_MSG': 'Ha még nem készítetted elő a zenemappád, telepítsd a ',
            'WARNING_MSG2': '-t!',
            'MEDIAURL': 'Média URL',
            'SERVICE_SELECT': 'Válaszd ki a tárhely szolgáltatód: ',
            'SERVICE_OTHER': 'Más webes tárhely',
            'MEDIA_SELECT': 'Add meg a mappa elérési útját: ',
            'HELP': 'Súgó',
            'HELP_PLAYPAUSE': 'Aktuális szám lejátszása vagy megállítása',
            'HELP_NEXTTRACK': 'Következő szám',
            'HELP_PREVIOUSTRACK': 'Előző szám',
            'VERSION': 'Verzió',
            'INFORMATION': 'Információ',
            'CREATEDBY': 'Készítette',
            'CHANGELOG': 'Changelog',
            'LICENCE': 'Licensz',
            'READMORE': 'Tudj meg többet',
            'INSTRUCTION1': 'Másolj zenét egy publikusan elérhető mappába (például Dropbox Publikus mappája)!',
            'INSTRUCTION2': 'Telepítsd a DinoPlayer Helper-t',
            'INSTRUCTION3': 'Válaszd ki a tárhely szolgáltatód a beállításokban (Dropbox / Más webes tárhely)!',
            'INSTRUCTION4': 'Add meg a mappa elérési útját (lásd a lenti példákat)!',
            'INSTRUCTION5': 'Mentsd el a beállításokat és élvezd a zenét!',
            'MUSICFOLDER_EXAMPLES': 'Zene mappa elérési út példák',
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
